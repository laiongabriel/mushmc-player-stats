import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import SkywarsIcon from "../../assets/img/icons/skywars.png";
import {
   calculateRatio,
   formatNumber,
   extractSymbol,
} from "../../functions.ts";

type SkywarsProps = {
   data: SkywarsStats;
};

function Skywars({ data }: SkywarsProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img src={SkywarsIcon} alt="Cama" />
               <h2>Skywars</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>
                  Nível:{" "}
                  {data.level ? (
                     <span
                        className={styles.minigameLevel}
                        style={{
                           color: `${data.level_badge.hex_color}`,
                           textShadow: "rgba(0, 0, 0, 0.3) 1px 1px 1px",
                        }}
                     >
                        [{data.level}
                        {extractSymbol(data.level_badge.format)}]
                     </span>
                  ) : (
                     "-"
                  )}
               </p>
               <p>Winstreak: {data.winstreak || "-"}</p>
               <p>Maior winstreak: {data.max_winstreak || "-"}</p>
            </div>

            <button className={styles.accordionItemButton}>
               <img src={DownIcon} alt="Abrir e fechar" />
            </button>
         </div>

         <div ref={accordionPanel} className={styles.panel}>
            <table>
               <thead>
                  <tr>
                     <th>Modo</th>
                     <th>Vitórias</th>
                     <th>Derrotas</th>
                     <th>Abates</th>
                     <th>Mortes</th>
                     <th>WLR</th>
                     <th>KDR</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Total</td>
                     <td>{formatNumber(data.wins)}</td>
                     <td>{formatNumber(data.losses)}</td>
                     <td>{formatNumber(data.kills)}</td>
                     <td>{formatNumber(data.deaths)}</td>
                     <td>{calculateRatio(data.wins, data.losses)}</td>
                     <td>{calculateRatio(data.kills, data.deaths)}</td>
                  </tr>
                  <tr>
                     <td>Solo</td>
                     <td>{formatNumber(data.wins_solo)}</td>
                     <td>{formatNumber(data.losses_solo)}</td>
                     <td>{formatNumber(data.kills_solo)}</td>
                     <td>{formatNumber(data.deaths_solo)}</td>
                     <td>{calculateRatio(data.wins_solo, data.losses_solo)}</td>
                     <td>
                        {calculateRatio(data.kills_solo, data.deaths_solo)}
                     </td>
                  </tr>
                  <tr>
                     <td>Duplas</td>
                     <td>{formatNumber(data.wins_team)}</td>
                     <td>{formatNumber(data.losses_team)}</td>
                     <td>{formatNumber(data.kills_team)}</td>
                     <td>{formatNumber(data.deaths_team)}</td>
                     <td>{calculateRatio(data.wins_team, data.losses_team)}</td>
                     <td>
                        {calculateRatio(data.kills_team, data.deaths_team)}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Skywars;
