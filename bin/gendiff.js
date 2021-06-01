#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
const program = new Command();
program
	.description('Compares two configuration files and shows a difference.')
	.version('0.0.1')
	.helpOption('-h, --help', 'output usage information')
	.option('-f, --format [type]',  'output format')
	.arguments('<filepath1> <filepath2>')
	.action((filepath1, filepath2) => {
    const path1 = readFileSync(resolve(cwd(), filepath1));
		const path2 = readFileSync(resolve(cwd(), filepath2));
		const data1 = JSON.parse(path1);
		const data2 = JSON.parse(path2);
		console.log(resolve(cwd(), filepath1));
		console.log(resolve(cwd(), filepath2));
		console.log(data1);
		console.log(data2);
  });
program.parse(process.argv);

