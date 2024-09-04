import { FunctionComponent } from "react";
import Navbar from "@components/automation/Navbar";
import FormCheckbox from "@components/automation/FormCheckbox";
import FormSelect from "@components/automation/FormSelect";
import styles from "@styles/Jurimetria.module.css";

import JurimetriaChart from "@components/graph/JurimetriaChart";
import Selection from "@components/jurimetria/selection";

export type JurimetriaType = {
  className?: string;
  expanded: boolean;
};

const Jurimetria: FunctionComponent<JurimetriaType> = ({ className = "", expanded }) => {
  return (
    <div className={[styles.jurimetria, className].join(" ")}>
      <section className={styles.content}>
        <div className={styles.image3} />
        <Navbar />
        <div style={{ width: "50%", height: "30%", marginLeft: "auto", marginTop: "50px"}}>
          <Selection />
        </div>
        <div>
          <JurimetriaChart />
        </div>
        <div className={styles.card3}>
          <div className={styles.chart}>
            <div className={styles.bar10} />
            <div className={styles.chartTitleWrapper}>
              <div className={styles.chartTitle}>39.7%</div>
            </div>
            <div className={styles.barParent}>
              <div className={styles.bar11} />
              <div className={styles.chartLabelList}>28.3%</div>
            </div>
            <div className={styles.barGroup}>
              <div className={styles.bar12} />
              <div className={styles.text9}>17.4%</div>
            </div>
            <div className={styles.barParent1}>
              <div className={styles.bar13} />
              <div className={styles.text10}>14.6%</div>
            </div>
          </div>
          <div className={styles.deta}>
            <div className={styles.row4}>
              <div className={styles.row5}>
                {/* img */}
                <div className={styles.detailTrio}>
                  Contrário ao contribuinte
                </div>
              </div>
              <div className={styles.detailPair}>172.090</div>
              <div className={styles.detailPair1}>39.7%</div>
            </div>
            <div className={styles.divider4} />
            <div className={styles.row6}>
              <div className={styles.row7}>
                {/* img */}
                <div className={styles.text11}>Favorável ao contribuinte</div>
              </div>
              <div className={styles.text12}>123.976</div>
              <div className={styles.text13}>28.3%</div>
            </div>
            <div className={styles.divider5} />
            <div className={styles.row8}>
              <div className={styles.row9}>
                <div className={styles.row10}>
                  {/* img */}
                  <div className={styles.text14}>
                    Parcialmente favorável ao contribuinte
                  </div>
                </div>
                <div className={styles.text15}>
                  <span>0</span>
                  <span>78.954</span>
                </div>
                <div className={styles.text16}>17.4%</div>
              </div>
            </div>
            <div className={styles.divider6} />
            <div className={styles.row11}>
              <div className={styles.row12}>
                <div className={styles.row13}>
                  <div className={styles.row14}>
                    {/* img */}
                    <div className={styles.rowLabel}>Outros/ indeterminado</div>
                  </div>
                  <div className={styles.text17}>
                    <span>0</span>
                    <span>62.476</span>
                  </div>
                  <div className={styles.text18}>14.6%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header}>
          <FormSelect
            text="De: 01/02/2010"
            propMinWidth="129px"
            propTextDecoration="none"
          />
          <FormSelect text="Até: 15/09/2029" />
        </div>
      </section>
    </div>
  );
};

export default Jurimetria;