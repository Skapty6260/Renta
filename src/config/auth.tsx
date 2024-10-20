import { FaGoogle, FaTwitter, FaVk, FaSteam } from 'react-icons/fa'

const shared = {
	services: [
		{ service_icon: <FaGoogle />, service_name: 'google' },
		{ service_icon: <FaTwitter />, service_name: 'twitter' },
		{ service_icon: <FaVk />, service_name: 'vk' },
		{ service_icon: <FaSteam />, service_name: 'steam' },
	],
}

const config = {
	login: {
		...shared,
		fields: [
			{ placeholder: 'Username', type: 'username' },
			{ placeholder: 'Password', type: 'password' },
		],
	},
	register: {
		...shared,
		fields: [
			{ placeholder: 'Username', type: 'username' },
			{ placeholder: 'Password', type: 'password' },
		],
	},
}

export default config
