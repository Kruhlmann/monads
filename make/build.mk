publish: build
	pnpm publish

build: dist/.build

dist/.build: $(TS_SOURCES) node_modules tsconfig.json
	./node_modules/.bin/tsc
	touch dist/.build

.PHONY: build