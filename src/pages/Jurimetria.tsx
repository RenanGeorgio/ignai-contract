import { FunctionComponent } from "react";
import Navbar from "@components/automation/Navbar";
import FormCheckbox from "@components/automation/FormCheckbox";
import FormSelect from "@components/automation/FormSelect";
import styles from "@styles/Jurimetria.module.css";
import JurimetriaChart from "@components/graph/JurimetriaChart";
import Selection from "@components/jurimetria/selection";
import DecisoesFinais from "@components/jurimetria/decisoes";
import { Box } from "@chakra-ui/react";

export type JurimetriaType = {
  className?: string;
  expanded: boolean;
};

const Jurimetria: FunctionComponent<JurimetriaType> = ({ className = "", expanded }) => {
  return (
    <div className={[styles.jurimetria, className].join(" ")}>
      <Box
        ml={expanded ? "200px" : "20px"} 
        transition="margin 0.3s ease"
        width="100%"
      >
        <section className={styles.content}>
          <div style={{ width: "45%", height: "30%", marginLeft: "auto", marginTop: "50px", marginRight: "20px"}}>
            <Navbar />
            <Selection />
          </div>
          <div style={{width: "45%", marginLeft: "5%", marginTop: "-15%", marginBottom: "45px"}}>
            <JurimetriaChart />
          </div>
          <div style={{ width: "45%", marginLeft: "5%", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <DecisoesFinais />
          </div>
        </section>
      </Box>
    </div>
  );
};

export default Jurimetria;
