let CrudeTimingPlugin = function() {};

CrudeTimingPlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', (compilation) => {
        let startOptimizePhase;
        compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
            startOptimizePhase = Date.now();
            callback();
        });
        compilation.plugin('after-optimize-chunk-assets', () => {
            const Duration = Date.now() - startOptimizePhase;
            console.log(`optimize-chunk-asset phase duration: ${Duration}`)
        })
    })

}
module.exports = CrudeTimingPlugin;