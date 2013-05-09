#!/bin/bash

urls=(
    http://att.yahoo.com
    http://att.yahoo.com/sports
    http://att.yahoo.com/entertainment
    http://att.yahoo.com/news
    http://att.yahoo.com/finance
    http://att.yahoo.com/living
)


for i in {1..100}; do
    echo
    echo "Iteration ${i}"

    for url in ${urls[@]}; do
        casperjs detect-javascript-errors.js ${url}
    done
done
