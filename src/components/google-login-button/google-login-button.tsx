import { FcGoogle } from "react-icons/fc";
import { signInWithGooglePopup } from "@/utils/firebase/firebase";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    return await new Promise(async (resolve, reject) => {
      setGoogleLoading(true);
      try {
        await signInWithGooglePopup();
        navigate("/");
        resolve(null);
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
