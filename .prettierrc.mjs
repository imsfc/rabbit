/** @type {import("prettier").Config} */
export default {
  printWidth: 9999,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
