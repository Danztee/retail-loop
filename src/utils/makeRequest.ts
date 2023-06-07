const endpoint = "https://stagingapi.retailloop.co/api/v1/product";

const makeRequest = async (
  api_key: string,
  secret_key: string,
  token: string,
  method: string,
  route?: string,
  params?: string,
  body?: any
) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    let url = `${endpoint}`;

    if (route) {
      url += `/${route}`;
    }

    url += `?api_key=${api_key}&secret_key=${secret_key}`;

    if (params?.split("=")[0] === "page") {
      url = `${endpoint}/${route}?${params}&api_key=${api_key}&secret_key=${secret_key}`;
    } else if (params) {
      url += `${params}`;
    }

    const options: RequestInit = {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default makeRequest;
