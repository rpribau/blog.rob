import React from 'react';
import { Box, ScaleFade, useBreakpointValue } from '@chakra-ui/react';

function ImageBox({ imageUrl, onClick }) {
  const boxWidth = useBreakpointValue({ base: '100%', md: '729px' });
  const boxHeight = useBreakpointValue({ base: 'auto', md: '265px' });

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box
        w={boxWidth}
        h={boxHeight}
        bgImage={`url('${imageUrl}')`}
        bgSize="cover"
        bgPosition="left center" // Ajusta según tus preferencias
        cursor="pointer"
        rounded="md"
        onClick={onClick}
        mb={4} // Espacio de separación hacia abajo
      ></Box>
    </ScaleFade>
  );
}

export default ImageBox;
