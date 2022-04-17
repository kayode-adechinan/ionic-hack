#!/usr/bin/env node

import fs from "fs";
import path from "path";

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
//const BASE_PATH = "node_modules/ionic-hack"

const update = async () => {
  const startColor = argv.startColor || "#ff1b49";
  const identifier = argv.identifier || "io.ionic.starter";
  const packageName = identifier.replaceAll(".", "/");

  const bgGradient = fs.readFileSync(
    path.resolve(__dirname, `content/bg_gradient.xml`)
  );
  const bgGradientContent = bgGradient
    .toString()
    .replaceAll("#ff1b49", startColor);

  const splashBackground = fs.readFileSync(
    path.resolve(__dirname, `content/splash_background.xml`)
  );

  const splashBackgroundContent = splashBackground.toString();

  const styles = fs.readFileSync(path.resolve(__dirname, `content/styles.xml`));

  const stylesContent = styles.toString().replaceAll("#ff1b49", startColor);

  const splashScreenActivity = fs.readFileSync(
    path.resolve(__dirname, `content/SplashScreenActivity.java`)
  );

  const splashScreenActivityContent = splashScreenActivity.toString();

  const androidManifest = fs.readFileSync(
    path.resolve(__dirname, `content/AndroidManifest.xml`)
  );

  const androidManifestContent = androidManifest.toString();

  fs.writeFileSync(
    "android/app/src/main/res/drawable/bg_gradient.xml",
    bgGradientContent
  );

  fs.writeFileSync(
    "android/app/src/main/res/drawable/splash_background.xml",
    splashBackgroundContent
  );

  fs.writeFileSync("android/app/src/main/res/values/styles.xml", stylesContent);

  fs.writeFileSync(
    `android/app/src/main/java/${packageName}/SplashScreenActivity.java`,
    splashScreenActivityContent
  );

  fs.writeFileSync(
    `android/app/src/main/AndroidManifest.xml`,
    androidManifestContent
  );

  console.log("done");
};

update();
