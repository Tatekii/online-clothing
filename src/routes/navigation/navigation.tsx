import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as CrwnLogo } from "@/assets/crown.svg";

const Navigation = () => {
  const Navigator = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const NavContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
  `;

  const LogoContainer = styled(Link)`
    width: 70px;
    padding: 0 0 0 15px;
  `;

  return (
    <>
      <Navigator>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/sign-in">SIGN IN</NavLink>
        </NavContainer>
      </Navigator>
      <Outlet />
    </>
  );
};
export default Navigation;
