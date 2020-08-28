#!/bin/bash

if [ -d $1 ]
    then
        echo "$1 eh um diretorio"
fi
if [ -f $1 ]
    then
        echo "$1 eh um arquivo comum"
fi
FILES=`ls -l $1`

echo "$FILES"