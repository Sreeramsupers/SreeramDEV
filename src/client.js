import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: import.meta.env.VITE_SANITY_PRO_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
	useCdn: true,
	token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
