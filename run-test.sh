npm run build
npm pack

cd ./test

rm -rfd node_modules package-lock.json
npm i
npm start