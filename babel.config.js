/* eslint-env node */
module.exports = {
  presets: ['@quasar/babel-preset-app'],
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'html',
          'css',
          'javascript',
          'php',
          'dart',
          'bash',
          'nginx',
          'sql',
          'c',
          'cpp',
          'python',
          'go',
          'java'
        ],
        plugins: [
          'line-numbers',
          'show-language',
          'copy-to-clipboard',
          'inline-color'
        ],
        theme: 'okaidia',
        css: true
      }
    ]
  ]
};
