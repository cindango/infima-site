import { client } from '$lib/contentfulClient';

export async function get() {
    const blogs = await client.getEntries({
        'sys.contentType.sys.id[in]': 'insights,news',
        order: '-sys.createdAt'
    });

    if (blogs) {
        return {
            status: 200,
            body: {
                blogs
            }
        };
    }

    return {
        status: 404
    };
}
