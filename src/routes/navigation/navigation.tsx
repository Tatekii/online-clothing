import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as CrwnLogo } from "@/assets/crown.svg";

const Navigation = () => {
  const Navigator = styled.div`
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 2.5rem; */
  `;

  const NavContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  const NavLink = styled(Link)`
    font-size: 2rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
  `;

  const LogoContainer = styled(Link)`
    /* height: 100%; */
    width: 7rem;
    padding: 0 0 0 1.5rem;
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
