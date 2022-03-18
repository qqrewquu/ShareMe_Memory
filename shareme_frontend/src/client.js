import sanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';
import { FcComments } from 'react-icons/fc';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-01-29',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,

})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

