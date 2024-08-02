#!/bin/bash

# Function to delete node_modules folders
delete_node_modules() {
    local dir="$1"
    
    # Find all node_modules directories and delete them
    find "$dir" -name "node_modules" -type d -prune -exec rm -rf {} +
    
    echo "Deletion of node_modules folders complete."
}

# Check if a directory path is provided
if [ $# -eq 0 ]; then
    echo "Please provide a directory path."
    echo "Usage: $0 /path/to/directory"
    exit 1
fi

# Check if the provided path is a directory
if [ ! -d "$1" ]; then
    echo "Error: '$1' is not a valid directory."
    exit 1
fi

# Call the function with the provided directory
delete_node_modules "$1"
