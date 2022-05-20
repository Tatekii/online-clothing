import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as CrwnLogo } from "@/assets/crown.svg";
import CartIcon from "@/components/cart-icon/cart-icon";
import CartDropdown from "@/components/cart-dropdown/cart-dropdown";
import AuthButton from "@/components/auth-button/auth-button";

const Navigation = () => {
  const Navigator = styled.div`
    height: 70px;
    width: 100%;
    padding: 0 40px;
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

  const RouterView = styled.div`
    height: calc(100vh - 70px);
    overflow: auto;
    padding: 0 40px;
  `;

  return (
    <>
      <Navigator>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <AuthButton />
          <CartIcon />
        </NavContainer>
        <CartDropdown />
      </Navigator>

      {/* router view */}

      <RouterView>
        <Outlet />
      </RouterView>
    </>
  );
};
export default Navigation;
