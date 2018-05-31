NPM_BIN = `which npm`

.PHONY: install
install:
	$(NPM_BIN) install

.PHONY: test
test:
	$(NPM_BIN) test
