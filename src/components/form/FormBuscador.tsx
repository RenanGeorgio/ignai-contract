import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import "@styles/viewsForm.css";

const FormularioBuscaDetalhada: FunctionComponent = () => {
  return (
    <Box className="containerViewForm" p={5} border="1px solid" borderColor="gray.300" borderRadius="md" height="75%" overflowY="auto">
      <Flex mb={4} align="center" wrap="wrap">
        <Box className="flex-item">
          <Text mb={2}>Unidade Administrativa</Text>
          <Select className="form-field">
            <option>Todas</option>
          </Select>
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>Número do Contrato</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>Número do Processo</Text>
          <Input className="form-field" />
        </Box>
      </Flex>

      <Flex mb={4} align="center" wrap="wrap">
        <Box className="flex-item">
          <Text mb={2}>Enquadramento</Text>
          <Select className="form-field">
            <option>Todas</option>
          </Select>
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>Situação</Text>
          <Select className="form-field">
            <option>Todas</option>
          </Select>
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>Objeto da Contratação</Text>
          <Input className="form-field" />
        </Box>
      </Flex>

      <Flex mb={4} align="center" wrap="wrap">
        <Box className="flex-item">
          <Text mb={2}>Fornecedor</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>CNPJ/CPF</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>Objeto de Contratação</Text>
          <Input className="form-field" />
        </Box>
      </Flex>

      <Flex mb={4} align="center" justify="space-between" wrap="wrap">
        <Box className="flex-item">
          <Text mb={2}>Início da Vigência</Text>
          <Text mb={2}>De:</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item">
          <Text mb={2}>&nbsp;</Text>
          <Text mb={2}>Para:</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item">
          <Text mb={2}>Fim da Vigência</Text>
          <Text mb={2}>De:</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item">
          <Text mb={2}>&nbsp;</Text>
          <Text mb={2}>Para:</Text>
          <Input className="form-field" />
        </Box>
      </Flex>

      <Text mb={2}>Valor do Contrato</Text>
      <Flex mb={4} align="center">
        <Box className="flex-item">
          <Text mb={2}>De:</Text>
          <Input className="form-field" />
        </Box>
        <Box className="flex-item" ml={2}>
          <Text mb={2}>Para:</Text>
          <Input className="form-field" />
        </Box>
      </Flex>

      <Flex justifyContent="center" mt={5}>
        <Button bg="gray.300" color="black" mr={2}>Consultar</Button>
        <Button bg="gray.300" color="black">Limpar</Button>
      </Flex>
    </Box>
  );
};

export default FormularioBuscaDetalhada;
