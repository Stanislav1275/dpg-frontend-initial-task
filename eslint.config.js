import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';
import perfectionist from 'eslint-plugin-perfectionist';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'no-undef': 'off',
			'no-console': ['error', { allow: ['warn', 'error'] }]
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['eslint.config.js', 'svelte.config.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		},
		rules: {
			'svelte/html-self-closing': [
				'error',
				{
					void: 'always',
					normal: 'never',
					component: 'always',
					svg: 'always',
					math: 'always',
					svelte: 'ignore'
				}
			],
			'svelte/sort-attributes': [
				'error',
				{
					order: [
						'this',
						'bind:this',
						'id',
						'name',
						'slot',
						{ match: '/^--/u', sort: 'alphabetical' },
						['style', '/^style:/u'],
						'class',
						{ match: '/^class:/u', sort: 'alphabetical' },
						{
							match: ['!/:/u', '!/^(?:this|id|name|style|class)$/u', '!/^--/u'],
							sort: 'alphabetical'
						},
						['/^bind:/u', '!bind:this', '/^on:/u'],
						{ match: '/^use:/u', sort: 'alphabetical' },
						{
							match: '/^transition:/u',
							sort: 'alphabetical'
						},
						{ match: '/^in:/u', sort: 'alphabetical' },
						{ match: '/^out:/u', sort: 'alphabetical' },
						{ match: '/^animate:/u', sort: 'alphabetical' },
						{ match: '/^let:/u', sort: 'alphabetical' }
					]
				}
			],
			'svelte/no-store-async': ['error'],
			'svelte/require-stores-init': ['error'],
			'svelte/no-reactive-reassign': ['error'],
			'svelte/no-raw-special-elements': ['error'],
			'svelte/no-not-function-handler': ['error'],
			'svelte/no-dupe-on-directives': ['error'],
			'svelte/require-each-key': ['warn'],
			'svelte/prefer-destructured-store-props': ['warn'],
			'svelte/no-ignored-unsubscribe': ['warn'],
			'svelte/no-target-blank': ['warn'],
			'svelte/require-store-reactive-access': ['warn']
		}
	},
	{
		files: ['**/*.ts', '**/*.svelte'],
		plugins: { perfectionist },
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^[_$]',
					varsIgnorePattern: '^[_$]',
					caughtErrorsIgnorePattern: '^_'
				}
			],
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'line-length',
					order: 'asc',
					groups: [['side-effect', 'side-effect-style'], 'unknown', 'svelte', 'type'],
					customGroups: {
						value: { svelte: ['\\.svelte$'] },
						type: { svelte: ['\\.svelte$'] }
					}
				}
			],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					disallowTypeAnnotations: false,
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports'
				}
			],
			'@typescript-eslint/no-unsafe-declaration-merging': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-namespace': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'svelte/valid-compile': ['off'],
			'svelte/no-at-html-tags': 'warn'
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/', 'static/']
	}
);
