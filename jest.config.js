module.exports = {
  preset: 'ts-jest',
  roots: ['./src'],
  setupFilesAfterEnv: [
    './node_modules/@testing-library/jest-dom/extend-expect',
  ],
};
