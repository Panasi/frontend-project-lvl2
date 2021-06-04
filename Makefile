install:
	npm ci
	
publish:
	npm publish --dry-run
    
lint:
	npx eslint .

jest:
	npm test