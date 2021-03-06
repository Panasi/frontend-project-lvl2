install:
	npm ci
	
publish:
	npm publish --dry-run
    
lint:
	npx eslint .

test:
	npm test

test-watch:
	npm test -- --watchAll

test-coverage:
	npm test -- --coverage --coverageProvider=v8