import {
  signInWithGooglePopup,
  createUserDocument,
} from "@/utils/firebase/firebase";
import SignUp from "@/components/sign-up-form/sign-up-form";
import { Button } from "@chakra-ui/react";

const SignIn = () => {
  /** 弹窗登录结果 */
  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
    console.log(userDocRef);
  };

  return (
    <>
      <h1>SignIn</h1>
      <Button colorScheme="purple" onClick={() => loginWithGoogle()}>
        login with google
      </Button>
      <SignUp />
    </>
  );
};
export default SignIn;
