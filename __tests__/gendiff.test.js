import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('gendiff', async () => {
  const getFixturePath = (fileName) => join(__dirname, '..', '__fixtures__', fileName);
  const rigth = readFileSync(getFixturePath('result.txt'), 'utf-8');
  expect(gendiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(rigth);
});
