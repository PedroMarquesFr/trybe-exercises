#!/bin/bash
echo 'criando arquivo';sleep 1
touch 'novo_arquivo.txt'; echo "arquivo criado"
echo 'escrevendo no arquivo' > novo_arquivo.txt;sleep 1
echo 'criando diretorio'; mkdir novo_diretorio; sleep 1
echo 'enviando novo arquivo para o diretorio'; cp  novo_arquivo.txt ./novo_diretorio
echo 'fim'