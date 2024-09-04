import { FunctionComponent } from "react";
import FrameComponent3 from "@components/newAutomation/FrameComponent3";
import FormSelect1 from "@components/newAutomation/FormSelect1";
import DataTableRow1 from "@components/newAutomation/DataTableRow1";
import Pagination1 from "@components/newAutomation/Pagination1";
import styles from "@styles/automation/Buscador.module.css";

export type BuscadorType = {
  className?: string;
  expanded: boolean;
};

const Buscador: FunctionComponent<BuscadorType> = ({ className = "", expanded }) => {
  return (
    <div className={[styles.buscador, className].join(" ")}>
      <FrameComponent3 listTextDecoration="none" />
      <section className={styles.buscadorInner}>
        <form className={styles.headerParent}>
          <div className={styles.header}>
            <FormSelect1
              propMinWidth="179px"
              text="Selecionar por cliente"
              propTextDecoration="none"
            />
            <FormSelect1
              propMinWidth="179px"
              text="Selecionar por data"
              propTextDecoration="none"
            />
            <FormSelect1
              propMinWidth="179px"
              text="Selecionar status"
              propTextDecoration="none"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.dataTableWrapper}>
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
                    <div className={styles.text}>+</div>
                  </div>
                </div>
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(115, 103, 240, 0.16)"
                  queirozGalvo="Queiroz Galvão"
                  propMinWidth1="107px"
                  emptyData="2039482035"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(240, 103, 161, 0.16)"
                  queirozGalvo="Almanaque Abril"
                  propMinWidth1="119px"
                  emptyData="2342354534"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="unset"
                  propOverflowX="auto"
                  propMinWidth="unset"
                  propBackgroundColor1="rgba(103, 240, 125, 0.16)"
                  queirozGalvo="Copeaves"
                  propMinWidth1="69px"
                  emptyData="3445253453"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="unset"
                  propOverflowX="auto"
                  propMinWidth="unset"
                  propBackgroundColor1="rgba(240, 103, 218, 0.16)"
                  queirozGalvo="DD Advogados"
                  propMinWidth1="104px"
                  emptyData="3463453245"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="unset"
                  propOverflowX="auto"
                  propMinWidth="unset"
                  propBackgroundColor1="rgba(214, 246, 21, 0.16)"
                  queirozGalvo="Publimarket"
                  propMinWidth1="87px"
                  emptyData="5684576859"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(115, 103, 240, 0.16)"
                  queirozGalvo="Maçã Apple Co"
                  propMinWidth1="107px"
                  emptyData="5753620780"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(254, 9, 215, 0.16)"
                  queirozGalvo="Uva Industry Co"
                  propMinWidth1="112px"
                  emptyData="675686790"
                  propMinWidth2="unset"
                  propWidth="97px"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(17, 247, 13, 0.16)"
                  queirozGalvo="Jornal 0 Hora"
                  propMinWidth1="94px"
                  emptyData="2176907558"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(240, 103, 103, 0.16)"
                  queirozGalvo="Banana e cia Co"
                  propMinWidth1="112px"
                  emptyData="5474580009"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Aprovado"
                  propColor="#28c76f"
                  propMinWidth3="59px"
                />
                <DataTableRow1
                  propBackgroundColor="unset"
                  propRowGap="20px"
                  propOverflowX="unset"
                  propMinWidth="227px"
                  propBackgroundColor1="rgba(115, 103, 240, 0.16)"
                  queirozGalvo="Elma Chips"
                  propMinWidth1="80px"
                  emptyData="11240973469"
                  propMinWidth2="97px"
                  propWidth="unset"
                  success="Cancelado"
                  propColor="#c72828"
                  propMinWidth3="65px"
                />
              </div>
            </div>
            <div className={styles.footer}>
              <div className={styles.mostrando1De}>
                mostrando 1 de 10 de 100 páginas
              </div>
              <Pagination1 paginationFlex="0.5851" paginationMinWidth="418px" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Buscador;