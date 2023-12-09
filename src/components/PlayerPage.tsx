import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../styles/PlayerPage.module.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PlayerNotFound from "./Helper/PlayerNotFound";
import Bedwars from "./Minigames/Bedwars";
import Skywars from "./Minigames/Skywars";
import PlayerSummary from "./PlayerSummary";
import HungerGames from "./Minigames/HungerGames";
import PvP from "./Minigames/PvP";

function PlayerPage() {
   const { playerName } = useParams();
   const { data, loading, error } = useFetch<PlayerData>(
      `https://mush.com.br/api/player/${playerName}`
   );

   if (loading) {
      document.title = "Carregando... | MushMC Player Stats";
      return (
         <div className="loadingContainer">
            <div className="loading"></div>
            <p>Carregando estatísticas de {playerName}...</p>
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
            <Skywars data={data.response.stats.skywars_r1} />
            <HungerGames data={data.response.stats.hungergames} />
            <PvP data={data.response.stats.pvp} />
         </section>
      </HelmetProvider>
   );
}

export default PlayerPage;
