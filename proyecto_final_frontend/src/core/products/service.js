import { restClientWithOutAuth } from "../../rayoDevCore/restClient"
import { URL_API } from "../../rayoDevCore/utils"

export const getProducts = (filters) => {
  let page = 1;
  let limit = 10;
  let sortBy = '';
  if (filters) {
    console.log(filters.sortBy);
    page = filters.page;
    limit = filters.limit;
    sortBy = `&sortBy=${filters.sortBy}+${filters.orderBy}`;
  }
  return restClientWithOutAuth(`${URL_API}/products?page=${page}&limit=${limit}${sortBy}`, 'GET', filters)
    .then(res => Promise.resolve(res.data))
    .catch(error => Promise.reject(error))
}
