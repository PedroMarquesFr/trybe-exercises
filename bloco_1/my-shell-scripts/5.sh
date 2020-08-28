#!/bin/bash
read -p "digite um diretorio" CAMINHO
if [ -d $CAMINHO ]
    then
        echo "$CAMINHO eh um diretorio"
fi
if [ -f $CAMINHO ]
    then
        echo "$CAMINHO eh um arquivo comum"
fi
FILES=`ls -l $CAMINHO`

echo "$FILES"
