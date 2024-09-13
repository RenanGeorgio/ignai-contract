import { FunctionComponent } from "react";
import { Box } from "@chakra-ui/react";
import BuscadorTable from "@components/table/BuscadorTable";
import FormularioBuscaDetalhada from "@components/form/FormBuscador";

import styles from "@styles/Buscador.module.css";

export type BuscadorType = {
  className?: string;
  expanded: boolean;
};

const Buscador: FunctionComponent<BuscadorType> = ({ expanded }: BuscadorType) => {
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
    <div className={styles.buscador}>
      <Box
        ml={expanded ? "220px" : "50px"}
        transition="margin 0.3s ease"
        width="100%"
        height="100%"
        overflow="hidden"
      >
        <section className={styles.buscadorInner}>
          <div className={styles.navbarParent}>
            <h1 className={styles.titleBuscador}>Buscador</h1>
            <div className={styles.mainContentBuscador}>
              <div className={styles.mainBuscador}>
                <FormularioBuscaDetalhada />
              </div>
              <div className={styles.containerTableBusc}>
                <BuscadorTable data={data} />
              </div>
            </div>
          </div>
        </section>
      </Box>
    </div>
  );
}

export default Buscador;
