import { client } from '$lib/contentfulClient';

export async function get() {
    const news = await client.getEntries({
        content_type: 'news',
        order: '-sys.createdAt'
    });

    if (news) {
        return {
            status: 200,
            body: {
                news
            }
        };
    }

    return {
        status: 404
    };
}
