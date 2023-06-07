import { useEffect } from "react";
import RetaiLoop from ".";
import "./App.css";

const config = {
  api_key: "",
  secret_key: "",
  token: "",
};
const retaiLoop = new RetaiLoop(config);
const { product } = retaiLoop;

function App() {
  useEffect(() => {
    // autoCreateProduct();
    // getProductById();
    pagination();
    // searchProduct();
    // createProduct();
  }, []);

  async function autoCreateProduct() {
    const res = await product.autoCreateProduct();
    console.log(res);
  }

  async function getProductById() {
    const res = await product.getProductById("4");
    console.log(res);
  }

  async function searchProduct() {
    const res = await product.searchProduct("Computer");
    console.log(res);
  }

  async function pagination() {
    const res = await product.pagination("1");
    console.log(res);
  }

  const productDetails = {
    barcode: "",
    name: "brom",
    description: "black and white",
    unit: "pack",
    sku_code: "b2244",
    quantity: "10",
    Quantity_type: "limited",
    price: 5000,
    currency: "naira",
    // discount_price: {
    //   currency: "naira",
    //   value: 5000,
    // },
    images: [
      "https://www.google.com/",
      "https://www.google.com/",
      "https://www.google.com/",
    ],
    variant_options: [
      {
        name: "sam",
      },
    ],
    variant: [
      {
        value: "true",
      },
    ],
    categories: ["done"],
  };

  async function createProduct() {
    const res = await product.createProduct(productDetails);
    console.log(res);
  }

  return (
    <>
      <h1>Retail loop</h1>
      {/* Render your components and UI here */}
    </>
  );
}

export default App;
