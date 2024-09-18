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
      In the mean time, my GitHub is currently not working properly due to an flag error... sorry about that.
    </Alert>
  );
};

export default UnderConstructionAlert;
