export async function fetchPostsFromServer() {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!API_URL || !TOKEN) {
    throw new Error('Missing required environment variables: API_URL or TOKEN');
  }

  const res = await fetch(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error('Error fetching posts:', await res.text());
    throw new Error('Failed to fetch posts');
  }

  const data = await res.json();
  return data.data;
}
