import React from "react";
import { ProductCard } from "./ProductCard";
export class Product extends React.Component {
  render() {
    //   console.log(this.props)
    const { products } = this.props;
    let content = products?.map((value) => {
      return <ProductCard key={"product" + value.id} {...value} />;
    });
    return <div className="d-flex container flex-wrap">{content}</div>;
  }
}
