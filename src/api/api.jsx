const URL = "https://api.rawg.io/api"
const API_KEY = import.meta.env.VITE_API_KEY

const getData = async (endpoint, params) => {
  if (API_KEY !== undefined) {
    const searchParams = new URLSearchParams(params).toString()
    const response = await fetch(
      `${URL}/${endpoint}?${searchParams}&key=${API_KEY}`
    )

    if (!response.ok) throw new Error(response.statusText)

    const data = await response.json()
    return data
  }

  throw new Error("Api key is undefined")
}

export default getData
