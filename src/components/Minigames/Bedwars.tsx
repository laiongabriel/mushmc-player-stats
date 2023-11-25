import styles from "../../styles/AccordionItem.module.scss";
import useOpenAccordion from "../../hooks/useOpenAccordion.tsx";
import DownIcon from "../../assets/img/icons/down.svg";
import BedIcon from "../../assets/img/icons/bed.png";
import {
   calculateRatio,
   formatNumber,
   extractSymbol,
} from "../../functions.ts";

type BedwarsProps = {
   data: BedwarsStats;
};

function Bedwars({ data }: BedwarsProps) {
   const { handleAccordionClick, accordionPanel } = useOpenAccordion();

   return (
      <div className={styles.accordionContainer}>
         <div className={styles.accordion} onClick={handleAccordionClick}>
            <div className={styles.minigameName}>
               <img src={BedIcon} alt="Cama" />
               <h2>Bedwars</h2>
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
                     <th>Abates finais</th>
                     <th>Mortes finais</th>
                     <th>Camas quebradas</th>
                     <th>WLR</th>
                     <th>KDR</th>
                     <th>FKDR</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Total</td>
                     <td>{formatNumber(data.wins)}</td>
                     <td>{formatNumber(data.losses)}</td>
                     <td>{formatNumber(data.kills)}</td>
                     <td>{formatNumber(data.deaths)}</td>
                     <td>{formatNumber(data.final_kills)}</td>
                     <td>{formatNumber(data.final_deaths)}</td>
                     <td>{formatNumber(data.beds_broken)}</td>
                     <td>{calculateRatio(data.wins, data.losses)}</td>
                     <td>{calculateRatio(data.kills, data.deaths)}</td>
                     <td>
                        {calculateRatio(data.final_kills, data.final_deaths)}
                     </td>
                  </tr>

                  <tr>
                     <td>Solo</td>
                     <td>{formatNumber(data.solo_wins)}</td>
                     <td>{formatNumber(data.solo_losses)}</td>
                     <td>{formatNumber(data.solo_kills)}</td>
                     <td>{formatNumber(data.solo_deaths)}</td>
                     <td>{formatNumber(data.solo_final_kills)}</td>
                     <td>{formatNumber(data.solo_final_deaths)}</td>
                     <td>{formatNumber(data.solo_beds_broken)}</td>
                     <td>{calculateRatio(data.solo_wins, data.solo_losses)}</td>
                     <td>
                        {calculateRatio(data.solo_kills, data.solo_deaths)}
                     </td>
                     <td>
                        {calculateRatio(
                           data.solo_final_kills,
                           data.solo_final_deaths
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>Duplas</td>
                     <td>{formatNumber(data.doubles_wins)}</td>
                     <td>{formatNumber(data.doubles_losses)}</td>
                     <td>{formatNumber(data.doubles_kills)}</td>
                     <td>{formatNumber(data.doubles_deaths)}</td>
                     <td>{formatNumber(data.doubles_final_kills)}</td>
                     <td>{formatNumber(data.doubles_final_deaths)}</td>
                     <td>{formatNumber(data.doubles_beds_broken)}</td>
                     <td>
                        {calculateRatio(data.doubles_wins, data.doubles_losses)}
                     </td>
                     <td>
                        {calculateRatio(
                           data.doubles_kills,
                           data.doubles_deaths
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data.doubles_final_kills,
                           data.doubles_final_deaths
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>Trios</td>
                     <td>{formatNumber(data["3v3v3v3_wins"])}</td>
                     <td>{formatNumber(data["3v3v3v3_losses"])}</td>
                     <td>{formatNumber(data["3v3v3v3_kills"])}</td>
                     <td>{formatNumber(data["3v3v3v3_deaths"])}</td>
                     <td>{formatNumber(data["3v3v3v3_final_kills"])}</td>
                     <td>{formatNumber(data["3v3v3v3_final_deaths"])}</td>
                     <td>{formatNumber(data["3v3v3v3_beds_broken"])}</td>
                     <td>
                        {calculateRatio(
                           data["3v3v3v3_wins"],
                           data["3v3v3v3_losses"]
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data["3v3v3v3_kills"],
                           data["3v3v3v3_deaths"]
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data["3v3v3v3_final_kills"],
                           data["3v3v3v3_final_deaths"]
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>Quartetos</td>
                     <td>{formatNumber(data["4v4v4v4_wins"])}</td>
                     <td>{formatNumber(data["4v4v4v4_losses"])}</td>
                     <td>{formatNumber(data["4v4v4v4_kills"])}</td>
                     <td>{formatNumber(data["4v4v4v4_deaths"])}</td>
                     <td>{formatNumber(data["4v4v4v4_final_kills"])}</td>
                     <td>{formatNumber(data["4v4v4v4_final_deaths"])}</td>
                     <td>{formatNumber(data["4v4v4v4_beds_broken"])}</td>
                     <td>
                        {calculateRatio(
                           data["4v4v4v4_wins"],
                           data["4v4v4v4_losses"]
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data["4v4v4v4_kills"],
                           data["4v4v4v4_deaths"]
                        )}
                     </td>
                     <td>
                        {calculateRatio(
                           data["4v4v4v4_final_kills"],
                           data["4v4v4v4_final_deaths"]
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>1v1</td>
                     <td>{formatNumber(data["1v1_wins"])}</td>
                     <td>{formatNumber(data["1v1_losses"])}</td>
                     <td>{formatNumber(data["1v1_kills"])}</td>
                     <td>{formatNumber(data["1v1_deaths"])}</td>
                     <td>{formatNumber(data["1v1_final_kills"])}</td>
                     <td>{formatNumber(data["1v1_final_deaths"])}</td>
                     <td>{formatNumber(data["1v1_beds_broken"])}</td>
                     <td>
                        {calculateRatio(data["1v1_wins"], data["1v1_losses"])}
                     </td>
                     <td>
                        {calculateRatio(data["1v1_kills"], data["1v1_deaths"])}
                     </td>
                     <td>
                        {calculateRatio(
                           data["1v1_final_kills"],
                           data["1v1_final_deaths"]
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>2v2</td>
                     <td>{formatNumber(data["2v2_wins"])}</td>
                     <td>{formatNumber(data["2v2_losses"])}</td>
                     <td>{formatNumber(data["2v2_kills"])}</td>
                     <td>{formatNumber(data["2v2_deaths"])}</td>
                     <td>{formatNumber(data["2v2_final_kills"])}</td>
                     <td>{formatNumber(data["2v2_final_deaths"])}</td>
                     <td>{formatNumber(data["2v2_beds_broken"])}</td>
                     <td>
                        {calculateRatio(data["2v2_wins"], data["2v2_losses"])}
                     </td>
                     <td>
                        {calculateRatio(data["2v2_kills"], data["2v2_deaths"])}
                     </td>
                     <td>
                        {calculateRatio(
                           data["2v2_final_kills"],
                           data["2v2_final_deaths"]
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>3v3</td>
                     <td>{formatNumber(data["3v3_wins"])}</td>
                     <td>{formatNumber(data["3v3_losses"])}</td>
                     <td>{formatNumber(data["3v3_kills"])}</td>
                     <td>{formatNumber(data["3v3_deaths"])}</td>
                     <td>{formatNumber(data["3v3_final_kills"])}</td>
                     <td>{formatNumber(data["3v3_final_deaths"])}</td>
                     <td>{formatNumber(data["3v3_beds_broken"])}</td>
                     <td>
                        {calculateRatio(data["3v3_wins"], data["3v3_losses"])}
                     </td>
                     <td>
                        {calculateRatio(data["3v3_kills"], data["3v3_deaths"])}
                     </td>
                     <td>
                        {calculateRatio(
                           data["3v3_final_kills"],
                           data["3v3_final_deaths"]
                        )}
                     </td>
                  </tr>

                  <tr>
                     <td>4v4</td>
                     <td>{formatNumber(data["4v4_wins"])}</td>
                     <td>{formatNumber(data["4v4_losses"])}</td>
                     <td>{formatNumber(data["4v4_kills"])}</td>
                     <td>{formatNumber(data["4v4_deaths"])}</td>
                     <td>{formatNumber(data["4v4_final_kills"])}</td>
                     <td>{formatNumber(data["4v4_final_deaths"])}</td>
                     <td>{formatNumber(data["4v4_beds_broken"])}</td>
                     <td>
                        {calculateRatio(data["4v4_wins"], data["4v4_losses"])}
                     </td>
                     <td>
                        {calculateRatio(data["4v4_kills"], data["4v4_deaths"])}
                     </td>
                     <td>
                        {calculateRatio(
                           data["4v4_final_kills"],
                           data["4v4_final_deaths"]
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default Bedwars;
