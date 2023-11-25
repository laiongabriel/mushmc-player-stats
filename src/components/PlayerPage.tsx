import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../styles/PlayerPage.module.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PlayerNotFound from "./PlayerNotFound";
import Bedwars from "./Minigames/Bedwars";
import PlayerSummary from "./PlayerSummary";
import React from "react";

function PlayerPage() {
   const { playerName } = useParams();
   const [skeleton, setSkeleton] = React.useState(true);
   const { data, loading, error } = useFetch<PlayerData>(
      `https://mush.com.br/api/player/${playerName}`
   );

   function handlePlayerHeadLoad(e: React.SyntheticEvent<HTMLImageElement>) {
      setSkeleton(false);
      e.currentTarget.style.opacity = "1";
   }

   React.useEffect(() => {
      setSkeleton(true);
   }, [playerName]);

   if (loading) {
      document.title = "Carregando... | MushMC Player Stats";
      return <p>Carregando...</p>;
   }
   if (error) return <p>{error}</p>;
   if (data?.success === false) return <PlayerNotFound />;
   if (!data) return null;
   return (
      <HelmetProvider>
         <Helmet>
            <title>
               {data.response.account.username} | MushMC Player Stats
            </title>
            <link
               rel="shortcut icon"
               href={`https://mineskin.eu/helm/${playerName}/16.png`}
               type="image/x-icon"
            />
         </Helmet>

         <main>
            <section className={styles.playerSummaryContainer}>
               <PlayerSummary
                  data={data}
                  skeleton={skeleton}
                  handlePlayerHeadLoad={handlePlayerHeadLoad}
               />
            </section>

            <section className={styles.statsContainer}>
               <Bedwars data={data.response.stats.bedwars} />
            </section>
         </main>
      </HelmetProvider>
   );
}

export default PlayerPage;
