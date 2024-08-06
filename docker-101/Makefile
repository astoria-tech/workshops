# Makefile for building and running the Docker app

# Variables
BACKEND_IMAGE_NAME = docker-101-backend
BACKEND_CONTAINER_NAME = docker-101-backend-container
FRONTEND_IMAGE_NAME = docker-101-frontend
FRONTEND_CONTAINER_NAME = docker-101-frontend-container
BACKEND_PORT = 8080
FRONTEND_PORT = 80

# Build the Docker images
build-backend:
	docker build -t $(BACKEND_IMAGE_NAME) ./node-backend

build-frontend:
	docker build -t $(FRONTEND_IMAGE_NAME) ./react-frontend

# Run the Docker containers
run-backend:
	docker run -p $(BACKEND_PORT):$(BACKEND_PORT) --name $(BACKEND_CONTAINER_NAME) $(BACKEND_IMAGE_NAME)

run-frontend:
	docker run -p $(FRONTEND_PORT):$(FRONTEND_PORT) --name $(FRONTEND_CONTAINER_NAME) $(FRONTEND_IMAGE_NAME)

# Stop the Docker containers
stop-backend:
	docker stop $(BACKEND_CONTAINER_NAME)

stop-frontend:
	docker stop $(FRONTEND_CONTAINER_NAME)

# Remove the Docker containers
clean-backend:
	docker rm $(BACKEND_CONTAINER_NAME)

clean-frontend:
	docker rm $(FRONTEND_CONTAINER_NAME)

# Remove the Docker images
clean-backend-image:
	docker rmi $(BACKEND_IMAGE_NAME)

clean-frontend-image:
	docker rmi $(FRONTEND_IMAGE_NAME)

# Build the Docker Compose services
compose-build:
	docker compose build

# Run the Docker Compose services
compose-up:
	docker compose up

# Get a shell in the running Docker Compose container
compose-shell:
	docker compose exec backend /bin/sh

# Get a shell in the running Docker containers without Compose
shell-backend:
	docker exec -it $(BACKEND_CONTAINER_NAME) /bin/sh

shell-frontend:
	docker exec -it $(FRONTEND_CONTAINER_NAME) /bin/sh