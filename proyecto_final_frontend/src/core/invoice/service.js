import { restClient } from "../../rayoDevCore/restClient";

const URL_API = "http://localhost:9000"

export const fetchEvents = (params) => {
  return restClient(`${URL_API}/events/clients/${params}`, 'GET')
    .then(data => {
      return Promise.resolve(data)
    })
}
