import { FcGoogle } from "react-icons/fc";
import {
  signInWithGooglePopup,
  createUserDocument,
} from "@/utils/firebase/firebase";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const GoogleLoginButton = () => {
  const [googleLoading, setGoogleLoading] = useState(false);

  const loginWithGoogle = async () => {
    return await new Promise(async (resolve, reject) => {
      setGoogleLoading(true);
      try {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        resolve(userDocRef);
      } catch (err) {
        reject(err);
      } finally {
        setGoogleLoading(false);
      }
    });
  };

  return (
    <Button
      flex={1}
      colorScheme="twitter"
      onClick={() => loginWithGoogle()}
      isLoading={googleLoading}
    >
      <FcGoogle />
      Sign in with Google
    </Button>
  );
};
export default GoogleLoginButton;