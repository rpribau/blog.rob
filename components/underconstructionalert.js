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
      The webpage is going to recieve a major visual update soon. Stay tuned!
    </Alert>
  );
};

export default UnderConstructionAlert;
