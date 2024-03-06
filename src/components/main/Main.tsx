import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Cards from "./card/Card";
import Filter from "../filter/Filter";

const Main = () => {
  return (
    <Box px={{ base: "0", md: "3rem" }}>
      <Text fontWeight="bold" my="20px" display={{ base: "none", md: "block" }}>
        Filter
      </Text>
      <Box
        display={{ base: "block", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        background="white"
      >
        <Filter />
        <Cards />
      </Box>
    </Box>
  );
};

export default Main;
