import { restClient } from "../../../rayoDevCore/restClient"

const URL_API = "http://localhost:9000"

export const fetchGraphs = (params) => {
  return restClient(`${URL_API}/events/graphics`, 'GET', params)
    .then(data => {
      return Promise.resolve(data)
    })
}
