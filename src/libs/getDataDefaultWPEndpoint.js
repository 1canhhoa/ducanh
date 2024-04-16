export default async function getDataDefaultWPEndpoint(
  api,
  pagination = {
    enabled: false,
    perPage: 6,
    page: 1,
  },
  revalidate = 60,
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/wp-json/wp/v2${api}${
      pagination.enabled
        ? `${api.includes('?') ? '&' : '?'}per_page=${
            pagination.perPage
          }&page=${pagination.page}`
        : ''
    }`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {revalidate},
    },
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data')
    return null
  }
  const data = await res.json()
  if (pagination.enabled) {
    const headers = res.headers
    const total = headers.get('X-Wp-Total')
    const pageCount = headers.get('X-Wp-Totalpages')
    return {
      pagination: {
        total,
        pageCount,
        perPage: pagination.perPage,
      },
      data,
    }
  }
  return data
}
