var pkg=require('../package.json')
const babel=require('rollup-plugin-babel')

var version =pkg.version;

var banner =`/*!
 * ${pkg.name} ${version}
 * Licensed under MIT
 */
`

function getCompiler(opt){
    return babel({
       babelrc:false,
       presets:[[
        '@babel/preset-env',{
            targets:{
                browsers:'last 2 versions, > 1%, ie >=8, Chrome >= 45, safari >= 10',
                node:'0.12'
            },
            modules:false,
            loose:true
        }
       ]],
      
       exclude:'node_modules/**',
      
    })
}

exports.banner=banner;
exports.getCompiler=getCompiler;