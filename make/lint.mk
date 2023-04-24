lint: node_modules ## Lints the source using prettier, eslint and svelte-check.
	./node_modules/.bin/prettier --check $(SRC_DIR) $(TEST_DIR)
	./node_modules/.bin/eslint -c .eslintrc.js $(SRC_DIR) $(TEST_DIR) --no-error-on-unmatched-pattern

fix: node_modules ## Fixes source code problems with prettier, eslint and pre-commit.
	./node_modules/.bin/prettier --write $(SRC_DIR) $(TEST_DIR)
	./node_modules/.bin/eslint -c .eslintrc.js $(SRC_DIR) $(TEST_DIR) --no-error-on-unmatched-pattern --fix || true

.PHONY: lint fix