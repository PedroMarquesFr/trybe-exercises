pm2 start src/index.js --name cookmastar

pm2 l
pm2 show [id]

pm2 stop [id | name]
pm2 delete [id | name]

pm2 restart [id | name] --n e mt bom pq se alguem estiver usando o app no momento do restart nao vai conseguir acessar
pm2 reload [is | name] -- eh melhor pq ele cria uma copia e quando a copia tiver pronta ele substitui pela outra

pm2 monit
pm2 monitor