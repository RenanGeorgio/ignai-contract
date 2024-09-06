import { FunctionComponent } from "react";
import Navbar from "@components/automation/Navbar";
import JurimetriaChart from "@components/graph/JurimetriaChart";
import Selection from "@components/jurimetria/selection";
import DecisoesFinais from "@components/jurimetria/decisoes";
import { Box } from "@chakra-ui/react";

import styles from "@styles/Jurimetria.module.css";

export type JurimetriaType = {
  className?: string;
  expanded: boolean;
};

const Jurimetria: FunctionComponent<JurimetriaType> = ({ expanded }: JurimetriaType) => {
  return (
    <div className={styles.jurimetria}>
      <Box
        ml={expanded ? "200px" : "20px"} 
        transition="margin 0.3s ease"
        width="100%"
      >
        <section className={styles.content}>
          <div style={{ width: "55%", height: "30%", marginLeft: "auto", marginTop: "50px", marginRight: "20px"}}>
            <Navbar />
            <Selection />
          </div>
          <div style={{width: "35%", marginLeft: "5%", marginTop: "-15%", marginBottom: "45px"}}>
            <JurimetriaChart />
          </div>
          <div style={{ width: "35%", marginLeft: "5%", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", marginBottom: "40px" }}>
            <DecisoesFinais />
          </div>
        </section>
      </Box>
    </div>
  );
}

export default Jurimetria;