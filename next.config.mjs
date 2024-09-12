/** @type {import('next').NextConfig} */
/* ALIAS ISSUE SOLVE */
/* If you don't want to use the ALIAS setting of WEBPACK, change CONFIG. */
import path from 'path';

const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve('src');
        return config;
    },
};

export default nextConfig;