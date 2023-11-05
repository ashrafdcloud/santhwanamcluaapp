const BASE_URL = "http://localhost:4000";

export const fetchEmployees = () => {
  return fetch(`${BASE_URL}/employee`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
};


export const fetchProducts = () => {
  return fetch(`${BASE_URL}/product/products`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
};