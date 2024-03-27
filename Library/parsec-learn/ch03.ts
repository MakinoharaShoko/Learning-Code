let { parse, stringify } = require('scss-parser')

// Create an AST from a string of SCSS
let ast = parse(`
.hello { 
    color: red; 
}

.world {
    color: blue; 
    padding: 10px 10px 10px 10px;
    border: 1px solid #000;
    &:hover {
         color: yellow; 
        } 
}
`)
// Convert the modified AST back to SCSS
let scss = stringify(ast) // .world { color: $red; }