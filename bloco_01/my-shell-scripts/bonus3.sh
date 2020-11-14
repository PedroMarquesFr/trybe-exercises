#!/bin/bash

ARCHIVES=`ls`

for TOP in $ARCHIVES
do
    if [ $TOP=='.png' ]
        then
            echo "-$TOP"
    fi    
done