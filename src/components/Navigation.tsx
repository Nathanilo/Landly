import React from "react";
import { arrowLeft, arrowRight } from "../asset";
import { Button, Flex, Image } from "@chakra-ui/react";

const Navigation: React.FC = () => {
  return (
    <Flex justify="space-between">
      <Button bg="#F5f5f5" borderRadius="50%" width="54px" height="54px">
        <Image src={arrowLeft} alt="arrow" loading="lazy" />
      </Button>
      <Button
        bg="primary"
        borderRadius="50%"
        width="54px"
        height="54px"
        _hover={{ bg: "primary" }}
      >
        <Image src={arrowRight} alt="arrow" loading="lazy" />
      </Button>
    </Flex>
  );
};

export default Navigation;
