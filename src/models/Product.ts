import makeRequest from "../utils/makeRequest";

interface Config {
  api_key: string;
  secret_key: string;
  token: string;
}

class Product {
  #api_key: string;
  #secret_key: string;
  #token: string;

  constructor(config: Config) {
    this.#api_key = config.api_key;
    this.#secret_key = config.secret_key;
    this.#token = config.token;
  }

  #sendRequest = async (
    method: string,
    route?: string,
    params?: any,
    body?: any
  ) => {
    return await makeRequest(
      this.#api_key,
      this.#secret_key,
      this.#token,
      method,
      route,
      params,
      body
    );
  };

  autoCreateProduct = async () => {
    const route = "auto-create";
    const response = this.#sendRequest("GET", route);
    return response;
  };

  getProductById = async (id: string) => {
    const response = this.#sendRequest("GET", undefined, `/${id}`);
    return response;
  };

  searchProduct = async (search: string) => {
    const route = "search";
    const response = this.#sendRequest("GET", route, `&name=${search}`);
    return response;
  };

  pagination = async (page: string) => {
    const route = "paginated/results";
    const response = this.#sendRequest("GET", route, `page=${page}`);
    return response;
  };

  createProduct = async (product: any) => {
    const route = "create";
    const response = this.#sendRequest("POST", route, undefined, product);
    return response;
  };
}

export default Product;
