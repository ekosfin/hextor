#!/bin/bash
# Only for development environment.
# Edit from docker-compose.yml directly if needed.
# THESE VALUES SHOULD BE UPDATED BY YOU like the api_key to app_id as the system does not work othervise
# Values will be passed to docker containers

API_KEY=""
AUTH_DOMAIN=""
PROJECT_ID=""
STORAGE_BUCKET=""
MESSAGING_SENDER_ID=""
APP_ID=""

DB_USER="root"
DB_PASS="testing"


export API_KEY
export AUTH_DOMAIN
export PROJECT_ID
export STORAGE_BUCKET
export MESSAGING_SENDER_ID
export APP_ID
export DB_USER
export DB_PASS

mkdir -p secrets

echo $API_KEY > ./secrets/api_key.txt
echo $AUTH_DOMAIN > ./secrets/auth_domain.txt
echo $PROJECT_ID > ./secrets/project_id.txt
echo $STORAGE_BUCKET > ./secrets/storage_bucket.txt
echo $MESSAGING_SENDER_ID > ./secrets/messanging_sender_id.txt
echo $APP_ID > ./secrets/app_id.txt
echo $DB_USER > ./secrets/db_user.txt
echo $DB_PASS > ./secrets/db_pass.txt