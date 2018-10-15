NPM_BIN = `which npm`
FUNZZY_BIN = `which funzzy`

.PHONY: install
install:
	$(NPM_BIN) install

.PHONY: test
test:
	$(NPM_BIN) test

.PHONY: watch_test
watch_test:
	$(FUNZZY_BIN)

.PHONY: publish
publish:
	$(NPM_BIN) publish
