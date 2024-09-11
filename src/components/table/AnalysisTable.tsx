import { FunctionComponent } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex, Text } from "@chakra-ui/react";
import "@styles/viewsAnalysis.css"

const AnalysisTable: FunctionComponent = () => {
  return (
    <div>
      <h1 style={{ margin: "10px", fontWeight: "bold", fontSize: "25px" }}>Comportamento IA</h1>
      <Box width="90%" mx="auto" borderColor="gray.300" borderWidth="1px">
        <Table variant="simple" className="tableContainer">
          <Thead>
            <Tr>
              <Th bg="gray.100" borderColor="gray.300" borderWidth="1px">Análises</Th>
              <Th bg="gray.100" borderColor="gray.300" borderWidth="1px">Modificações</Th>
              <Th bg="gray.100" borderColor="gray.300" borderWidth="1px">Eficácia IA</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Minuta 3</Td>
              <Td>10,020</Td>
              <Td>90%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 8</Td>
              <Td>5,034</Td>
              <Td>88%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 15</Td>
              <Td>3,676</Td>
              <Td>73%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 6</Td>
              <Td>2,678</Td>
              <Td>68%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 14</Td>
              <Td>1,364</Td>
              <Td>67%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 4</Td>
              <Td>1,893</Td>
              <Td>63%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 20</Td>
              <Td>1,567</Td>
              <Td>61%</Td>
            </Tr>
            <Tr>
              <Td>Minuta 2</Td>
              <Td>1,234</Td>
              <Td>59%</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box mt="4" borderTop="1px" borderColor="gray.300">
        <Flex justify="space-between" align="center" p="2">
          <Text color="gray.500">Mostrando 1 de 2</Text>
          <Flex>
            <Box as="button" mx="1" p="2" borderRadius="md" border="1px" borderColor="gray.300">
              &lt;
            </Box>
            <Box as="button" mx="1" p="2" borderRadius="md" border="1px" borderColor="gray.300">
              &gt;
            </Box>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default AnalysisTable;
