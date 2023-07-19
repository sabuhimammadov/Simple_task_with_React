import React from "react";
import { slide as Menu } from "react-burger-menu";
import { isPicture } from "../../Utils/isPicture";
export class Form extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  constructor() {
    super();

    this.state = {
      productName: "",
      productPicture: null,
      productprice: null,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleChangeField1 = this.handleChangeField1.bind(this);
    this.handleChangeField2 = this.handleChangeField2.bind(this);
    this.handleChangeField3 = this.handleChangeField3.bind(this);
  }
  handleChangeField1(e) {
    const productName = e.target.value.trim();
    this.setState({ productName });
  }
  handleChangeField2(e) {
    const productPicture = e.target.value;
    this.setState({ productPicture });
  }
  handleChangeField3(e) {
    const productprice = e.target.value;
    this.setState({ productprice });
  }
  handleSubmitForm(e) {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({ productName: "", productPicture: "", productprice: "" });
  }
  render() {
    let isnotPicture = isPicture(this.state.productPicture);
    return (
      <>
        <header>
          <div className="d-flex justify-content-between bg-danger pb-2">
            <div className="pt-4 ms-3">
              <h1 className="text-light">Products</h1>
            </div>
            <div>
              <Menu right>
                <form onSubmit={this.handleSubmitForm}>
                  <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      className="form-control"
                      id="productName"
                      aria-describedby="productName"
                      onChange={this.handleChangeField1}
                      value={this.state.productName}
                      style={{ color: "black" }}
                    />
                    {this.state.productName === "" && (
                      <div
                        id="productPicture"
                        className="form-text"
                        style={{ color: "brown" }}
                      >
                        Invalid Product Name
                      </div>
                    )}
                  </div>
                  <div class="mb-3">
                    <label htmlFor="productPicture" className="form-label">
                      Product Image
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productPicture"
                      name="productPicture"
                      value={this.state.productPicture}
                      onChange={this.handleChangeField2}
                      style={{ color: "#000" }}
                    />
                    {!isnotPicture && (
                      <div
                        id="productPicture"
                        className="form-text"
                        style={{ color: "brown" }}
                      >
                        Invalid Picture Url
                      </div>
                    )}
                  </div>
                  <div class="mb-3">
                    <label htmlFor="productprice" className="form-label">
                      Product Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productprice"
                      name="productprice"
                      value={this.state.productprice}
                      onChange={this.handleChangeField3}
                      style={{ color: "#000" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={
                      !isnotPicture ||
                      this.state.productName === "" ||
                      this.state.productprice < 0 ||
                      !this.state.productprice
                    }
                  >
                    Add Product
                  </button>
                </form>
              </Menu>
            </div>
          </div>
        </header>
      </>
    );
  }
}
