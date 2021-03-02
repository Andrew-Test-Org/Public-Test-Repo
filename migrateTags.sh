#!/bin/bash
git fetch origin
git tag -l | \
while read t; do
    n=$(echo $t | sed "s?\.?/?g")

    if [[ "$n" != "$t" ]]; then
        git tag $n $t
        git tag -d $t
    done
done

git push --tags --prune origin refs/tags/*
