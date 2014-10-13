test:
	@node node_modules/mocha/bin/mocha --harmony --check-leaks --recursive --reporter List --timeout 10000

.PHONY: test test-cov