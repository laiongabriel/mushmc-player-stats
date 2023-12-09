import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import PvPIcon from "../../assets/img/icons/pvp.png";
import { calculateRatio, formatNumber } from "../../functions.ts";

type PvPProps = {
   data: PvPStats | null;
};

function PvP({ data }: PvPProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img
                  src={PvPIcon}
                  alt="Sopa"
                  style={{ position: "relative", top: "-2px" }}
               />
               <h2>PvP</h2>
            </div>

            <div className={styles.accordionDesc}>
               <p>
                  Coins:{" "}
                  <span
                     style={{
                        textShadow: "rgba(0, 0, 0, 0.3) 1px 1px 1px",
                        fontSize: "1.1rem",
                     }}
                  >
                     {data?.coins
                        ? formatNumber(Math.floor(data.coins / 10))
                        : "-"}
                  </span>
               </p>
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
                     <th>Abates</th>
                     <th>Mortes</th>
                     <th>Killstreak</th>
                     <th>Maior killstreak</th>
                     <th>KDR</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Arena</td>
                     <td>{formatNumber(data?.arena_kills)}</td>
                     <td>{formatNumber(data?.arena_deaths)}</td>
                     <td>{formatNumber(data?.arena_killstreak)}</td>
                     <td>{formatNumber(data?.arena_max_killstreak)}</td>
                     <td>
                        {calculateRatio(data?.arena_kills, data?.arena_deaths)}
                     </td>
                  </tr>
                  <tr>
                     <td>FPS</td>
                     <td>{formatNumber(data?.fps_kills)}</td>
                     <td>{formatNumber(data?.fps_deaths)}</td>
                     <td>{formatNumber(data?.fps_killstreak)}</td>
                     <td>{formatNumber(data?.fps_max_killstreak)}</td>
                     <td>
                        {calculateRatio(data?.fps_kills, data?.fps_deaths)}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default PvP;
