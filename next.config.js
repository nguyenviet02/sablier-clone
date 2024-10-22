/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'nguyenviet02.github.io',
				port: '',
				pathname: '/token-images/**',
				search: '',
			},
		],
	}
}

module.exports = nextConfig
