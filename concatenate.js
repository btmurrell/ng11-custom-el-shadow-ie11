const fs = require('fs-extra');
const concat = require('concat');

concatenate = async (type) =>{
  await fs.ensureDir('output/scripts');
  ['es5', 'es2015'].forEach(async type => {
    const files = [
      `./dist/fu-bar/runtime-${type}.js`,
      `./dist/fu-bar/polyfills-${type}.js`,
      // `./dist/fu-bar/scripts.js`,
      `./dist/fu-bar/main-${type}.js`
    ];
    console.log(`writing output/scripts/fu-form-${type}.js`);
    await concat(files, `output/scripts/fu-form-${type}.js`);
  
  })
}

concatenate();
