import {
  signInWithGooglePopup,
  createUserDocument,
} from "@/utils/firebase/firebase";
const SignIn = () => {
  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    const res = await createUserDocument(user);
    console.log(res);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={() => loginWithGoogle()}>login with google</button>
    </>
  );
};
export default SignIn;
