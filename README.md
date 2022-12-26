1. npm init -y
2. npm install typescript --save-dev
3. npm install @types/node --save-dev
4. npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
5. npx tsc

cold reloading:

npm install --save-dev ts-node nodemon
nodemon.json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}
