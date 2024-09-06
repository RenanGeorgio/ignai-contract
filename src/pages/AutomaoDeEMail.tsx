import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";

import AnalysisTable from "@components/table/AnalysisTable";
import StatisticsChart from "@components/graph/StatisticsChart";

import styles from "@styles/AutomaoDeEMail.module.css";

export type AutomaoDeEMailType = {
  className?: string;
  expanded: boolean;
};

const AutomaoDeEMail: FunctionComponent<AutomaoDeEMailType> = ({ expanded }: AutomaoDeEMailType) => {
  return (
    <div className={styles.automaoDeEMail}>
      <Box
        flex="1"
        ml={expanded ? "20px" : "10px"} 
        mr="10px"
        overflowY="auto"
        transition="margin 0.3s ease"
      >
        <section
          className={styles.contentWrapper}
          style={{
            marginLeft: expanded ? "250px" : "80px",
            width: expanded ? "calc(100% - 250px)" : "calc(100% - 80px)",
          }}
        >
          <div className={styles.header}>
            <input type="text" placeholder="Buscar..." className={styles.searchInput} />
            <div className={styles.userInfo}>
              <div className={styles.date}>01/09/2024</div>
              <span role="img" aria-label="notificação" className={styles.notificationEmoji}>
                🔔
              </span>
              <div className={styles.userName}>
                Afonso Claudio
                <div className={styles.userRole}>Administrador</div>
              </div>
            </div>
          </div>
          <div className={styles.statsWrapper}>
            <div className={styles.statItem}>
              <span role="img" aria-label="clientes" className={styles.statIcon}>
                🧑‍💼
              </span>
              <div className={styles.statText}>
                <div className={styles.statTitle}>Clientes</div>
                <div className={styles.statCount}>123</div>
                <div className={styles.statPercentage}>
                  +12% <span className={styles.lastMonth}>último mês</span>
                </div>
              </div>
            </div>
            <div className={styles.statItem}>
              <span role="img" aria-label="contratos" className={styles.statIcon}>
                📜
              </span>
              <div className={styles.statText}>
                <div className={styles.statTitle}>Contratos</div>
                <div className={styles.statCount}>456</div>
                <div className={styles.statPercentage}>
                  -8% <span className={styles.lastMonth}>último mês</span>
                </div>
              </div>
            </div>
            <div className={styles.statItem}>
              <span role="img" aria-label="modificações" className={styles.statIcon}>
                🛠️
              </span>
              <div className={styles.statText}>
                <div className={styles.statTitle}>Modificações</div>
                <div className={styles.statCount}>789</div>
                <div className={styles.statPercentage}>
                  +5% <span className={styles.lastMonth}>último mês</span>
                </div>
              </div>
            </div>
            <div className={styles.statItem}>
              <span role="img" aria-label="total analisado" className={styles.statIcon}>
                📊
              </span>
              <div className={styles.statText}>
                <div className={styles.statTitle}>Total Analisado</div>
                <div className={styles.statCount}>1011</div>
                <div className={styles.statPercentage}>
                  +15% <span className={styles.lastMonth}>último mês</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.trafficChart}>
            <div className={styles.analysisTable}>
              <AnalysisTable />
            </div>
            <div className={styles.statisticsChart}>
              <StatisticsChart />
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
}

export default AutomaoDeEMail;