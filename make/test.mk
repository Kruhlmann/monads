unit-test: node_modules
	./node_modules/.bin/jest \
		--coverage \
		--passWithNoTests \
		--verbose \
		--ci \
		--reporters=default \
		--reporters=jest-junit \
		--bail

test: unit-test

test-report.xml: unit-test

.PHONY: test unit-test test-report.xml