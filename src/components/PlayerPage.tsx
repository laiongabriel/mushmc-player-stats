import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from "react";
import styles from "../styles/PlayerPage.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PlayerNotFound from "./PlayerNotFound";

type PlayerData = {
   success: boolean;
   response: {
      banned?: boolean;
      muted?: boolean;
      account: {
         type: string;
         username: string;
         unique_id: string;
      };
      best_tag: {
         color: string;
         name: string;
      };
      clan?: {
         name: string;
         tag: string;
         tag_color: string;
      };
      connected: boolean;
      discord?: {
         name: string;
      };
      first_login?: number;
      last_login?: number;
      stats: {
         bedwars: {
            kills: number;
            deaths: number;
            level: number;
         };
      };
   };
};

function PlayerPage() {
   const { playerName } = useParams();
   const { data, loading, error } = useFetch<PlayerData>(
      `https://mush.com.br/api/player/${playerName}`
   );
   const [skeleton, setSkeleton] = React.useState(true);

   function millisecondsToDate(milliseconds: number) {
      const date = new Date(milliseconds);
      const formattedDate = date.toLocaleString("pt-BR", {
         day: "2-digit",
         month: "2-digit",
         year: "numeric",
      });
      return formattedDate;
   }

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
   if (data?.success == false) return <PlayerNotFound />;
   if (data)
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
                  <div className={styles.playerHead}>
                     <h1 className={styles.playerName}>
                        {data.response.account.username}
                        {data.response.clan?.tag && (
                           <span
                              style={{
                                 color: `${data.response.clan.tag_color}`,
                              }}
                           >{` [${data.response.clan.tag}]`}</span>
                        )}
                     </h1>
                     {skeleton && (
                        <Skeleton width={150} height={146} borderRadius={4} />
                     )}
                     <img
                        onLoad={handlePlayerHeadLoad}
                        src={`https://mineskin.eu/helm/${data.response.account.username}/150.png`}
                        alt={`Skin de ${data.response.account.username}`}
                     />
                     {data.response.banned ? (
                        <span className={styles.bannedOrMuted}>BANIDO</span>
                     ) : (
                        data.response.muted && (
                           <span className={styles.bannedOrMuted}>MUTADO</span>
                        )
                     )}
                  </div>

                  <dl className={styles.playerInfo}>
                     {/* Online? */}
                     <div className={styles.wrapper}>
                        <dt>Status</dt>
                        <dd>
                           {data.response.connected ? (
                              <span style={{ color: "#0db91b" }}>Online</span>
                           ) : (
                              <span style={{ color: "#9b9b9b" }}>Offline</span>
                           )}
                        </dd>
                     </div>

                     {/* Ultimo login */}
                     {!data.response.connected && data.response.last_login && (
                        <div className={styles.wrapper}>
                           <dt>Último login</dt>
                           <dd>
                              {millisecondsToDate(data.response.last_login)}
                           </dd>
                        </div>
                     )}

                     {/* Primeiro login */}
                     {data.response.first_login && (
                        <div className={styles.wrapper}>
                           <dt>Primeiro login</dt>
                           <dd>
                              {millisecondsToDate(data.response.first_login)}
                           </dd>
                        </div>
                     )}

                     {/* Original? */}
                     <div className={styles.wrapper}>
                        <dt>Tipo de conta</dt>
                        <dd>
                           {data.response.account.type == "PREMIUM"
                              ? "Original"
                              : "Pirata"}
                        </dd>
                     </div>

                     {/* Clan? */}
                     <div className={styles.wrapper}>
                        <dt>Clan</dt>
                        <dd>
                           {data.response.clan ? (
                              <span
                                 style={{
                                    color: `${data.response.clan.tag_color}`,
                                    textShadow:
                                       "1px 1px 1px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 {data.response.clan.tag}
                              </span>
                           ) : (
                              "-"
                           )}
                        </dd>
                     </div>

                     {/* Melhor tag */}
                     <div className={styles.wrapper}>
                        <dt>Melhor tag</dt>
                        <dd>
                           <span
                              style={{
                                 color: `${data.response.best_tag.color}`,
                                 textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
                              }}
                           >
                              {data.response.best_tag.name.toUpperCase()}
                           </span>
                        </dd>
                     </div>

                     {/* Discord? */}
                     <div className={styles.wrapper}>
                        <dt>Discord</dt>
                        <dd>{data.response.discord?.name || "-"}</dd>
                     </div>
                  </dl>
               </section>

               <section className={styles.statsContainer}></section>
            </main>
         </HelmetProvider>
      );
}

export default PlayerPage;
