define('config',function(require,exports,module){
    require('plugn/lithe-cache');
    module.exports = {
        alias:{
            'dir':'mods/dir/',
            'g':'mods/a/g.js',
            'h':'mods/b/h.js',
            'i':'mods/c/i.js'
        }
    };
});
