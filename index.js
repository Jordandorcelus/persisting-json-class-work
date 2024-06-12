const { createRandomProduct, randomProductFactory } = require('./products');
const {writeJsonFile, readJsonFile} = require('./helpers');

const run = () => {
    let products = readJsonFile("./data", "products.json");
        // console.log(products)
    if(process.argv[3]) {
        // console.log(randomProductFactory(process.argv[3]));
        const productoToAdd = randomProductFactory(process.argv[3]);
        products.push(...productoToAdd)
        writeJsonFile('./data', "products.json", products)
    } else {
        const newProduct = createRandomProduct();
        products.push(newProduct)
        writeJsonFile('./data', 'products.json', products)
    }
}

// run();
run();