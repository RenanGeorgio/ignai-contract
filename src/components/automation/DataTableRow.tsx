import { FunctionComponent } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, IconButton, Badge, Box, Text } from "@chakra-ui/react";
import "@styles/view.css"

export type DataTableRowType = {
  data: {
    queirozGalvo: string;
    email: string;
    telefone: string;
    numero: string;
    status: string;
  }[];
};

const DataTableRow: FunctionComponent<DataTableRowType> = ({ data }) => {
  return (
    <Box ml="4">
      <Table variant="simple" size="md" border="1px solid" borderColor="gray.300" width="100%">
        <Thead>
          <Tr>
            <Th borderColor="gray.300">Cliente - Conta</Th>
            <Th borderColor="gray.300">Número</Th>
            <Th borderColor="gray.300">Status</Th>
            <Th borderColor="gray.300">Ação</Th>
          </Tr>
        </Thead>
      </Table>
      <Box className="containerView" maxHeight="450px" overflowY="auto">
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
                    icon={<span style={{ fontSize: "1rem" }}>✏️</span>}
                    size="sm"
                    mr={2}
                    variant="ghost"
                  />
                  <IconButton
                    aria-label="Excluir"
                    icon={<span style={{ fontSize: "1rem" }}>🗑️</span>}
                    size="sm"
                    variant="ghost"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
        <Text fontSize="sm" color="gray.500">
          Mostrando 1 de 100 páginas
        </Text>
        <Box display="flex" alignItems="center">
          <IconButton
            aria-label="Previous Page"
            icon={<span style={{ fontSize: "1rem" }}>◀️</span>}
            size="sm"
            mr={2}
            variant="ghost"
          />
          <Box display="flex" alignItems="center">
            {[1, 2].map((page) => (
              <Box
                key={page}
                mx={1}
                px={2}
                py={1}
                borderRadius="md"
                border="none"
                backgroundColor={page === 1 ? "purple.500" : "gray.300"}
                color={page === 1 ? "white" : "gray.600"}
                fontSize="sm"
                textAlign="center"
                cursor="pointer"
              >
                {page}
              </Box>
            ))}
          </Box>
          <IconButton
            aria-label="Next Page"
            icon={<span style={{ fontSize: "1rem" }}>▶️</span>}
            size="sm"
            ml={2}
            variant="ghost"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default DataTableRow;
