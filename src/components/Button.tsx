import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  ...rest
}: ButtonProps) => {
  return <ChakraButton {...rest}>{text}</ChakraButton>;
};

export default CustomButton;
