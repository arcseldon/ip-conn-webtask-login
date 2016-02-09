#!/usr/bin/env bash

PROJECT_PATH=`pwd`
PROJECT_NAME=`basename "$PROJECT_PATH"`
NODE_MODULES="$PROJECT_PATH/node_modules"
cd ~/Library/Preferences/WebStorm11/scratches
echo "Attempting to set up symlink for project '$PROJECT_NAME'"
echo "PROJECT_PATH: '$PROJECT_PATH'"
echo "NODE_MODULES: '$NODE_MODULES'"
ln -s $NODE_MODULES node_modules
cd -
echo "Symlink to '$NODE_MODULES' for project '$PROJECT_NAME' successfully completed"


