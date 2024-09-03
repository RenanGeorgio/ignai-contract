import { FunctionComponent } from "react";
import FrameComponent2 from "../components/automation/FrameComponent2";
import Navbar from "../components/automation/Navbar";
import Button from "../components/automation/Button";
import DataTableRow from "../components/automation/DataTableRow";
import Avatar from "../components/automation/Avatar";
import Pagination from "../components/automation/Pagination";
import styles from "./Versions.module.css";

export type VersionsType = {
  className?: string;
};

const Versions: FunctionComponent<VersionsType> = ({ className = "" }) => {
  return (
    <div className={[styles.versions, className].join(" ")}>
      <FrameComponent2 />
      <section className={styles.versionsInner}>
        <div className={styles.navbarParent}>
          <Navbar  />    
          <div className={styles.mainContentParent}>
            <div className={styles.mainContent}>
              <div className={styles.contentContainer}>
                <div className={styles.cardsContainer}>
                  <div className={styles.card}>
                    <div className={styles.cardTitleContainer}>
                      <div className={styles.contratosMinuta1}>
                        Contratos: Minuta 1
                      </div>
                    </div>
                    {/* img */}
                    <Button
                      historyLabel="Minuta 1 - Queiroz Galvão Versão 1"
                      propBackgroundColor="#f0b167"
                      propTop="64px"
                      propPadding="0px 0px 0px 6px"
                      propLeft="27px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="unset"
                      propMinWidth="unset"
                    />
                    <Button
                      historyLabel="Minuta 1 - Queiroz Galvão Versão 3"
                      propBackgroundColor="#f0b167"
                      propTop="unset"
                      propPadding="0px 0px 0px 3px"
                      propLeft="27px"
                      propBottom="120px"
                      propColor="#fff"
                      propDisplay="unset"
                      propMinWidth="unset"
                    />
                    <Button
                      historyLabel="Minuta 1 - Queiroz Galvão Versão 4"
                      propBackgroundColor="#f0b167"
                      propTop="unset"
                      propPadding="0px 0px 0px 3px"
                      propLeft="27px"
                      propBottom="64px"
                      propColor="#fff"
                      propDisplay="unset"
                      propMinWidth="unset"
                    />
                    <Button
                      historyLabel="Minuta 1 - Queiroz Galvão Versão 2"
                      propBackgroundColor="#f0b167"
                      propTop="121px"
                      propPadding="0px 0px 0px 3px"
                      propLeft="27px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="unset"
                      propMinWidth="unset"
                    />
                  </div>
                  <div className={styles.card1}>
                    <div className={styles.edit}>
                      <a className={styles.minutas}>Minutas</a>
                      {/* img */}
                    </div>
                    <Button
                      historyLabel="Minuta 1"
                      propBackgroundColor="#f067ce"
                      propTop="59px"
                      propPadding="0px 0px 0px 8px"
                      propLeft="14px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="inline-block"
                      propMinWidth="63px"
                    />
                    <Button
                      historyLabel="Minuta 3"
                      propBackgroundColor="#f3afe2"
                      propTop="111px"
                      propPadding="0px 0px 0px 4px"
                      propLeft="14px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="inline-block"
                      propMinWidth="66px"
                    />
                    <Button
                      historyLabel="Minuta 8"
                      propBackgroundColor="#f3afe2"
                      propTop="163px"
                      propPadding="0px 0px 0px 4px"
                      propLeft="14px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="inline-block"
                      propMinWidth="66px"
                    />
                    <Button
                      historyLabel="Minuta 11"
                      propBackgroundColor="#f3afe2"
                      propTop="215px"
                      propPadding="unset"
                      propLeft="14px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="inline-block"
                      propMinWidth="69px"
                    />
                    <Button
                      historyLabel="Minuta 18"
                      propBackgroundColor="#f3afe2"
                      propTop="267px"
                      propPadding="0px 0px 0px 0px"
                      propLeft="14px"
                      propBottom="unset"
                      propColor="#fff"
                      propDisplay="inline-block"
                      propMinWidth="73px"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.edit1}>
                  <div className={styles.histricoAnliseSem}>
                    Histórico Análise Sem Modificaões
                  </div>
                  {/* img */}
                </div>
                <Button historyLabel="Minuta 1 - Queiroz Galvão Versão 4" />
              </div>
            </div>
            <div className={styles.dataTableParent}>
              <div className={styles.dataTable}>
                <div className={styles.detaTableRow}>
                  <div className={styles.detaTableCell}>
                    <div className={styles.clienteConta}>cliente - conta</div>
                    <div className={styles.arrow}>
                      {/* img */}
                      {/* img */}
                    </div>
                  </div>
                  <div className={styles.detaTableCell1}>
                    <div className={styles.nmero}>Número</div>
                    <div className={styles.arrow1}>
                      {/* img */}
                     {/* img */}
                    </div>
                  </div>
                  <div className={styles.detaTableCell2}>
                    <div className={styles.status}>Status</div>
                    <div className={styles.arrow2}>
                      {/* img */}
                      {/* img */}
                    </div>
                  </div>
                  <div className={styles.detaTableCell3}>
                    <div className={styles.ao}>ação</div>
                  </div>
                  <div className={styles.paginationText}>
                    <div className={styles.pageCount}>+</div>
                  </div>
                </div>
                <DataTableRow
                  queirozGalvo="Queiroz Galvão"
                  emptyData="2039482035"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Almanaque Abril"
                  emptyData="2342354534"
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(240, 103, 161, 0.16)"
                  propMinWidth1="119px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Copeaves"
                  emptyData="3445253453"
                  propBackgroundColor="unset"
                  propRowGap="unset"
                  propOverflowX="auto"
                  propMinWidth="unset"
                  propBackgroundColor1="rgba(103, 240, 125, 0.16)"
                  propMinWidth1="69px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="DD Advogados"
                  emptyData="3463453245"
                  propBackgroundColor="unset"
                  propRowGap="unset"
                  propOverflowX="auto"
                  propMinWidth="unset"
                  propBackgroundColor1="rgba(240, 103, 218, 0.16)"
                  propMinWidth1="104px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Publimarket"
                  emptyData="5684576859"
                  propBackgroundColor="unset"
                  propRowGap="unset"
                  propOverflowX="auto"
                  propMinWidth="unset"
                  propBackgroundColor1="rgba(214, 246, 21, 0.16)"
                  propMinWidth1="87px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Maçã Apple Co"
                  emptyData="5753620780"
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(115, 103, 240, 0.16)"
                  propMinWidth1="107px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Uva Industry Co"
                  emptyData="675686790"
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(254, 9, 215, 0.16)"
                  propMinWidth1="112px"
                  propMinWidth2="unset"
                  propWidth="97px"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Jornal 0 Hora"
                  emptyData="2176907558"
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(17, 247, 13, 0.16)"
                  propMinWidth1="94px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Banana e cia Co"
                  emptyData="5474580009"
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(240, 103, 103, 0.16)"
                  propMinWidth1="112px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow
                  queirozGalvo="Elma Chips"
                  emptyData="11240973469"
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(115, 103, 240, 0.16)"
                  propMinWidth1="80px"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Cancelado"
                />
                <div className={styles.navbar}>
                  <div className={styles.search}>
                    {/* img */}
                    <div className={styles.buscarCtrlf}>
                      Jogue aqui seu arquivo para análise rápida
                    </div>
                  </div>
                  <div className={styles.action}>
                    <div className={styles.notification}>
                      {/* img */}
                      <div className={styles.dot}>
                        <div className={styles.background} />
                        <div className={styles.div}>4</div>
                      </div>
                    </div>
                    <Avatar />
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.mostrando1De}>
                  mostrando 1 de 10 de 100 páginas
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Versions;