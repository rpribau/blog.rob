import React, { useState, useRef } from 'react'; // Añadir useRef
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Lorem } from '@chakra-ui/react';
import ImageBox from '../components/imagebox';

function BlogPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(); // Crear la referencia aquí

  const handleImageClick = () => {
    onOpen();
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <ImageBox
        imageUrl="https://i.imgur.com/yTLHHab.png"
        onClick={handleImageClick}
      />

      <Box mb={4} /> {/* Espacio de separación hacia abajo */}

      <ImageBox
        imageUrl="https://i.imgur.com/QQYlhb8.png"
        onClick={handleImageClick}
      />

    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        This is some modal content.
        </ModalBody>

        <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
    </ModalContent>
    </Modal>

    </Box>
  );
}

export default BlogPage;
