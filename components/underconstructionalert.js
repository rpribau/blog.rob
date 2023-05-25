import { Alert, AlertIcon } from "@chakra-ui/react";

const UnderConstructionAlert = () => {
  return (
    <Alert
      status="warning"
      bg="yellow.200"
      borderRadius="md"
      p={2}
      fontSize="md"
      width="fit-content"
    >
      <AlertIcon boxSize={4} />
      This site is still under construction, so some features may not work properly.
    </Alert>
  );
};

export default UnderConstructionAlert;
