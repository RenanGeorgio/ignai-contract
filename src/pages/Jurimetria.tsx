import { FunctionComponent } from "react";
import Navbar from "../components/automation/Navbar";
import FormCheckbox from "../components/automation/FormCheckbox";
import FormSelect from "../components/automation/FormSelect";
import styles from "./Jurimetria.module.css";

export type JurimetriaType = {
  className?: string;
};

const Jurimetria: FunctionComponent<JurimetriaType> = ({ className = "" }) => {
  return (
    <div className={[styles.jurimetria, className].join(" ")}>
      <div className={styles.application}>
        <div className={styles.menu}>
          <div className={styles.logo}>
            {/* img */}
            {/* img */}
          </div>
          <div className={styles.section}>
            <a className={styles.dados}>DAD</a>
          </div>
          <div className={styles.list}>
            {/* img */}
            <div className={styles.estatsticas}>Estatísticas</div>
          </div>
          <div className={styles.section1}>
            <div className={styles.atendimento}>ate</div>
          </div>
          <div className={styles.dashboard}>
            <div className={styles.list1}>
              {/* img */}
              <div className={styles.email}>Email</div>
              <div className={styles.badge}>
                <div className={styles.danger}>48</div>
              </div>
            </div>
            <div className={styles.list2}>
              {/* img */}
              <div className={styles.chat}>Chat</div>
              <div className={styles.badge1}>
                <div className={styles.danger1}>22</div>
              </div>
            </div>
            <div className={styles.list3}>
              {/* img */}
              <div className={styles.calendario}>Calendario</div>
              <div className={styles.badge2}>
                <div className={styles.danger2}>17</div>
              </div>
            </div>
          </div>
          <div className={styles.section2}>
            <div className={styles.vendas}>ven</div>
          </div>
          <div className={styles.apps}>
            <div className={styles.list4}>
              {/* img */}
              <div className={styles.leads}>Leads</div>
              <div className={styles.badge3}>
                <div className={styles.danger3}>14</div>
              </div>
            </div>
            <div className={styles.list5}>
              {/* img */}
              <div className={styles.contatos}>Contatos</div>
              <div className={styles.badge4}>
                <div className={styles.danger4}>10</div>
              </div>
            </div>
            <div className={styles.list6}>
              {/* img */}
              <div className={styles.negcios}>Negócios</div>
            </div>
            <div className={styles.list7}>
              {/* img */} 
              <div className={styles.faturas}>Faturas</div>
            </div>
          </div>
          <div className={styles.section3}>
            <div className={styles.funilDeVendasContainer}>
              <span>FUN</span>
              <span>{` `}</span>
            </div>
          </div>
          <div className={styles.pages}>
            <div className={styles.list8}>
              {/* img */}
              <div className={styles.formulrio}>Formulário</div>
            </div>
            <div className={styles.list9}>
              {/* img */}
              <div className={styles.automaoEMail}>Automação E-mail</div>
            </div>
            <div className={styles.list10}>
              {/* img */}
              <div className={styles.disparoWhatsapp}>Disparo WhatsApp</div>
            </div>
            <div className={styles.list11}>
              {/* img */}
              <div className={styles.campanhaAds}>{`Campanha Ads `}</div>
            </div>
          </div>
          <div className={styles.section4}>
            <div className={styles.ajuda}>AJU</div>
          </div>
          <div className={styles.chartsMaps}>
            <div className={styles.list12}>
              {/* img */}
              <div className={styles.configuraes}>Configurações</div>
            </div>
            <div className={styles.list13}>
              {/* img */}
              <div className={styles.suporte}>Suporte</div>
            </div>
            <div className={styles.list14}>
              {/* img */}
              <div className={styles.faq} />
            </div>
          </div>
        </div>
        {/* img */}
      </div>
      <div className={styles.image8} />
      <section className={styles.content}>
        <div className={styles.image3} />
        <Navbar />
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.row}>
              <div className={styles.seleoDeRgos}>Seleção de órgãos</div>
              <div className={styles.card1}>
                <div className={styles.selectionDescription}>
                  SELECIONAR TODOS
                </div>
              </div>
              <div className={styles.card2}>
                <div className={styles.text}>REMOVER TODOS</div>
              </div>
            </div>
            <div className={styles.row1}>
              <div className={styles.table}>
                <div className={styles.tableHeaderRow}>
                  <div className={styles.tableCell}>
                    <div className={styles.tribunaisSuperiores}>
                      TRIBUNAIS SUPERIORES
                    </div>
                  </div>
                  <div className={styles.tableCell1}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                </div>
                <div className={styles.tableRow}>
                  <div className={styles.tableCell2}>
                    <div className={styles.stf}>STF</div>
                  </div>
                  <div className={styles.tableCell3}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                  <div className={styles.tableCell4}>
                    <div className={styles.stj}>STJ</div>
                  </div>
                  <div className={styles.tableCell5}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.table1}>
                <div className={styles.tableHeaderRow1}>
                  <div className={styles.tableCell6}>
                    <div className={styles.justiaFederal}>JUSTIÇA FEDERAL</div>
                  </div>
                  <div className={styles.tableCell7}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                </div>
                <div className={styles.tableRow1}>
                  <div className={styles.tableCell8}>
                    <div className={styles.trf3}>TRF3</div>
                  </div>
                  <div className={styles.tableCell9}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                  <div className={styles.tableCell10}>
                    <div className={styles.trf4}>TRF4</div>
                  </div>
                  <div className={styles.tableCell11}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                  <div className={styles.tableCell12}>
                    <div className={styles.trf1}>TRF1</div>
                  </div>
                  <div className={styles.tableCell13}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                  <div className={styles.tableCell14}>
                    <div className={styles.trf2}>TRF2</div>
                  </div>
                  <div className={styles.tableCell15}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                  <div className={styles.tableCell16}>
                    <div className={styles.trf5}>TRF5</div>
                  </div>
                  <div className={styles.tableCell17}>
                    <FormCheckbox propFlex="unset" />
                  </div>
                  <div className={styles.tableCell18} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.table2}>
              <div className={styles.tableHeaderRow2}>
                <div className={styles.tableCell19}>
                  <div className={styles.justiaEstadual}>JUSTIÇA ESTADUAL</div>
                </div>
                <div className={styles.tableCell20}>
                  <FormCheckbox propFlex="unset" />
                </div>
              </div>
              <div className={styles.tableRow2}>
                <div className={styles.tableCell21}>
                  <div className={styles.tjRj}>TJ - RJ</div>
                </div>
                <div className={styles.tableCell22}>
                  <FormCheckbox propFlex="unset" />
                </div>
                <div className={styles.tableCell23}>
                  <div className={styles.tjPr}>TJ - PR</div>
                </div>
                <div className={styles.tableCell24}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell25}>
                  <div className={styles.tjSc}>TJ - SC</div>
                </div>
                <div className={styles.tableCell26}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell27}>
                  <div className={styles.tjSp}>TJ - SP</div>
                </div>
                <div className={styles.tableCell28}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell29}>
                  <div className={styles.tjMg}>TJ - MG</div>
                </div>
                <div className={styles.tableCell30}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell31}>
                  <div className={styles.tjMs}>TJ - MS</div>
                </div>
                <div className={styles.tableCell32}>
                  <FormCheckbox propFlex="1" />
                </div>
              </div>
              <div className={styles.tableRow3}>
                <div className={styles.tableCell33}>
                  <div className={styles.tjBa}>TJ - BA</div>
                </div>
                <div className={styles.tableCell34}>
                  <FormCheckbox propFlex="unset" />
                </div>
                <div className={styles.tableCell35}>
                  <div className={styles.tjCe}>TJ - CE</div>
                </div>
                <div className={styles.tableCell36}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell37}>
                  <div className={styles.tjRs}>TJ - RS</div>
                </div>
                <div className={styles.tableCell38}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell39}>
                  <div className={styles.tjEs}>TJ - ES</div>
                </div>
                <div className={styles.tableCell40}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell41}>
                  <div className={styles.tjPb}>TJ - PB</div>
                </div>
                <div className={styles.tableCell42}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell43}>
                  <div className={styles.tjPa}>TJ - PA</div>
                </div>
                <div className={styles.tableCell44}>
                  <FormCheckbox propFlex="1" />
                </div>
              </div>
              <div className={styles.tableRow4}>
                <div className={styles.tableCell45}>
                  <div className={styles.tjPe}>TJ - PE</div>
                </div>
                <div className={styles.tableCell46}>
                  <FormCheckbox propFlex="unset" />
                </div>
                <div className={styles.tableCell47}>
                  <div className={styles.tjGo}>TJ - GO</div>
                </div>
                <div className={styles.tableCell48}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell49}>
                  <div className={styles.tjAm}>TJ - AM</div>
                </div>
                <div className={styles.tableCell50}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell51}>
                  <div className={styles.tjTo}>TJ - TO</div>
                </div>
                <div className={styles.tableCell52}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell53}>
                  <div className={styles.tjSe}>TJ - SE</div>
                </div>
                <div className={styles.tableCell54}>
                  <FormCheckbox propFlex="1" />
                </div>
                <div className={styles.tableCell55}>
                  <div className={styles.tjRo}>TJ - RO</div>
                </div>
                <div className={styles.tableCell56}>
                  <FormCheckbox />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card3}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.textParent}>
                  <div className={styles.text1}>Jurimetria de busca</div>
                  <div className={styles.text2}>
                    Total número de processos no período 23.8k
                  </div>
                </div>
              </div>
              <div className={styles.letterSequenceParent}>
                <div className={styles.letterSequence}>
                  <div className={styles.k}>2.5k</div>
                  <div className={styles.k1}>2k</div>
                  <div className={styles.k2}>1.5k</div>
                  <div className={styles.k3}>1k</div>
                  <div className={styles.div}>500</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.dotBarSequenceWrapper}>
                      <div className={styles.dotBarSequence}>
                        <div className={styles.separator} />
                        <div className={styles.dotBarPattern}>
                          <div className={styles.bar} />
                          <div className={styles.dot} />
                        </div>
                        <div className={styles.bar1} />
                        <div className={styles.lineParent}>
                          <div className={styles.line} />
                          <div className={styles.line1} />
                          <div className={styles.line2} />
                          <div className={styles.line3} />
                          <div className={styles.dotContainer}>
                            <div className={styles.bar2} />
                            <div className={styles.dot1} />
                          </div>
                          <div className={styles.barContainerWrapper}>
                            <div className={styles.barContainer}>
                              <div className={styles.bar3} />
                              <div className={styles.bar4} />
                              <div className={styles.bar5} />
                              <div className={styles.bar6} />
                              {/* img */}
                              <div className={styles.dotSequence}>
                                <div className={styles.wrapperVector}>
                                  {/* img */}
                                </div>
                                <div className={styles.dot2} />
                                <div className={styles.dot3} />
                                <div className={styles.dot4} />
                                <div className={styles.dot5} />
                                <div className={styles.dot6} />
                                <div className={styles.dot7} />
                                <div className={styles.dot8} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.bar7} />
                        <div className={styles.bar8} />
                        <div className={styles.dotBarPattern1}>
                          <div className={styles.bar9} />
                          <div className={styles.dot9} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.monthLabel}>
                      <div className={styles.jan}>1 Jan</div>
                      <div className={styles.jan1}>2 Jan</div>
                      <div className={styles.monthContainer}>
                        <div className={styles.januaryGrid}>
                          <div className={styles.januarySequence}>
                            <div className={styles.jan2}>3 Jan</div>
                          </div>
                          <div className={styles.januarySequence1}>
                            <div className={styles.jan3}>4 Jan</div>
                          </div>
                          <div className={styles.januarySequence2}>
                            <div className={styles.jan4}>5 Jan</div>
                          </div>
                          <div className={styles.januarySequence3}>
                            <div className={styles.jan5}>6 Jan</div>
                          </div>
                          <div className={styles.januarySequence4}>
                            <div className={styles.jan6}>7 Jan</div>
                          </div>
                          <div className={styles.januarySequence5}>
                            <div className={styles.jan7}>8 Jan</div>
                          </div>
                          <div className={styles.jan8}>9 Jan</div>
                          <div className={styles.jan9}>10 Jan</div>
                        </div>
                        <div className={styles.cardSequenceWrapper}>
                          <div className={styles.cardSequence}>
                            <div className={styles.card4}>
                              <div className={styles.cardInner}>
                                <div className={styles.frameChild} />
                              </div>
                              <div className={styles.text3}>Estadual</div>
                            </div>
                            <div className={styles.card5}>
                              <div className={styles.cardChild}>
                                <div className={styles.frameItem} />
                              </div>
                              <a className={styles.text4}>Federal</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.detailLabel}>Decisões finais</div>
            <div className={styles.text5}>Contrário</div>
            <div className={styles.divider} />
            <div className={styles.text6}>Favorável</div>
            <div className={styles.divider1} />
            <div className={styles.text7}>Parcial</div>
            <div className={styles.divider2} />
            <a className={styles.text8}>Outros</a>
            <div className={styles.divider3} />
          </div>
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