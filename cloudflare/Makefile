-include ../secrets.mk
include ../variables.mk

dev:
	cd ../worker && wrangler dev

clean:
	-rm ../worker/wrangler.toml
	-rm ../worker/routesData.js
	-rm ../worker/env.js

../worker/routesData.js:
	echo 'export default $(shell cat ../package.json | jq --raw-output '.reactSnapshot.include | @json')' > $@

../worker/env.js:
	envsubst < env.js.template > $@

../worker/wrangler.toml:
	envsubst < wrangler.toml.template > $@

deploy: export ENVIRONMENT=production
deploy: clean ../worker/wrangler.toml ../worker/env.js ../worker/routesData.js
	cd ../worker && wrangler publish --env production
