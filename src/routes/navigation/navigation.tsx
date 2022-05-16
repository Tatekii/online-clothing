import { Outlet, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as CrwnLogo } from "@/assets/crown.svg";
import { useAuth } from "@/context/auth.context";
import SignOutButton from "@/components/sign-out-button/sign-out-button";
import CartIcon from "@/components/cart-icon/cart-icon";
import CartDropdown from "@/components/cart-dropdown/cart-dropdown";
import { useCart } from "@/context/cart.context";

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
    min-height: calc(100vh - 70px);
    padding: 0 40px;
  `;

  const { user } = useAuth();
  const { isCartOpen } = useCart();
  return (
    <>
      <Navigator>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {!user ? <NavLink to="/auth">SIGN IN</NavLink> : <SignOutButton />}
          <CartIcon />
        </NavContainer>
        {isCartOpen && <CartDropdown />}
      </Navigator>

      {/* router view */}

      <RouterView className="router_view">
        <Outlet />
      </RouterView>
    </>
  );
};
export default Navigation;
