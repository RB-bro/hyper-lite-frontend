const rollup = require('rollup');
const r_babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')


const inputOptions = {
  input:'app/index.js',
  plugins: [
    resolve(),
    commonjs()
  ]
}

const outputOptions =  {file:'dist/bundle.js', format:'cjs'}

async function build() {
  // create a bundle
  try {
    const bundle = await rollup.rollup(inputOptions);
    console.log('imports', bundle.imports); // an array of external dependencies
    console.log('exports', bundle.exports); // an array of names exported by the entry point
    //console.log('modules', bundle.modules); // an array of module objects

    try {
      const { code, map } = await bundle.generate(outputOptions);
      console.log( ' -- Code Compiled -- ' )
      //console.log( code )

      try {
        await bundle.write(outputOptions);

      } catch(err) { 
        console.log("Error with bundle write")
        console.log(err) }

    } catch (err) {
      console.log("Error with code generation")
      console.log(err)
    }

  } catch (err) {
    console.log("Error with bundle creation")
    console.log(err)
  }
}

build();

