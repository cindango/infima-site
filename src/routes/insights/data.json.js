import { client } from '$lib/contentfulClient';

export async function get() {
    const insights = await client.getEntries({
        content_type: 'insights',
        order: '-sys.createdAt'
    });

    if (insights) {
        return {
            status: 200,
            body: {
                insights
            }
        };
    }

    return {
        status: 404
    };
}
