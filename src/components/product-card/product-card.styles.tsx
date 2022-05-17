import styled from "@emotion/styled";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  justify-content: space-between;
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  /* padding-bottom: 5px; */
`;

export const ProductDetail = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
