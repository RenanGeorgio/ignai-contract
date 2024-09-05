import { FunctionComponent } from "react";
import Navbar from "@components/automation/Navbar";
import DataTableRow from "@components/automation/DataTableRow";
import styles from "@styles/Versions.module.css";
import Minuta from "@components/automation/Minuta";
import { Box } from "@chakra-ui/react";

export type VersionsType = {
  className?: string;
  expanded: boolean;
};

const Versions: FunctionComponent<VersionsType> = ({ className = "", expanded }) => {
  const data = [
    {
      queirozGalvo: "Queiroz Galvão",
      email: "Marge.Jacobson@gmail.com",
      telefone: "27 99882-7820",
      numero: "2039482035",
      status: "Aprovado",
    },
    {
      queirozGalvo: "Almanaque Abril",
      email: "Almanaque.Abril@gmail.com",
      telefone: "27 99882-7820",
      numero: "2039482035",
      status: "Aprovado",
    },
    {
      queirozGalvo: "Copeaves",
      email: "Copeaves@gmail.com",
      telefone: "27 99882-7820",
      numero: "2039482035",
      status: "Aprovado",
    },
    {
      queirozGalvo: "DB Advogados",
      email: "DBadvogados@gmail.com",
      telefone: "27 99882-7820",
      numero: "2039482035",
      status: "Aprovado",
    },
    {
      queirozGalvo: "Maçã Apple Co",
      email: "Maça.Apple@gmail.com",
      telefone: "27 99882-7820",
      numero: "2039482035",
      status: "Aprovado",
    },
  ];

  return (
    <div className={[styles.versions, className].join(" ")}>
      <Box
        ml={expanded ? "200px" : "20px"} 
        transition="margin 0.3s ease"
        width="100%"
      >
        <section className={styles.versionsInner}>
          <div className={styles.navbarParent}>
            <Navbar  />    
            <div className={styles.mainContentParent}>
              <div className={styles.mainContent}>
                <div className={styles.contentContainer}>
                  <div className={styles.cardsContainer}>
                    <h1 className={styles.titleVersions}>Versões de contrato</h1>
                    <Minuta />
                  </div>
                </div>
              </div>
              <div className={styles.dataTableParent}>             
                <DataTableRow data={data} />
              </div>
          </div>
          </div>
        </section>
      </Box>
    </div>
  );
};

export default Versions;