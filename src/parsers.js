import { extname } from 'path';
import yaml from 'js-yaml';

const dataToObject = (filePath, data) => {
  if (extname(filePath) === '.json') {
    const obj = JSON.parse(data);
    return obj;
  }
  if (extname(filePath) === '.yml' || extname(filePath) === '.yaml') {
    const obj = yaml.load(data);
    return obj;
  }
  return data;
};
export default dataToObject;
