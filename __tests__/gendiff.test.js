import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (fileName) => join(__dirname, '..', '__fixtures__', fileName);

test('gendiff', async () => {
  const result = readFileSync(getFixturePath('result.txt'), 'utf-8');
  const diff1 = gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(diff1).toEqual(result);
  const diff2 = gendiff(getFixturePath('file3.yaml'), getFixturePath('file4.yml'));
  expect(diff2).toEqual(result);
});
