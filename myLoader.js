const getOptions = require('loader-utils')['getOptions'];
//import validateOptions from 'schema-utils';

// const schema = {
//     type: 'object',
//     properties: {
//         test: {
//             type: 'string'
//         }
//     }
// }

module.exports =  function (source) {
    const options = getOptions(this);
    console.log("=======自定义loader执行====");
    console.log(options);
    // validateOptions(schema, options, 'Example Loader');

    // 对资源应用一些转换……

    return `export default ${source}`;
};