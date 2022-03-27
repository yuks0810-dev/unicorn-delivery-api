include .env

dc-dev-mysql:
	docker-compose down
	docker-compose build mysql
	docker-compose up -d mysql