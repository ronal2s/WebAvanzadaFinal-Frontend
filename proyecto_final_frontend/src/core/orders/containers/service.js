import { restClient } from "../../../rayoDevCore/restClient"

const URL_API = "http://localhost:9000"

export const agregarPlan = (params) => {
  console.log("Params: ", params)
  return restClient(`${URL_API}/events`, 'POST', params)
    .then(data => {
      return Promise.resolve(data)
    })
}
