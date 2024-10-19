const shared = {
	services: [
		{ service_icon: <></>, service_name: 'google' },
		{ service_icon: <></>, service_name: 'github' },
		{ service_icon: <></>, service_name: 'gosuslugi' },
		{ service_icon: <></>, service_name: 'twitter' },
	],
}

const config = {
	login: {
		...shared,
		fields: [{ placeholder: 'Email' }, { placeholder: 'Password' }],
	},
	register: {
		...shared,
		fields: [
			{ placeholder: 'Username' },
			{ placeholder: 'Email' },
			{ placeholder: 'Password' },
		],
	},
}

export default config
