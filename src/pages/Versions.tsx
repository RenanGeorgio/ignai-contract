import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "@components/automation/Navbar";
import DataTableRow from "@components/automation/DataTableRow";
import Minuta from "@components/automation/Minuta";
import styles from "@styles/Versions.module.css";

export type VersionsType = {
  className?: string;
  expanded: boolean;
};

const Versions: FunctionComponent<VersionsType> = ({ expanded }: VersionsType) => {
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
    {
      queirozGalvo: "Têxtil Brasil",
      email: "Textil.Brasil@gmail.com",
      telefone: "27 99882-7820",
      numero: "2039482036",
      status: "Aprovado",
    },
    {
      queirozGalvo: "AeroTech",
      email: "AeroTech@gmail.com",
      telefone: "27 99882-7821",
      numero: "2039482037",
      status: "Aprovado",
    },
    {
      queirozGalvo: "Supermercado Móveis",
      email: "Supermercado.Moveis@gmail.com",
      telefone: "27 99882-7822",
      numero: "2039482038",
      status: "Aprovado",
    },
  ];
  
  return (
    <div className={styles.versions}>
      <Box
        ml={expanded ? "190px" : "20px"} 
        transition="margin 0.3s ease"
        width="calc(100% - 80px)" 
        overflowX="auto"
      >
        <section className={styles.versionsInner}>
          <div className={styles.navbarParent}>
            <div className={styles.navbarVersions}>
              <Navbar  />    
            </div>
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
}

export default Versions;
