import React, { useState } from "react";
import {
  Box,
  Text,
  Divider,
  VStack,
  Button,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import check from "../../assets/icons/check.png";
import filterIcon from "../../assets/icons/Filter icon.png";

interface CheckedItems {
  [key: string]: boolean;
}
const Filter = () => {
  const { isOpen, onToggle } = useDisclosure();

  const initialCheckedItems: CheckedItems = {
    "Secure Base": true,
    "Sense of Appreciation": false,
    "Learning Organisation": false,
    "Mission and Vision": false,
    Wellbeing: true,
  };
  const [checkedItems, setCheckedItems] =
    useState<CheckedItems>(initialCheckedItems);

  const handleCheckboxChange = (itemName: string) => {
    const newCheckedItems: CheckedItems = { ...checkedItems };
    newCheckedItems[itemName] = !newCheckedItems[itemName];
    setCheckedItems(newCheckedItems);
  };

  const secondCheckedItems: CheckedItems = {
    DOC: false,
    Link: false,
    PDF: false,
    Video: false,
  };
  const [seccheckedItems, setSecCheckedItems] =
    useState<CheckedItems>(secondCheckedItems);

  const handleSecCheckboxChange = (secItemName: string) => {
    const newCheckedItems: CheckedItems = { ...checkedItems };
    newCheckedItems[secItemName] = !newCheckedItems[secItemName];
    setSecCheckedItems(newCheckedItems);
  };

  const thirdCheckedItems: CheckedItems = {
    Sample: true,
    Sampl: false,
    Samples: false,
    Sampler: false,
    Sampley: false,
  };
  const [trdcheckedItems, setTrdCheckedItems] =
    useState<CheckedItems>(thirdCheckedItems);

  const handleThirdCheckboxChange = (trdItemName: string) => {
    const newCheckedItems: CheckedItems = { ...checkedItems };
    newCheckedItems[trdItemName] = !newCheckedItems[trdItemName];
    setTrdCheckedItems(newCheckedItems);
  };

  return (
    <Box
      width={{ base: "100%", md: "20%" }}
      mr={{ base: "0", md: "2rem" }}
      display="flex"
      flexDirection="column"
      pb="30px"
      
    >
      <Button
        onClick={onToggle}
        display={{ base: "block", md: "none" }}
        bg="#F1F1F1"
        height="50px"
        
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="10px"
          
        >
          <Image
            src={filterIcon}
            alt="filter"
            borderRadius="lg"
            boxSize="15px"
            width="20px"
          />
          <Box>Show Filter</Box>
        </Box>
      </Button>
      <Box display={{ base: isOpen ? "block" : "none", md: "block" }} px={{ base: "1rem", md: "3rem" }}>
        <Divider />
        <Box>
          <Text fontWeight="bold" my="20px">
            Key Foundational Principles
          </Text>
          <VStack
            align="flex-start"
            spacing={2}
            display={{ base: "block", md: "flex" }}
          >
            {Object.entries(checkedItems).map(([itemName, isChecked]) => (
              <label
                key={itemName}
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(itemName)}
                  style={{ display: "none" }}
                />
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                    background: isChecked
                      ? `url(${check}) center/cover no-repeat`
                      : "white",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                />
                {itemName}
              </label>
            ))}
          </VStack>
        </Box>
        <Box>
          <Text fontWeight="bold" my="20px">
            Document type
          </Text>
          <VStack
            align="flex-start"
            spacing={2}
            display={{ base: "block", md: "flex" }}
          >
            {Object.entries(seccheckedItems).map(([secItemName, isChecked]) => (
              <label
                key={secItemName}
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleSecCheckboxChange(secItemName)}
                  style={{ display: "none" }}
                />
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                    background: isChecked
                      ? `url(${check}) center/cover no-repeat`
                      : "white",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                />
                {secItemName}
              </label>
            ))}
          </VStack>
        </Box>
        <Box>
          <Text fontWeight="bold" my="20px">
            Categories
          </Text>
          <VStack
            align="flex-start"
            spacing={2}
            display={{ base: "block", md: "flex" }}
          >
            {Object.entries(trdcheckedItems).map(([trdItemName, isChecked]) => (
              <label
                key={trdItemName}
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleThirdCheckboxChange(trdItemName)}
                  style={{ display: "none" }}
                />
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "8px",
                    background: isChecked
                      ? `url(${check}) center/cover no-repeat`
                      : "white",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                />
                {trdItemName}
              </label>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
