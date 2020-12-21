include ./secrets.mk

clean:
	rm -rf build

build:
	yarn build

deploy-infra:
	${MAKE} -C s3 deploy-infra

browse:
	open https://${DOMAIN}

deploy: clean build
	${MAKE} -C s3 deploy
	${MAKE} -C cloudflare deploy
