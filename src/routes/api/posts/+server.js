export const GET = async ({request}) => {
  const res = await fetch('https://dummyjson.com/products/1', {
		"Access-Control-Allow-Origin": "*"
	})
  const data = await res.json()

  return new Response(JSON.stringify(data), { status: 200 })
}

export const POST = async ({ request }) => {
  const body = await request.json()
  return new Response(JSON.stringify(body))
}