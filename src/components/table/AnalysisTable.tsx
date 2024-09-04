import { FunctionComponent } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Title } from "chart.js";

const AnalysisTable: FunctionComponent = () => {
  return (
    <div>
      <h1 style={{ margin: "10px", fontWeight: "bold", fontSize: "25px" }}>Comportamento IA</h1>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Análises</Th>
            <Th>Modificações</Th>
            <Th>Eficácia IA</Th>
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
    </div>  
  );
};

export default AnalysisTable;
