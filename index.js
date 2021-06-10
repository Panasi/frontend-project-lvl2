import _ from 'lodash';
import getFileData from './src/parsers.js';
import StylishFormatter from './src/formatters/stylish.js';

const gendiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = getFileData(filePath1);
  const data2 = getFileData(filePath2);
  const getDiff = (obj1, obj2) => {
    const overallKeys = [...Object.keys(obj1), ...Object.keys(obj2)];
    const uniqSortedKeys = _.uniq(overallKeys).sort();
    const result = uniqSortedKeys.map((key) => {
      if (!_.has(obj1, key)) {
        return { name: key, type: 'added', value: obj2[key] };
      }
      if (!_.has(obj2, key)) {
        return { name: key, type: 'deleted', value: obj1[key] };
      }
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        return { name: key, type: 'common', children: getDiff(obj1[key], obj2[key]) };
      }
      if ((typeof obj1[key] !== typeof obj2[key]) || (obj1[key] !== obj2[key])) {
        return {
          name: key,
          type: 'changed',
          valueBefore: obj1[key],
          valueAfter: obj2[key],
        };
      }
      return { name: key, type: 'unchangeable', value: obj1[key] };
    });
    return result;
  };
  const diffData = getDiff(data1, data2);
  if (format === 'stylish') {
    return StylishFormatter(diffData);
  }
  return StylishFormatter(diffData);
};
export default gendiff;
