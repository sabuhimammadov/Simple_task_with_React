import React from "react";

export class ProductCard extends React.Component {
  render() {
    console.log(this.props);
    const { productName, productPicture, productprice } = this.props.product;
    return (
      <div className=" mb-4 me-3 mt-3">
        <div class="card" style={{ width: "15rem" }}>
          <img
            src={productPicture}
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "160px", objectFit: "cover" }}
          />
          <div class="card-body text-center">
            <h5 class="card-title">{productName}</h5>
            <p class="card-text">{productprice}₼</p>
            <a href="#" class="btn btn-danger">
              Add basket
            </a>
          </div>
        </div>
      </div>
    );
  }
}
