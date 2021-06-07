import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import _ from 'lodash';
import dataToObject from './src/parsers.js';

const gendiff = (filePath1, filePath2) => {
  const data1 = readFileSync(resolve(cwd(), filePath1));
  const data2 = readFileSync(resolve(cwd(), filePath2));
  const obj1 = dataToObject(filePath1, data1);
  const obj2 = dataToObject(filePath2, data2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = [...keys1, ...keys2];
  const uniqSortedKeys = _.uniq(allKeys).sort();
  const diff = uniqSortedKeys.map((item) => {
    if (_.has(obj1, item) && _.has(obj2, item)) {
      if (obj1[item] === obj2[item]) {
        return `\n    ${item}: ${obj1[item]}`;
      }
      return `\n  - ${item}: ${obj1[item]}\n  + ${item}: ${obj2[item]}`;
    }
    if (!(_.has(obj1, item))) {
      return `\n  + ${item}: ${obj2[item]}`;
    }
    if (!(_.has(obj2, item))) {
      return `\n  - ${item}: ${obj1[item]}`;
    }
    return item;
  });
  diff.unshift('{');
  diff.push('\n}');
  return diff.join('');
};
export default gendiff;
