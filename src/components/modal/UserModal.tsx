import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  onLogout: () => void;
}

const UserModal: React.FC<UserModalProps> = ({
  isOpen,
  onClose,
  userName,
  onLogout,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>User Info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box py={2}>
            <strong>Name:</strong> {userName}
          </Box>
          <Box py={2}>
            <Button colorScheme="red" onClick={onLogout}>
              Logout
            </Button>
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
