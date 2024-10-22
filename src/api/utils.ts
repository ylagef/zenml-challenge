export const fetchRequest = async <T extends unknown>(slug: string, options: RequestInit = {}) => {
  const url = `${process.env.API_URL}/${slug}`
  console.log(url)
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  })

  if (!response.ok) {
    console.error(response)
    throw new Error(response.statusText)
  }

  return response.json() as Promise<T>
}
