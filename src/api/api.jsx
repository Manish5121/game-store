const URL = "https://api.rawg.io/api"
const API_KEY = import.meta.env.VITE_API_KEY

const getData = async (endpoint) => {
  if (API_KEY !== undefined) {
    // const searchParams = new URLSearchParams(params).toString()
    const response = await fetch(`${URL}/${endpoint}?key=${API_KEY}`)

    if (!response.ok) throw new Error(response.statusText)

    const res = await response.json()
    const data = await res.results
    return data
  }

  throw new Error("Api key is undefined")
}

export default getData
