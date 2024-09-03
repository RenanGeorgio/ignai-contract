import { FunctionComponent } from "react";
import Menu from "../components/automation/Menu";
import Card from "../components/automation/Card";
import FrameComponent from "../components/automation/FrameComponent";
import styles from "./AutomaoDeEMail.module.css";

export type AutomaoDeEMailType = {
  className?: string;
};

const AutomaoDeEMail: FunctionComponent<AutomaoDeEMailType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.automaoDeEMail, className].join(" ")}>
      <div className={styles.menuWrapper}>
        <Menu />
      </div>
      <section className={styles.image3Parent}>
        <div className={styles.image3} />
        <div className={styles.traffic}>
          <div className={styles.title}>
            <div className={styles.statisticsTitle}>
              <h3 className={styles.estatsticasDeAnlises}>
                Estatísticas de Análises de Contrato
              </h3>
            </div>
            <div className={styles.trafficFilter}>
              <div className={styles.trafficLegend}>
                <div className={styles.legendItems}>
                  <div className={styles.legendItem}>
                    <div className={styles.legendIcons} />
                  </div>
                  <div className={styles.pendentes}>Pendentes</div>
                </div>
              </div>
              <div className={styles.trafficLegend1}>
                <div className={styles.frameParent}>
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.analisados}>Analisados</div>
                </div>
              </div>
              <div className={styles.shortByDate}>
                <div className={styles.shortBy}>{`Short by : `}</div>
                <div className={styles.formFilter}>
                  <div className={styles.conteiner}>
                    <div className={styles.mensal}>Mensal</div>
                    {/* img */}
                    {/* img */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.trafficChart}>
            <div className={styles.number}>
              <div className={styles.chartGrid}>100</div>
              <div className={styles.chartGrid1}>80</div>
              <div className={styles.chartGrid2}>50</div>
              <div className={styles.chartGrid3}>25</div>
              <div className={styles.chartGrid4}>15</div>
              <div className={styles.chartGrid5}>10</div>
              <div className={styles.chartGrid6}>0</div>
            </div>
            <div className={styles.chartBars}>
              <div className={styles.chartBarList} />
              {/* img */}
              <div className={styles.chartBarList1}>
                <div className={styles.chartBarListChild} />
                <div className={styles.chartBarListItem} />
                <div className={styles.barLabels}>
                  <div className={styles.barLabelList}>
                    <div className={styles.jan}>Jan</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList2} />
              <img className={styles.lineIcon1} alt="" src="/line-1@2x.png" />
              <div className={styles.highlightBar}>
                <div className={styles.highlightOne} />
                {/* img */}
                <div className={styles.highlightLabel}>
                  <div className={styles.fevWrapper}>
                    <div className={styles.fev}>Fev</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList3} />
              {/* img */}
              <div className={styles.chartBarList4}>
                <div className={styles.chartBarListInner} />
                <div className={styles.rectangleDiv} />
                <div className={styles.frameDiv}>
                  <div className={styles.marWrapper}>
                    <div className={styles.mar}>Mar</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList5} />
              {/* img */}
              <div className={styles.chartBarList6}>
                <div className={styles.chartBarListChild1} />
                <div className={styles.chartBarListChild2} />
                <div className={styles.chartBarListInner1}>
                  <div className={styles.abrWrapper}>
                    <div className={styles.abr}>Abr</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList7} />
              {/* img */}
              <div className={styles.chartBarList8}>
                <div className={styles.chartBarListChild3} />
                <div className={styles.chartBarListChild4} />
                <div className={styles.chartBarListInner2}>
                  <div className={styles.maiWrapper}>
                    <div className={styles.mai}>Mai</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList9} />
              <div className={styles.chartBarList10}>
                <div className={styles.chartBarListChild5} />
                <div className={styles.chartBarListChild6} />
                <div className={styles.chartBarListInner3}>
                  <div className={styles.junWrapper}>
                    <div className={styles.jun}>Jun</div>
                  </div>
                </div>
              </div>
              {/* img */}
              <div className={styles.chartBarList11} />
              {/* img */}
              <div className={styles.chartBarList12}>
                <div className={styles.chartBarListChild7} />
                <div className={styles.chartBarListChild8} />
                <div className={styles.chartBarListInner4}>
                  <div className={styles.julWrapper}>
                    <div className={styles.jul}>Jul</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList13} />
              {/* img */}
              <div className={styles.chartBarList14}>
                <div className={styles.chartBarListChild9} />
                <div className={styles.chartBarListChild10} />
                <div className={styles.chartBarListInner5}>
                  <div className={styles.agoWrapper}>
                    <div className={styles.ago}>Ago</div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBarList15} />
              {/* img */}
              <div className={styles.chartBarList16}>
                <div className={styles.chartBarListChild11} />
                <div className={styles.chartBarListChild12} />
                <div className={styles.chartBarListInner6}>
                  <div className={styles.setWrapper}>
                    <div className={styles.set}>Set</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stock}>
          <div className={styles.title1}>
            <h3 className={styles.comportamentoIa}>Comportamento IA</h3>
            {/* img */}
          </div>
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={styles.listHeaders}>
                <div className={styles.analises}>Analises</div>
              </div>
              <div className={styles.headerTwo}>
                <div className={styles.modificaes}>Modificações</div>
              </div>
              <div className={styles.listContent}>
                <div className={styles.eficciaIa}>Eficácia IA</div>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.minuta3Wrapper}>
                <div className={styles.minuta3}>Minuta 3</div>
              </div>
              <div className={styles.wrapper}>
                <div className={styles.div}>10,020</div>
              </div>
              <div className={styles.container}>
                <div className={styles.div1}>90%</div>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.minuta8Wrapper}>
                <div className={styles.minuta8}>Minuta 8</div>
              </div>
              <div className={styles.frame}>
                <div className={styles.div2}>5,034</div>
              </div>
              <div className={styles.wrapper1}>
                <div className={styles.div3}>88%</div>
              </div>
            </div>
            <div className={styles.item3}>
              <div className={styles.minuta15Wrapper}>
                <div className={styles.minuta15}>Minuta 15</div>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.div4}>3,676</div>
              </div>
              <div className={styles.wrapper3}>
                <div className={styles.div5}>73%</div>
              </div>
            </div>
            <div className={styles.item4}>
              <div className={styles.minuta6Wrapper}>
                <div className={styles.minuta6}>Minuta 6</div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.div6}>2,678</div>
              </div>
              <div className={styles.wrapper5}>
                <div className={styles.div7}>68%</div>
              </div>
            </div>
            <div className={styles.item5}>
              <div className={styles.minuta14Wrapper}>
                <div className={styles.minuta14}>Minuta 14</div>
              </div>
              <div className={styles.wrapper6}>
                <div className={styles.div8}>1,364</div>
              </div>
              <div className={styles.wrapper7}>
                <div className={styles.div9}>67%</div>
              </div>
            </div>
            <div className={styles.item6}>
              <div className={styles.minuta4Wrapper}>
                <div className={styles.minuta4}>Minuta 4</div>
              </div>
              <div className={styles.wrapper8}>
                <div className={styles.div10}>1,893</div>
              </div>
              <div className={styles.wrapper9}>
                <div className={styles.div11}>63%</div>
              </div>
            </div>
            <div className={styles.item7}>
              <div className={styles.minuta20Wrapper}>
                <div className={styles.minuta20}>Minuta 20</div>
              </div>
              <div className={styles.wrapper10}>
                <div className={styles.div12}>1,567</div>
              </div>
              <div className={styles.wrapper11}>
                <div className={styles.div13}>61%</div>
              </div>
            </div>
            <div className={styles.item8}>
              <div className={styles.minuta2Wrapper}>
                <div className={styles.minuta2}>Minuta 2</div>
              </div>
              <div className={styles.wrapper12}>
                <div className={styles.div14}>1,884</div>
              </div>
              <div className={styles.wrapper13}>
                <div className={styles.div15}>55%</div>
              </div>
            </div>
          </div>
          <div className={styles.page}>
            <div className={styles.mostrando8De}>Mostrando 8 de 22</div>
            <div className={styles.pageSelector}>
              <div className={styles.pageNumber}>
                <div className={styles.paginationButtons}>
                  {/* img */}
                </div>
                <div className={styles.paginationButtons1}>
                  <div className={styles.div16}>1</div>
                </div>
                <div className={styles.paginationButtons2}>
                  <div className={styles.div17}>2</div>
                </div>
                <div className={styles.paginationButtons3}>
                  {/* img */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card
          modificaes="Modificações"
          cardTwoIcons="5,68%"
          cardThreeIcons="0.20%"
        />
        <div className={styles.card}>
          <FrameComponent contratos="Contratos" prop="180,542" />
          <header className={styles.logoContainerParent}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                {/* img */}
                {/* img */}
                {/* img */}
              </div>
              <div className={styles.section}>
                <a className={styles.dados}>DAD</a>
              </div>
            </div>
            <div className={styles.navbar}>
              <div className={styles.search}>
                {/* img */}
                <a className={styles.buscar}>Buscar</a>
              </div>
              <div className={styles.notificationIconParent}>
                <div className={styles.notificationIcon}>
                  <div className={styles.icon}>
                    <div className={styles.bellContainerWrapper}>
                      <div className={styles.bellContainer}>
                        {/* img */}
                        <a className={styles.fevereiro22024}>
                          Fevereiro 2, 2024
                        </a>
                        {/* img */}
                      </div>
                    </div>
                    <div className={styles.icon1}>
                      {/* img */}
                    </div>
                    <div className={styles.icon2}>
                      {/* img */}
                      {/* img */}
                    </div>
                  </div>
                </div>
                <div className={styles.profileInfoWrapper}>
                  <div className={styles.profileInfo}>
                    <a className={styles.alfonsoVaccaro}>Alfonso Vaccaro</a>
                    <a className={styles.administrador}>Administrador</a>
                  </div>
                </div>
                {/* img */}
                <div className={styles.arrowDown2Wrapper}>
                  {/* img */}
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className={styles.card1}>
          <FrameComponent
            contratos="Total analisado"
            propMinWidth="116px"
            prop="640,253"
            propMinWidth1="100px"
          />
        </div>
        <Card
          propLeft="42px"
          propBackgroundColor="rgba(102, 200, 123, 0.1)"
          propOverflow="hidden"
          modificaes="Clientes"
          propMinWidth="63px"
          cardTwoIcons="540"
          propMinWidth1="48px"
          frame="/frame-4.svg"
          cardThreeIcons="0.45%"
          propColor="#3cb961"
        />
      </section>
    </div>
  );
};

export default AutomaoDeEMail;