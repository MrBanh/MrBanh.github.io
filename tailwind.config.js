const colors = require('tailwindcss/colors');

module.exports = {
	purge: [ './pages/**/*.js', './src/components/**/*.js' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				teal: colors.teal,
				lightBlue: colors.lightBlue
			},
			height: {
				header: '80px'
			},
			outline: {
				lightBlue: '2px solid #0284C7'
			},
			padding: {
				section: '80px'
			}
		}
	},
	variants: {
		extend: {
			borderStyle: [ 'hover', 'focus' ],
			borderWidth: [ 'hover', 'focus' ],
			animation: [ 'hover', 'focus', 'group-hover' ],
			fontSize: [ 'hover', 'focus' ],
			zIndex: [ 'hover', 'focus' ]
		}
	},
	plugins: []
};
