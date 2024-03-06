import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Card,
  Image,
  Stack,
  Text,
  Tag,
  CardFooter,
} from "@chakra-ui/react";
import bg from "../../../assets/images/background1.png";
import bg2 from "../../../assets/images/background2.png";
import bg3 from "../../../assets/images/background3.png";
import bg4 from "../../../assets/images/background4.png";
import bg5 from "../../../assets/images/background5.png";
import icon from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon.png";
import icon3 from "../../../assets/icons/icon3.png";

const Cards = () => {
  const cards = [
    {
      id: 1,
      icon: icon,
      background: bg,
      title: "The ultimate guide to Workplace Chat",
      scope: "Sample Topic",
      category: "Secure Base",
    },
    {
      id: 2,
      icon: icon3,
      background: bg2,
      title: "The ultimate guide to Workplace Chat",
      scope: "Sample Topic",
      category: "Secure Base",
    },
    {
      id: 3,
      icon: icon,
      background: bg,
      title: "The ultimate guide to Workplace Chat",
      scope: "Sample Topic",
      category: "Secure Base",
    },
    {
      id: 4,
      icon: icon3,
      background: bg3,
      title: "The ultimate guide to Workplace Chat",
      scope: "Sample Topic",
      category: "Wellbeing",
    },
    {
      id: 5,
      icon: icon2,
      background: bg4,
      title: "The ultimate guide to Workplace Chat",
      scope: "Sample Topic",
      category: "Secure Base",
    },
    {
      id: 6,
      icon: icon2,
      background: bg5,
      title: "The ultimate guide to Workplace Chat",
      scope: "Sample Topic",
      category: "Secure Base",
    },
  ];
  return (
    <Box px={{ base: "1rem", md: "3rem" }}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {cards.map((card) => (
          <GridItem key={card.id}>
            <Card px="20px" pt="3rem" pb="0.3rem" position="relative">
              <Image
                src={card.background}
                alt={card.scope}
                borderRadius="lg"
                boxSize="100%"
                position="absolute"
                top="0px"
                left="0px"
                height="100px"
                zIndex="2"
              />
              <Image
                src={card.icon}
                alt={card.scope}
                borderRadius="lg"
                boxSize="25px"
                zIndex="3"
              />

              <Stack mt="6" spacing="3">
                <Heading size="md">{card.title}</Heading>
                <Text color="grey.200">{card.scope}</Text>
                <Tag
                  color="grey.200"
                  fontSize="sm"
                  borderRadius="lg"
                  width="100px"
                >
                  {card.category}
                </Tag>
              </Stack>
              <CardFooter></CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;
