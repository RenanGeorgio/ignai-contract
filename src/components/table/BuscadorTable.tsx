import { FunctionComponent } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Badge, Box, Select } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import "@styles/view.css";

export type BuscadorTableType = {
  data: {
    queirozGalvo: string;
    email: string;
    telefone: string;
    numero: string;
    status: string;
  }[];
};

const BuscadorTable: FunctionComponent<BuscadorTableType> = ({ data }) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb="20px">
        <Select placeholder="Selecione Cliente" width="32%">
          <option value="cliente1">Cliente 1</option>
          <option value="cliente2">Cliente 2</option>
        </Select>
        <Select placeholder="Selecione Status" width="32%">
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </Select>
        <Select placeholder="Selecione Número" width="32%">
          <option value="numero1">Número 1</option>
          <option value="numero2">Número 2</option>
        </Select>
      </Box>
      <Table variant="simple" size="md" border="1px solid" borderColor="gray.300">
        <Thead>
          <Tr>
            <Th borderColor="gray.300">Cliente - Conta</Th>
            <Th borderColor="gray.300">Número</Th>
            <Th borderColor="gray.300">Status</Th>
            <Th borderColor="gray.300">Ação</Th>
          </Tr>
        </Thead>
      </Table>
      <Box className="containerView" maxHeight="380px" overflowY="auto">
        <Table variant="simple">
          <Tbody>
            {data.map((row, index) => (
              <Tr key={index} borderBottom="1px solid" borderColor="gray.300">
                <Td borderColor="gray.300">
                  <Box display="flex" alignItems="center">
                    <span role="img" aria-label="Pessoa" style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                      👤
                    </span>
                    <Box>
                      <strong>{row.queirozGalvo}</strong>
                      <br />
                      <span style={{ color: "gray", display: "block", marginLeft: "2px" }}>
                        {row.email} | {row.telefone}
                      </span>
                    </Box>
                  </Box>
                </Td>
                <Td borderColor="gray.300">{row.numero}</Td>
                <Td borderColor="gray.300">
                  <Badge
                    variant="solid"
                    colorScheme="green"
                    bg="green.100"
                    color="green.700"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    {row.status}
                  </Badge>
                </Td>
                <Td borderColor="gray.300">
                  <IconButton
                    aria-label="Editar"
                    icon={<EditIcon />}
                    size="sm"
                    mr={2}
                    variant="ghost"
                  />
                  <IconButton
                    aria-label="Excluir"
                    icon={<DeleteIcon />}
                    size="sm"
                    variant="ghost"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>  
    </Box>
  );
}

export default BuscadorTable;
