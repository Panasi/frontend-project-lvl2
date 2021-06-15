### Hexlet tests and linter status:
[![Actions Status](https://github.com/Panasi/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Panasi/frontend-project-lvl2/actions)
[![Linter and Jest](https://github.com/Panasi/frontend-project-lvl2/actions/workflows/linter-jest-check.yml/badge.svg)](https://github.com/Panasi/frontend-project-lvl2/actions/workflows/linter-jest-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/47ca2f2dc3bd1b738111/maintainability)](https://codeclimate.com/github/Panasi/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/47ca2f2dc3bd1b738111/test_coverage)](https://codeclimate.com/github/Panasi/frontend-project-lvl2/test_coverage)

### Gendiff installation and launching demo:
[![asciicast](https://asciinema.org/a/420468.svg)](https://asciinema.org/a/420468)

Description
------------
```
This program compares two configuration files like JSON or YAML and shows a difference. 
```

Installation
------------

### Gendiff module for node.js

```
npm install 'https://github.com/Panasi/frontend-project-lvl2'
```


### CLI executable

If you want to use Gendiff from CLI, install gendiff globally:

```
npm install -g 'https://github.com/Panasi/frontend-project-lvl2'
```

Usage
------------

```
gendiff [options] <filepath1> <filepath2>

Arguments:
  filepath1            JSON, YAML or YML file path
  filepath2            JSON, YAML or YML file path

Optional arguments:
  -h, --help           Show help message and exit.
  -v, --version        Show program's version number and exit.
  -f, --format [type]  Selection of the output format. Those format types are available: stylish, plain, json. The default format is stylish.
```