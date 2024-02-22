import React from "react";
import styles from "../styles/PlayerPage.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type PlayerSummaryProps = {
   data: PlayerData;
};

function PlayerSummary({ data }: PlayerSummaryProps) {
   const [skeleton, setSkeleton] = React.useState(true);

   function handlePlayerHeadLoad(e: React.SyntheticEvent<HTMLImageElement>) {
      setSkeleton(false);
      e.currentTarget.style.opacity = "1";
   }

   function millisecondsToDate(milliseconds: number) {
      const date = new Date(milliseconds);
      const formattedDate = date.toLocaleString("pt-BR", {
         day: "2-digit",
         month: "2-digit",
         year: "numeric",
      });
      return formattedDate;
   }

   return (
      <>
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
            {skeleton && <Skeleton width={150} height={146} borderRadius={4} />}
            <img
               onLoad={handlePlayerHeadLoad}
               src={`https://visage.surgeplay.com/face/150/${
                  data.response.skin?.hash || data.response.account.username
               }`}
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
            <div className={styles.wrapper}>
               <dt>Status</dt>
               <dd>
                  {data.response.connected ? (
                     <span style={{ color: "#0db91b", fontWeight: "600" }}>
                        Online
                     </span>
                  ) : (
                     <span style={{ color: "#9b9b9b" }}>Offline</span>
                  )}
               </dd>
            </div>

            {!data.response.connected && data.response.last_login && (
               <div className={styles.wrapper}>
                  <dt>Último login</dt>
                  <dd>{millisecondsToDate(data.response.last_login)}</dd>
               </div>
            )}

            {data.response.first_login && (
               <div className={styles.wrapper}>
                  <dt>Primeiro login</dt>
                  <dd>{millisecondsToDate(data.response.first_login)}</dd>
               </div>
            )}

            <div className={styles.wrapper}>
               <dt>Tipo de conta</dt>
               <dd>
                  {data.response.account.type == "PREMIUM"
                     ? "Original"
                     : "Pirata"}
               </dd>
            </div>

            <div className={styles.wrapper}>
               <dt>Clan</dt>
               <dd>
                  {data.response.clan ? (
                     <span
                        style={{
                           color: `${data.response.clan.tag_color}`,
                           fontWeight: "600",
                           textShadow: "1px 1px 1px rgba(0, 0, 0, 0.25)",
                        }}
                     >
                        {data.response.clan.tag}
                     </span>
                  ) : (
                     "-"
                  )}
               </dd>
            </div>

            <div className={styles.wrapper}>
               <dt>Melhor tag</dt>
               <dd>
                  <span
                     style={{
                        color: `${data.response.best_tag.color}`,
                        fontWeight: "600",
                        textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
                     }}
                  >
                     {data.response.best_tag.name.toUpperCase()}
                  </span>
               </dd>
            </div>

            <div className={styles.wrapper}>
               <dt>Discord</dt>
               <dd>{data.response.discord?.name || "-"}</dd>
            </div>
         </dl>
      </>
   );
}

export default PlayerSummary;
