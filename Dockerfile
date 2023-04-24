from node:18-alpine as compile-image

run apk update && apk add make 
run npm install --global pnpm

workdir /build
copy make ./make
copy Makefile package.json pnpm-lock.yaml ./
run make node_modules
copy tsconfig.json ./
copy src ./src
run make build

from node:18-alpine

workdir /app
copy --from=compile-image /build/dist ./dist/
entrypoint ["node", "/app/dist/main.js"]