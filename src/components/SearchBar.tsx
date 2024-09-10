import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { filter, search } from "../Assets";

const SearchBar: React.FC = () => {
  const [searchStr, setSearchStr] = useState<string>("");

  const handleSearchStrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  return (
    <Box position="relative" w="100%">
      <Image
        src={search}
        alt="search"
        position="absolute"
        top="22px"
        left="18px"
        width="20px"
        height="20px"
        zIndex="10"
      />
      <InputGroup
        display="flex"
        flexDirection={["column", "row", "row"]}
        size="md"
        position="relative"
        borderRadius="2xl"
      >
        <Input
          value={searchStr}
          onChange={handleSearchStrChange}
          placeholder="Search Property, state or city"
          my="1"
          border="1px solid #E3E3E7"
          borderRadius="2xl"
          borderRightRadius={["2xl", "none", "none"]}
          pr="2rem"
          pl="3rem"
          height="3.5rem"
          bg="#F9F9F9"
        />
        <Input
          placeholder="Search all filters"
          my="1"
          border="1px solid #E3E3E7"
          borderRadius="2xl"
          borderLeftRadius={["2xl", "none", "none"]}
          pr="2rem"
          pl="2rem"
          height="3.5rem"
          bg="#F9F9F9"
        />

        <InputRightElement width="4rem" top="12px">
          <Button
            bg="primary"
            _hover={{ bg: "primary" }}
            borderRadius="md"
            width="10px"
            height="30px"
          >
            <Image src={filter} alt="filter" width="24px" height="24px" />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
