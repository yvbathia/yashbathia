import camelCase from 'lodash/camelCase';

const flags = {};

Object.keys(process.env).forEach((key) => {
  const prefix = 'REACT_APP_FEATURE_FLAG_';
  if (key.startsWith(prefix)) {
    const camelKey = camelCase(key.split(prefix)[1]);
    flags[camelKey] = process.env[key] === 'TRUE';
  }
});

export default flags;
