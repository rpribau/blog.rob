import React from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';

function ImageBox({ imageUrl, onClick }) {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        w="729px"
        h="265px"
        bgImage={`url('${imageUrl}')`}
        bgSize="cover"
        bgPosition="center"
        cursor="pointer"
        rounded="md"
        onClick={onClick}
        mb={4} // Espacio de separación hacia abajo
      ></Box>
    </ScaleFade>
  );
}

export default ImageBox;
