import React, { useState } from 'react';
import { Box, ScaleFade, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';

function BlogPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = () => {
    onOpen();
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <ScaleFade initialScale={0.9} in={true}>
        <Box
          w="729px"
          h="265px"
          bgImage="url('https://i.kym-cdn.com/entries/icons/facebook/000/032/558/temp6.jpg')"
          bgSize="cover"
          bgPosition="center"
          cursor="pointer"
          rounded="md"
          onClick={handleImageClick}
        ></Box>
      </ScaleFade>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Discard Changes?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to discard all of your notes? 44 words will be deleted.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="green" onClick={onClose}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default BlogPage;
