import { FunctionComponent } from "react";
import styles from "@styles/Buscador.module.css";
import Navbar from "@components/automation/Navbar";
import { Box } from "@chakra-ui/react";
import BuscadorTable from "@components/table/BuscadorTable";
import FormularioBuscaDetalhada from "@components/form/FormBuscador";

export type BuscadorType = {
  className?: string;
  expanded: boolean;
};

const Buscador: FunctionComponent<BuscadorType> = ({ className = "", expanded }) => {
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
    <div className={[styles.buscador, className].join(" ")}>
      <Box
        ml={expanded ? "220px" : "50px"}
        transition="margin 0.3s ease"
        width="100%"
        overflowX="auto"
      >
        <section className={styles.buscadorInner}>
          <div className={styles.navbarParent}>
            <h1 className={styles.titleBuscador}>Buscador</h1>
            <div className={styles.containerTableBusc}>
              <BuscadorTable data={data} />
            </div>
            <div className={styles.mainContentBuscador}>
              <div className={styles.mainBuscador}>
                <div className={styles.buscadorContainer}>
                  <FormularioBuscaDetalhada />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
};

export default Buscador;
