#! /bin/bash

if [ $# -ne 1 ]; then
  echo "You must include exactly one parameter."
  echo "Please provide the docker hub repository this project should be published to."
  exit 1
fi

repo=$1

# Removed build command since image and container were already built
# docker build -t ex05 -f Dockerfile .

# Tag existing 'ex05' as 'ice02'
# Removed version number b/c tagging as latest
docker tag ex05:latest $repo/ice02:latest

# Push image to repo
docker push $repo/ice02:latest

# To an external repo
# docker push publicrepository.com/$repo/web-server:latest

# Or build and push at the same time
# docker build --push -t $repo/web-server -f Dockerfile .

# The command I ran to publish to my repo (after making it executable)
# ./publish.sh sheiladuong