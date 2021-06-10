import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (fileName) => join(__dirname, '..', '__fixtures__', fileName);

test('gendiff1', async () => {
  const diff1 = readFileSync(getFixturePath('diff1.txt'), 'utf-8');
  const result1 = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
  expect(result1).toEqual(diff1);
  const result2 = gendiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'), 'stylish');
  expect(result2).toEqual(diff1);
});
test('gendiff2', async () => {
  const diff2 = readFileSync(getFixturePath('diff2.txt'), 'utf-8');
  const result3 = gendiff(getFixturePath('file5.json'), getFixturePath('file6.json'), 'stylish');
  expect(result3).toEqual(diff2);
  const result4 = gendiff(getFixturePath('file7.yaml'), getFixturePath('file8.yml'), 'stylish');
  expect(result4).toEqual(diff2);
});
