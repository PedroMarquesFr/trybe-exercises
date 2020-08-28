#!/bin/bash

echo "DIGITE A PORTA?";read PORTA
if [ $PORTA -eq  7 ]
then
    echo "ok"
else
    echo "Porta nao encontrada"
fi