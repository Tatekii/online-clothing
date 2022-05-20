import styled from "@emotion/styled";

export const CheckoutContainer = styled.div`
  width: 55%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 95%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutList = styled.div`
  overflow: auto;
  width: 100%;
`;
