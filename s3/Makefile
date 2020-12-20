-include ../secrets.mk
include ../variables.mk

deploy-infra: deploy-bucket deploy-website
destroy-infra: destroy-bucket

deploy-bucket:
	aws s3 mb s3://${BUCKET}

destroy-bucket:
	aws s3 rb s3://${BUCKET}

deploy-website:
	aws s3 website s3://${BUCKET} --index-document index.html --error-document error.html

deploy:
	aws s3 sync --acl public-read ../${BUILD_DIR} s3://${BUCKET}

browse:
	open http://${BUCKET}.s3-website-${AWS_REGION}.amazonaws.com

url:
	@echo http://${BUCKET}.s3-website-${AWS_REGION}.amazonaws.com
