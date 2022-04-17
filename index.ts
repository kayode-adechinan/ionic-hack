import fs from "fs";
import path from "path";

const update = async () => {
  const startColor = "#ff1b49";
  const packageName = "io.ionic.starter".replaceAll(".", "/");

  const bgGradient = fs.readFileSync(path.resolve(`content/bg_gradient.xml`));
  const bgGradientContent = bgGradient
    .toString()
    .replaceAll("#ff1b49", startColor);

  const splashBackground = fs.readFileSync(
    path.resolve(`content/splash_background.xml`)
  );

  const splashBackgroundContent = splashBackground.toString();

  const styles = fs.readFileSync(path.resolve(`content/styles.xml`));

  const stylesContent = styles.toString().replaceAll("#ff1b49", startColor);

  const splashScreenActivity = fs.readFileSync(
    path.resolve(`content/SplashScreenActivity.java`)
  );

  const splashScreenActivityContent = splashScreenActivity.toString();

  const androidManifest = fs.readFileSync(
    path.resolve(`content/AndroidManifest.xml`)
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
