#!/bin/bash

cd /SERVICE

# CONFIG_ARGS="s|CONFIG_REACT_APP_API_URL|${CONFIG_REACT_APP_API_URL}|g;\
#         	s|CONFIG_REACT_APP_UPLOAD_API_URL|${CONFIG_REACT_APP_UPLOAD_API_URL}|g;\
# 			s|CONFIG_REACT_APP_NESTED_LEVEL|${CONFIG_REACT_APP_NESTED_LEVEL}|g"

# sed -i -e "$CONFIG_ARGS" .env

yarn global add serve
serve -s -l 8000 build

exec "$@"