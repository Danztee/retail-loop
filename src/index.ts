import Product from "./models/Product";

class RetailLoop {
  product: Product;

  /**
   * Create an instance of RetailLoop.
   * @param {Object} config - Configuration object.
   * @param {string} config.secret_key - Your secret key.
   * @param {string} config.api_key - Your API key.
   * @param {string} config.token - Your token.
   */
  constructor(config: { api_key: string; secret_key: string; token: string }) {
    this.product = new Product(config);
  }
}

export default RetailLoop;
