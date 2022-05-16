import { SignOutAuth } from "@/utils/firebase/firebase";
import { Button } from "@chakra-ui/react";
import { BiExit } from "react-icons/bi";
const SignOutButton = () => {
  const handleSignOut = () => {
    SignOutAuth();
  };
  return (
    <Button
      rightIcon={<BiExit />}
      // colorScheme="teal"
      onClick={() => handleSignOut()}
      variant="fill"
    >
      Sign Ou
    </Button>
  );
};
export default SignOutButton;
