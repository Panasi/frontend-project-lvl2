import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import _ from 'lodash';

const gendiff = (filepath1, filepath2) => {
	const data1 = readFileSync(resolve(cwd(), filepath1));
	const data2 = readFileSync(resolve(cwd(), filepath2));
	const objFromFormat = (path, data) => {
		if (extname(path) === '.json') {
			const obj = JSON.parse(data);
			return obj;
		}
	};
	const obj1 = objFromFormat(filepath1, data1);
	const obj2 = objFromFormat(filepath2, data2);
	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);
	const allKeys = [...keys1, ...keys2];
	const uniqSortedKeys = _.uniq(allKeys).sort();
	const result = uniqSortedKeys.map((item) => {
		if (_.has(obj1, item) && _.has(obj2, item)) {
			if (obj1[item] === obj2[item]) {
				return `\n    ${item}: ${obj1[item]}`;
			} else {
				return `\n  - ${item}: ${obj1[item]}\n  + ${item}: ${obj2[item]}`;
			}
		}
		if (!(_.has(obj1, item))) {
			return `\n  + ${item}: ${obj2[item]}`;
		}
		if (!(_.has(obj2, item))) {
			return `\n  - ${item}: ${obj1[item]}`;
		}	
	});
	result.unshift('{');
	result.push('\n}');
	return result.join('');
};
export default gendiff;