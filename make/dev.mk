dev: node_modules
	./node_modules/.bin/tsc-watch --onSuccess 'node dist/main.js'

.PHONY: dev