import { client } from '$lib/contentfulClient';

export async function get({ params }) {
    const insights_entry = await client.getEntries({
        'fields.slug': params.slug,
        'fields.category': params.category,
        content_type: 'insights',
        include: 10
    });

    if (insights_entry) {
        return {
            body: {
                insights_entry
            }
        };
    }

    return {
        status: 404
    };
}
