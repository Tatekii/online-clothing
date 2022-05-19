import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/product-card/product-card";
import { useCategoryStore } from "@/store";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/react";
import { ProductItem } from "@/types";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useCategoryStore();

  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    console.log("effect", category, categoriesMap[category!]);

    setProducts(categoriesMap[category!]);
  }, [category, categoriesMap]);

  const CategoryTitle = styled(Heading)`
    text-align: center;
  `;
  const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  `;

  return (
    <>
      <CategoryTitle>{category!.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
