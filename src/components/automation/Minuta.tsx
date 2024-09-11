import { FunctionComponent } from "react";
import styles from "@styles/automation/Button.module.css";
import { Box, Text } from "@chakra-ui/react";

const Minuta: FunctionComponent = () => {
  return (
    <div className={styles.contentContainer}>
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Box
          width="48%"
          height="100%"
          className={styles.card}
          boxShadow="lg" 
          p="20px" 
        >
          <Text className={styles.cardTitleContainer} color="blue" marginBottom="10px">Contratos: Minuta 1</Text>
          {[
            "Minuta 1 - Queiroz Galvão Versão 1",
            "Minuta 1 - Queiroz Galvão Versão 3",
            "Minuta 1 - Queiroz Galvão Versão 4",
            "Minuta 1 - Queiroz Galvão Versão 2",
          ].map((label, index) => (
            <Box
              key={index}
              bg="#f0b167"
              color="#fff"
              width="80%"
              borderRadius="15px"
              p="10px"
              my="5px"
            >
              {label}
            </Box>
          ))}
        </Box>
        <Box
          width="48%"
          className={styles.card1}
          boxShadow="lg"
          p="20px" 
        >
          <Text className={styles.cardTitleContainer} color="blue" marginBottom="10px">Minutas</Text>
          {["Minuta 1", "Minuta 3", "Minuta 8", "Minuta 11", "Minuta 18"].map(
            (label, index) => (
              <Box
                key={index}
                bg="#f3afe2"
                color="#fff"
                width="70%"
                borderRadius="15px"
                p="8px"
                my="5px"
              >
                {label}
              </Box>
            )
          )}
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box
          width="48%"
          bg="gray.300"
          p="20px"
          borderRadius="15px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="lg"
          height="200px"
        >
          Jogue aqui seu arquivo para análise rápida
        </Box>

        <Box
          width="48%"
          className={styles.card2}
          boxShadow="lg" 
          p="20px" 
          height="200px"
        >
          <Text className={styles.cardTitleContainer} color="blue" marginBottom="10px">
            Histórico Análise Sem Modificações
          </Text>
          <Box
            bg="gray.200"
            color="gray.600"
            width="80%"
            p="10px"
            my="5px"
            borderRadius="15px"
          >
            Minuta 1 - Queiroz Galvão Versão 4
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Minuta;
