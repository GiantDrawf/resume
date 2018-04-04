#!/bin/bash

# 运行项目
export NODE_DEV=dev && export PORT=6323
pkill node
supervisor -e "json" app.js
