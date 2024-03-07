import React, { useState, ChangeEvent } from "react";
import {
  Center,
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  Heading,
} from "@chakra-ui/react";
import Search from "../../assets/icons/Search.png";

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // You can perform search/filter logic here based on the search term
  };

  return (
    <Center my="5rem" display="flex" flexDirection="column" px="20px">
      <Heading as="h1" fontWeight="bolder">
        Resources
      </Heading>
      <Text
        fontSize="17px"
        width={{ base: "90%", md: "40%" }}
        textAlign="center"
        my="1rem"
      >
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
      </Text>
      <InputGroup width={{ base: "100%", md: "60%" }}>
        <InputLeftElement
          pointerEvents="none"
          children={<img src={Search} alt="Search Icon" />}
        />
        <Input
          type="text"
          placeholder="Search by title or keyword"
          value={searchTerm}
          onChange={handleInputChange}
          bg='white'
        />
      </InputGroup>
    </Center>
  );
};

export default Hero;
