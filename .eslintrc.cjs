module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/jsx-indent-props': 0,
		'react/jsx-indent': 0,
		'jsx-quotes': 0,
		indent: 0,
		'linebreak-style': 0,
		quotes: 0,
		semi: 0,
		'no-tabs': 0,
		'spaced-comment': 0,
	},
};
