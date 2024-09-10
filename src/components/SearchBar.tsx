import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { filter } from "../Assets";

const SearchBar: React.FC = () => {
  const [searchStr, setSearchStr] = useState<string>("");

  const handleSearchStrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value);
  };

  return (
    <Box >
      {" "}
      <InputGroup size="md" position="relative">
        <Input
          placeholder="Search property state or city"
          value={searchStr}
          onChange={handleSearchStrChange}
        />
        <Box
          position="absolute"
          left="50%"
          top="9px"
          borderLeft="2px solid #CED4DD"
        >
          <Text color="#7D7F88" paddingLeft="6">
            Search all filters
          </Text>
        </Box>
        <InputRightElement px="4">
          <Box>
            <Button bg="primary" _hover={{ bg: "primary" }}>
              <img src={filter} alt="filter" />
            </Button>
          </Box>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
