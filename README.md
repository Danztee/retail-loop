## INSTALLATION

To install the retail-loop/react, run the following command:

```javascript
npm install retailoop/react

# or

yarn add retailoop/react
```

### - Products

```typescript
import { useEffect } from "react";
import RetailLoop from "retailoop/react";
import "./App.css";

const config = {
  api_key: "api-key",
  secret_key: "secret-key",
  token: "token",
};
const retailLoop = new RetailLoop(config);
const { product } = retailLoop;

function App() {
  useEffect(() => {
    autoCreateProduct();
    // getProductById();
    // searchProduct();
    // pagination();
    // createProduct();
  }, []);

  async function autoCreateProduct() {
    const res = await product.autoCreateProduct();
    console.log(res);
  }

  async function getProductById() {
    const res = await product.getProductById("321");
    console.log(res);
  }

  async function searchProduct() {
    const res = await product.searchProduct("speaker");
    console.log(res);
  }

  async function pagination() {
    const res = await product.pagination("2");
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
    price: {
      currency: "naira",
      value: "5000",
    },
    discount_price: {
      currency: "naira",
      value: "5000",
    },
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
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

##### Author: Olowoniyi Daniel

##### Twitter - [link](https://twitter.com/iamdanztee)

##### Github - [link](https://github.com/Danztee)
