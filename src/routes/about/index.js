import createClient from '$lib/prismic';

export async function get({ fetch }) {
  const client = createClient({ fetch })
  const document = await client.getSingle('about', 'about')

  if (document)
    return {
      body: {
        document,
      },
    }

  return {
    status: 404,
  }
}
