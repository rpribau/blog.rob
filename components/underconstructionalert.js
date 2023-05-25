import { Alert, AlertIcon, useColorModeValue } from "@chakra-ui/react";

const UnderConstructionAlert = () => {
  const textColor = useColorModeValue("black", "black");
  const iconColor = useColorModeValue("black", "black");

  return (
    <Alert 
      status="warning" 
      color={textColor}
      bg="yellow.200"
      borderRadius="md"
      p={2}
      fontSize="sm"
    >
      <AlertIcon color={iconColor} />
      This site is still under construction, so some features may not work properly.
    </Alert>
  );
};

export default UnderConstructionAlert;
