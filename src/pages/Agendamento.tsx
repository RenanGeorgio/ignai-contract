import { FunctionComponent } from "react";


import styles from "@styles/automation/Agendamento.module.css";
import FrameComponent2 from "@components/automation/FrameComponent2";
import Navbar from "@components/automation/Navbar";
import HorizontalButtonGroup from "@components/newAutomation/HorizontalButtonGroup";

export type AgendamentoType = {
  className?: string;
  expanded: boolean;
};

const Agendamento: FunctionComponent<AgendamentoType> = ({
  className = "",
  expanded
}) => {
  return (
    <div className={[styles.agendamento, className].join(" ")}>
      <FrameComponent2  />
      <section className={styles.agendamentoInner}>
        <div className={styles.frameParent}>
          <div className={styles.navbarWrapper}>
            <Navbar />
          </div>
          <div className={styles.image10Parent}>
            { /* img */ }
            <div className={styles.body}>
              <div className={styles.card}>
                <div className={styles.divider} />
                <form className={styles.calendar}>
                  <div className={styles.header}>
                    <div className={styles.action}>
                      <div className={styles.buttons}>
                        <div className={styles.arrowLeft}>
                        { /* img */ }
                        </div>
                        <div className={styles.arrowRight}>
                        { /* img */ }
                        </div>
                      </div>
                      <a className={styles.agosto2022}>Agosto 2022</a>
                    </div>
                    <HorizontalButtonGroup />
                  </div>
                  <div className={styles.divider1} />
                  <div className={styles.days}>
                    <div className={styles.day}>
                      <div className={styles.dom}>Dom</div>
                    </div>
                    <div className={styles.day1}>
                      <div className={styles.seg}>Seg</div>
                    </div>
                    <div className={styles.day2}>
                      <div className={styles.ter}>Ter</div>
                    </div>
                    <div className={styles.day3}>
                      <div className={styles.qua}>Qua</div>
                    </div>
                    <div className={styles.day4}>
                      <div className={styles.qui}>Qui</div>
                    </div>
                    <div className={styles.day5}>
                      <div className={styles.sex}>Sex</div>
                    </div>
                    <div className={styles.day6}>
                      <div className={styles.sab}>Sab</div>
                    </div>
                  </div>
                  <div className={styles.date}>
                    <div className={styles.date1}>
                      <div className={styles.div}>31</div>
                    </div>
                    <div className={styles.date2}>
                      <div className={styles.div1}>1</div>
                    </div>
                    <div className={styles.date3}>
                      <div className={styles.div2}>2</div>
                    </div>
                    <div className={styles.date4}>
                      <div className={styles.div3}>3</div>
                    </div>
                    <div className={styles.date5}>
                      <div className={styles.div4}>4</div>
                    </div>
                    <div className={styles.date6}>
                      <div className={styles.div5}>5</div>
                    </div>
                    <div className={styles.date7}>
                      <div className={styles.div6}>6</div>
                    </div>
                  </div>
                  <div className={styles.date8}>
                    <div className={styles.date9}>
                      <div className={styles.div7}>7</div>
                    </div>
                    <div className={styles.date10}>
                      <div className={styles.div8}>8</div>
                    </div>
                    <div className={styles.date11}>
                      <div className={styles.div9}>9</div>
                    </div>
                    <div className={styles.date12}>
                      <div className={styles.div10}>10</div>
                    </div>
                    <div className={styles.date13}>
                      <div className={styles.div11}>11</div>
                    </div>
                    <div className={styles.date14}>
                      <div className={styles.div12}>12</div>
                    </div>
                    <div className={styles.date15}>
                      <div className={styles.div13}>13</div>
                    </div>
                  </div>
                  <div className={styles.date16}>
                    <div className={styles.date17}>
                      <div className={styles.emptyDate}>14</div>
                    </div>
                    <div className={styles.date18}>
                      <div className={styles.div14}>15</div>
                    </div>
                    <div className={styles.date19}>
                      <div className={styles.div15}>16</div>
                    </div>
                    <div className={styles.date20}>
                      <div className={styles.div16}>17</div>
                      <div className={styles.badge}>
                        <div className={styles.clientes}>Clientes</div>
                      </div>
                      <div className={styles.badge1}>
                        <div className={styles.implantao}>Implantação</div>
                      </div>
                      <div className={styles.mais}>+2 Mais</div>
                    </div>
                    <div className={styles.date21}>
                      <div className={styles.div17}>18</div>
                    </div>
                    <div className={styles.date22}>
                      <div className={styles.div18}>19</div>
                    </div>
                    <div className={styles.date23}>
                      <div className={styles.div19}>20</div>
                      <div className={styles.badge2}>
                        <div className={styles.atendimento}>Atendimento</div>
                      </div>
                      <div className={styles.badge3}>
                        <div className={styles.implantao1}>Implantação</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.date24}>
                    <div className={styles.date25}>
                      <div className={styles.div20}>21</div>
                    </div>
                    <div className={styles.date26}>
                      <div className={styles.div21}>22</div>
                      <div className={styles.badge4}>
                        <div className={styles.lead}>Lead</div>
                      </div>
                    </div>
                    <div className={styles.date27}>
                      <div className={styles.div22}>23</div>
                    </div>
                    <div className={styles.date28}>
                      <div className={styles.div23}>24</div>
                    </div>
                    <div className={styles.date29}>
                      <div className={styles.div24}>25</div>
                    </div>
                    <div className={styles.date30}>
                      <div className={styles.div25}>26</div>
                    </div>
                    <div className={styles.date31}>
                      <div className={styles.div26}>27</div>
                    </div>
                  </div>
                  <div className={styles.date32}>
                    <div className={styles.date33}>
                      <div className={styles.div27}>28</div>
                    </div>
                    <div className={styles.date34}>
                      <div className={styles.div28}>29</div>
                    </div>
                    <div className={styles.date35}>
                      <div className={styles.div29}>30</div>
                    </div>
                    <div className={styles.date36}>
                      <div className={styles.div30}>31</div>
                    </div>
                    <div className={styles.date37}>
                      <div className={styles.div31}>1</div>
                    </div>
                    <div className={styles.date38}>
                      <div className={styles.div32}>2</div>
                    </div>
                    <div className={styles.date39}>
                      <div className={styles.div33}>3</div>
                    </div>
                  </div>
                  <div className={styles.date40}>
                    <div className={styles.date41}>
                      <div className={styles.div34}>4</div>
                    </div>
                    <div className={styles.date42}>
                      <div className={styles.div35}>5</div>
                    </div>
                    <div className={styles.date43}>
                      <div className={styles.div36}>6</div>
                    </div>
                    <div className={styles.date44}>
                      <div className={styles.div37}>7</div>
                    </div>
                    <div className={styles.date45}>
                      <div className={styles.div38}>8</div>
                    </div>
                    <div className={styles.date46}>
                      <div className={styles.div39}>9</div>
                    </div>
                    <div className={styles.date47}>
                      <div className={styles.div40}>10</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agendamento;