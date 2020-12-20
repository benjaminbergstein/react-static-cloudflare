clean:
	rm -rf build

build:
	yarn build

deploy: clean build
	${MAKE} -C s3 deploy
	${MAKE} -C cloudflare deploy
