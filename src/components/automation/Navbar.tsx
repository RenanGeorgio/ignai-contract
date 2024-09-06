import { FunctionComponent } from "react";
import { Box, Flex, Text, Input, IconButton, Badge } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={className}>
      <Flex
        p={4}
        align="center"
        justify="space-between"
        color="black"
      >
        <Box flex="1" mr={4}>
          <Input
            placeholder="Buscar"
            variant="outline"
            bg="white"
            color="gray.800"
            borderRadius="md"
            size="md"
          />
        </Box>
        <Flex align="center">
          <Box position="relative" ml={4}>
            <IconButton
              aria-label="Notifications"
              icon={<BellIcon />}
              variant="outline"
              colorScheme="teal"
            />
            <Badge
              position="absolute"
              top="-1px"
              right="-1px"
              colorScheme="red"
              borderRadius="full"
            >
              4
            </Badge>
          </Box>
          <Box
            width="40px"
            height="40px"
            borderRadius="full"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            ml={4}
            color="gray.800"
            fontSize="lg"
            fontWeight="bold"
          >
            A
          </Box>
        </Flex>
      </Flex>
    </header>
  );
};

export default Navbar;
