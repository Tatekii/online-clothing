import { SignOutAuth } from "@/utils/firebase/firebase";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
const SignOutButton = () => {
  const SignOutContainer = styled(Text)`
    cursor: pointer;
  `;
  return (
    <SignOutContainer onClick={() => SignOutAuth()}>SIGN OUT</SignOutContainer>
  );
};
export default SignOutButton;
