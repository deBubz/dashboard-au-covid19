#!/bin/bash

do_react() {
    cd frontend;
    npm i;

    npm run build;
}

do_express() {
    cd backend;
    npm i;
}

do_react &
echo "OK REACT DONE"
echo ""

do_express &
echo "OK EXPRESS DONE"
echo ""

wait
echo "DONE"

