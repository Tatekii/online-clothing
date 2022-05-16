import ProductCard from "@/components/product-card/product-card";
import { useProduct } from "@/context/product.context";
import styled from "@emotion/styled";
const Shop = () => {
  const { products } = useProduct();

  const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 50px;
  `;
  return (
    <ProductContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductContainer>
  );
};

export default Shop;
