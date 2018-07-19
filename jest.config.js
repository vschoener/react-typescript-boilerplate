module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  'transform': {
    '.*\.tsx?$': 'ts-jest'
  },
  'testRegex': '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/styleMock.js"
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/bootstrap.tsx',
  ],
}
