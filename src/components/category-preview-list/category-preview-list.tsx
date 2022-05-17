import ProductCard from "../product-card/product-card";
import { ProductItem } from "@/types";
import { FC } from "react";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Preview,
} from "./category-preview-list.styles";

/**
 *  分类预览组件
 *  渲染分类页面入口的预览前四个商品
 *  */
const CategoryPreviewList: FC<{
  title: string;
  products: ProductItem[];
}> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Heading>
        <Link to={title}> {title.toUpperCase()}</Link>
      </Heading>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreviewList;
