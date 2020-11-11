#!/bin/bash
if [ -d $1 ]
    then
        FILES=`ls -l $1 | wc -l`
        echo "o $1 tem $FILES arquivos"              
    else
        echo " o argumento $1 nao eh um diretorio"
fi
