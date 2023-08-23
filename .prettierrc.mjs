/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
