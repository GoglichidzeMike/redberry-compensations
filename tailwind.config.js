module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sora: 'Sora',
			},
			fontSize: {
				'3-5xl': '32px',
				'4-5xl': '40px',
			},
			colors: {
				metal: '#2B303A',
				'metal-dark': '#111317',
				'metal-middle': '#7A818E',
				'metal-light': '#E9EDF4',
				'metal-red': '#E1261C',
			},
			maxWidth: {
				1080: '1080px',
				660: '660px',
			},
			margin: {
				'2-5': '10px',
				100: '100px',
			},
			padding: {
				'2-5': '10px',
			},
			borderRadius: {
				4: '4px',
				'4xl': '30px',
			},
			lineHeight: {
				'3-5': '15px',
				'7-5': '30px',
				'8-5': '35px',
				12: '50px',
			},
		},
	},
	plugins: [],
};
