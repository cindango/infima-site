import { client } from '$lib/contentfulClient';

export async function get({ params }) {
    const news_entry = await client.getEntries({
        'fields.slug': params.slug,
        content_type: 'news'
    });

    if (news_entry) {
        return {
            body: {
                news_entry
            }
        };
    }

    return {
        status: 404
    };
}
