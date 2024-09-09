import { Box, Flex, Button, Link, HStack } from "@chakra-ui/react";

const links = [
  { name: "Solutions", href: "#", hasIcon: true },
  { name: "How it works", href: "#", hasIcon: false },
  { name: "About", href: "#", hasIcon: true },
  { name: "Resources", href: "#", hasIcon: false },
];

const Navbar = () => {
  return (
    <Box
      as="nav"
      px={["8", "8", "20"]}
      py="8"
      mx="auto"
      position="fixed"
      left="0"
      right="0"
      background="#ffffff"
      zIndex="100"
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Link
            href="#"
            fontWeight="bold"
            fontSize="2xl"
            display={["none", "none", "block"]}
          >
            Landly
          </Link>
          <Box display={["block", "block", "none"]}>
            <i className="pi pi-bars"></i>
          </Box>
        </Box>
        <Box display={["none", "none", "flex"]} mx="5">
          <HStack spacing={["", "", "48px"]} justify="center">
            {links.map((link) => (
              <Flex align="center">
                <Link
                  href={link.href}
                  _hover={{ textDecoration: "none" }}
                  fontWeight="600"
                  marginRight="2"
                >
                  {link.name}
                </Link>
                {link.hasIcon && <i className="pi pi-chevron-down"></i>}
              </Flex>
            ))}
          </HStack>
        </Box>
        <Box>
          <Button bg="#007BFF" color="#ffffff" _hover={{ bg: "#007BFF" }}>
            Get Started
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
