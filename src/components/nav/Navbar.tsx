import React, { useState } from "react";
import {
  Box,
  Flex,
  useDisclosure,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Switch,
  CloseButton,
} from "@chakra-ui/react";
import bar from "../../assets/icons/bar.png";
import logo from "../../assets/images/logo.png";
import dropdown from "../../assets/icons/dropdown.png";
import { Link } from "react-router-dom";
import UserModal from "../modal/UserModal";

interface NavItem {
  id: number;
  title: string;
  to: string;
}

const Navbar = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [activeItem, setActiveItem] = useState<string>("resources");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Items: NavItem[] = [
    {
      id: 1,
      title: "Dashboard",
      to: "dashboard",
    },
    {
      id: 2,
      title: "Resources",
      to: "resources",
    },
    {
      id: 3,
      title: "Toolkit",
      to: "outlet-list",
    },
  ];

  const handleItemClick = (to: string) => {
    setActiveItem(to);
    onClose();
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    // Your logout functionality goes here
    console.log("Logout");
    // Close the modal after logout
    handleModalClose();
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px={{ base: "1.5rem", md: "3rem" }}
      py="1.5rem"
      color="black"
      boxShadow={{ base: "none", md: "md" }}
      direction={{ base: "row", md: "row" }}
    >
      {/* Logo */}
      <Flex align="center" mr={5}>
        <Box fontSize="2xl" fontWeight="bold">
          <img src={logo} alt="logo" />
        </Box>
      </Flex>

      {/* Overlay */}
      {isOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          zIndex="4"
          onClick={onClose}
        />
      )}

      {/* Navigation Links */}
      <VStack
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        alignItems={{ base: "center", md: "flex-start" }}
        flexGrow={1}
        mt={{ base: 0, md: 0 }}
        mb={{ base: isOpen ? 4 : 0, md: 0 }}
        mr={{ base: 0, md: isOpen ? 0 : 4 }}
        flexDirection={{ base: "column", md: "row" }}
        position={{ base: "fixed", md: "static" }}
        top={{ base: 0, md: "auto" }}
        left={{ base: 0, md: "auto" }}
        right={{ base: 0, md: "auto" }}
        bottom={{ base: isOpen ? "50%" : "auto", md: "auto" }}
        width={{ base: "70%", md: "auto" }}
        pt={{ base: 3, md: 0 }}
        height={{ base: isOpen ? "100%" : "auto", md: "auto" }}
        backgroundColor="white"
        zIndex={5}
        transition="transform 0.3s ease-in-out"
        transform={{
          base: isOpen ? "translateX(43%)" : "translateX(100%)",
          md: "none",
        }}
      >
        <Button
          display={{ base: "block", md: "none" }}
          onClick={onClose}
          position="absolute"
          top="5px"
          right="15px"
          bg="transparent"
          border="none"
          cursor="pointer"
          fontWeight="bolder"
          fontSize="30px"
          color="black"
        >
          <CloseButton />
        </Button>

        {Items.map((item) => (
          <Box
            p={2}
            key={item.id}
            borderBottom={
              activeItem === item.to
                ? "2px solid #314EF9"
                : { base: "1px solid #ccc", md: "none" }
            }
            color={
              activeItem === item.to ? "#314EF9" : { base: "black", md: "none" }
            }
            width={{ base: "80%", md: "auto" }}
            textAlign="center"
          >
            <Link
              to={`/${item.to.toLowerCase().replace(" ", "-")}`}
              className="menu-item"
              onClick={() => handleItemClick(item.to)}
            >
              {item.title}
            </Link>
          </Box>
        ))}
      </VStack>

      <Flex alignItems="center" ml="auto">
        <FormControl display="flex" alignItems="center" gap="5px">
          <Switch id="isChecked" isChecked mr="10px" />
          <FormLabel
            htmlFor="isChecked"
            fontWeight="bold"
            display={{ base: "none", md: "none", lg: "block" }}
          >
            Switch to Employee
          </FormLabel>
        </FormControl>
        <Box display="flex" alignItems="center" gap="5px">
          <Box
            background="#17E4A1"
            px="10px"
            py="5px"
            borderRadius="50%"
            fontWeight="bold"
            ml="4"
          >
            <p>JA</p>
          </Box>
          <Box
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            gap="5px"
          >
            <Box>Jonathan</Box>
            <img
              src={dropdown}
              alt="dropdown"
              style={{ width: "10px" }}
              onClick={handleModalOpen}
            />
          </Box>
        </Box>
      </Flex>

      {/* Hamburger Icon */}
      <Box
        display={{ base: "block", md: "none" }}
        mx="20px"
        onClick={onToggle}
        cursor="pointer"
      >
        <img src={bar} alt="hamburger" />
      </Box>
      {/* modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        userName="Jonathan"
        onLogout={handleLogout}
      />
    </Flex>
  );
};

export default Navbar;
