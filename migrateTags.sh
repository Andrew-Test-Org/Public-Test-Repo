#!/bin/bash
git fetch origin
git tag -l 'v1.0.4' | \
while read t; do
    n=$(echo $t | tr -d 'v')

    if [[ "$n" != "$t" ]]; then
        git tag $n $t
        git tag -d $t
    fi
done

git push --tags --prune origin refs/tags/*
