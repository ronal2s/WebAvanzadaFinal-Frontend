import { restClient } from "../../rayoDevCore/restClient";

const URL_API = "http://localhost:9000"

export const fetchUsers = (params) => {
  return restClient(`${URL_API}/users`, 'GET')
    .then(data => {
      return Promise.resolve(data)
    })
}
