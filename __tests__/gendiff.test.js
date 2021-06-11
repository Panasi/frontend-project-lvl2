import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (fileName) => join(__dirname, '..', '__fixtures__', fileName);

test('gendiffStylish', async () => {
  const diff = readFileSync(getFixturePath('diffStylish.txt'), 'utf-8');
  const result1 = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
  expect(result1).toEqual(diff);
  const result2 = gendiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'), 'stylish');
  expect(result2).toEqual(diff);
});
test('gendiffPlain', async () => {
  const diff = readFileSync(getFixturePath('diffPlain.txt'), 'utf-8');
  const result3 = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
  expect(result3).toEqual(diff);
  const result4 = gendiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'), 'plain');
  expect(result4).toEqual(diff);
});
test('gendiffJson', async () => {
  const diff = readFileSync(getFixturePath('diffJson.txt'), 'utf-8');
  const result5 = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json');
  expect(result5).toEqual(diff);
  const result6 = gendiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'), 'json');
  expect(result6).toEqual(diff);
});
