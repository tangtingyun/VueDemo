function myPlugin(){}

myPlugin.prototype.apply=function (compiler) {
    console.log("==================")
    console.log(compiler)
}
module.exports=myPlugin