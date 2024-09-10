import React from "react";
import {
  Box,
  Flex,
  Button,
  Link,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

type DrawerPlacement = "top" | "right" | "bottom" | "left";

const links = [
  { name: "Solutions", href: "#", hasIcon: true },
  { name: "How it works", href: "#", hasIcon: false },
  { name: "About", href: "#", hasIcon: true },
  { name: "Resources", href: "#", hasIcon: false },
];

export const SideBar: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  placement: DrawerPlacement;
}> = ({ isOpen, onClose, placement }) => {
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Link
            href="/"
            fontWeight="bold"
            fontSize={["", "", "2xl"]}
            _hover={{ textDecoration: "none" }}
          >
            Landly
          </Link>
        </DrawerHeader>
        <DrawerBody marginTop="4">
          <VStack align="flex-start">
            {links.map((link) => (
              <Flex align="center" marginTop="4">
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
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState<DrawerPlacement>("left");

  return (
    <>
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
              href="/"
              fontWeight="bold"
              fontSize={["", "", "2xl"]}
              display={["none", "none", "block"]}
              _hover={{ textDecoration: "none" }}
            >
              Landly
            </Link>
            {/* Hamburger icon for small screens */}
            <Box display={["block", "block", "none"]}>
              <i
                className="pi pi-bars"
                onClick={onOpen} // Trigger sidebar open on click
                style={{ cursor: "pointer" }}
              ></i>
            </Box>
          </Box>
          <Box display={["none", "none", "flex"]} mx="5">
            <HStack>
              {links.map((link) => (
                <Flex align="center" marginRight={["2", "2", "6"]}>
                  <Link
                    href={link.href}
                    _hover={{ textDecoration: "none" }}
                    fontWeight="600"
                    paddingRight="1"
                  >
                    {link.name}
                  </Link>
                  {link.hasIcon && <i className="pi pi-chevron-down"></i>}
                </Flex>
              ))}
            </HStack>
          </Box>
          <Box>
            <Button bg="#007BFF" color="#ffffff" _hover={{ bg: "primary" }}>
              Get Started
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Render the drawer when open */}
      <SideBar isOpen={isOpen} onClose={onClose} placement={placement} />
    </>
  );
};

export default Navbar;
