import http from "../http-common";

class ProductDataService {
  getAll(params) {
    return http.get("/products",{params});
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(title) {
    return http.get(`/products?title=${title}`);
  }
}
// eslint-disable-next-line
export default new ProductDataService();