import eslintPluginPrettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
	{
		ignores: ["dist", "node_modules"],
	},
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			...eslintConfigPrettier.rules,
			"prettier/prettier": [
				"error",
				{
					singleQuote: true,
					semi: false,
				},
			],
			"quotes": ["error", "single"],
			"semi": ["error", "never"],
		},
	},
]
