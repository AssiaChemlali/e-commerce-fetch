
export const FetchContries = async () => {
  try {
    const res = await fetch("https://countriesnow.space/api/v0.1/countries")
    const data = await res.json()
    const countries = data.data.map(item => item.country)
    return countries

  } catch (error) {
    console.log(error)
  }


}

export const fetchCities = async (country) => {
  try {
    const res = await fetch(`https://countriesnow.space/api/v0.1/countries/cities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ country })

      })
    const data = await res.json()
    const cities = data.data

    return cities

  } catch (error) {
    console.log(error)
  }


}