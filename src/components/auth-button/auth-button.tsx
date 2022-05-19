import { useUserStore } from "@/store";
import { SignOutAuth } from "@/utils/firebase/firebase";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
// sign in sign out button
const AuthButton = () => {
  const { user } = useUserStore();

  const SignOutContainer = styled(Text)`
    cursor: pointer;
  `;

  return !user ? (
    <NavLink to="/auth">SIGN IN</NavLink>
  ) : (
    <SignOutContainer onClick={() => SignOutAuth()}>SIGN OUT</SignOutContainer>
  );
};
export default observer(AuthButton);
