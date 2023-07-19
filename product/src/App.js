import React from "react";
import { Form } from "./Components/Form";
import { Product } from "./Components/Product";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product) {
    const productValue = {
      id: Date.now(),
      product,
    };

    const newProduct = [productValue, ...this.state.products];
    this.setState({ products: newProduct });
  }
  render() {
    //  console.log(this.state.products)
    return (
      <>
        <Form addProduct={this.addProduct} />
        <Product products={this.state.products} />
      </>
    );
  }
}

export default App;
