- https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

- npm login
- npm publish

- https://stackoverflow.com/questions/57509855/expose-a-global-command-to-run-a-script-from-node-package

npm pack (Optional.required only for local development)

npm install -g ionic-hack-1.0.0.tgz

./node_modules/.bin/ionic-hack

or add

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"ionic:splash": "ionic-hack"
},

called ionic:splash script from ionic-hack package

npm run ionic:splash -- --startColor=#7FFF00 --identifier=io.ionic.starter
