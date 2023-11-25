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
   const { data, loading, error } = useFetch<PlayerData>(
      `https://mush.com.br/api/player/${playerName}`
   );

   React.useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   }, [playerName]);

   if (loading) {
      document.title = "Carregando... | MushMC Player Stats";
      return (
         <div className="loadingContainer">
            <div className="loading"></div>
         </div>
      );
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

         <section className={`${styles.playerSummaryContainer} animeLeft`}>
            <PlayerSummary data={data} />
         </section>

         <section className={`${styles.statsContainer} animeLeft`}>
            <Bedwars data={data.response.stats.bedwars} />
         </section>
      </HelmetProvider>
   );
}

export default PlayerPage;
