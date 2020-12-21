-include ../secrets.mk
include ../variables.mk

dev:
	cd ../worker && wrangler dev

clean:
	-rm ../worker/wrangler.toml
	-rm ../worker/env.js

../worker/env.js:
	envsubst < env.js.template > $@

../worker/wrangler.toml:
	envsubst < wrangler.toml.template > $@

deploy: export ENVIRONMENT=production
deploy: clean ../worker/wrangler.toml ../worker/env.js
	cd ../worker && wrangler publish --env production
