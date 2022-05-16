import { FcGoogle } from "react-icons/fc";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "@/utils/firebase/firebase";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "@/context/auth";

const GoogleLoginButton = () => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const { login } = useAuth();

  const loginWithGoogle = async () => {
    return await new Promise(async (resolve, reject) => {
      setGoogleLoading(true);
      try {
        const { user } = await signInWithGooglePopup();
        // resolve(login(user))
        await createUserDocumentFromAuth(user);

        resolve(login(user));
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
