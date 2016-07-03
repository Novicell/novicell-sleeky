var notifier = require('node-notifier');
var argv = require('yargs').argv;

module.exports = (function () {
    var projectName = "novicell-sleeky";

    var projectPath = "./";
    var bowerPath = projectPath + "vendor/bower";
    var distPath = projectPath + "dist";
    var cleanPaths = [distPath];

    return {
        // ------------- Bundles -------------
        bundles: [
            {
                name: "vendor",
                ignorePlugins: ["jscs", "jshint", "watch"], // add "minify", to ignore minifaction on a bundle
                scripts: [
                    bowerPath + "/js-cookie/src/js.cookie.js",
                    bowerPath + "/jquery/dist/jquery.js"
                ]
            },
            {
                name: "sleeky",
                ignorePlugins: ["jscs"],
                scripts: [
                    projectPath + "src/novicell.sleeky.js"
                ],
                styles: [
                    projectPath + "src/novicell.sleeky.less"
                ]
            }
        ],


        // ------------- Styles -------------
        stylesDist: distPath,
        stylesVendorPrefixes: [
            "last 2 version",
            "safari 5",
            "ie 9",
            "opera 12.1",
            "ios 8",
            "android 4"
        ],

        // ------------- Scripts -------------
        scriptsDist: distPath,

        // ------------- Copy on build --------
        buildCopy: [{
            from: projectPath + "src/**/*.html",
            to: distPath
        }],

        // ------------- Watch -------------
        watchScripts: [
            projectPath + "src/**/*.js",
            projectPath + "vendor/**/*.js"
        ],
        watchStyles: [
            projectPath + "src/**/*.less",
            projectPath + "vendor/**/*.{less, scss}"
        ],
        watchHtml: [
            projectPath + "src/**/*.html"
        ],

        // ------------- Tasks -------------
        loadTasks: [
            "bower", "styles", "scripts",
            "copy", "watch", "build",
        ],
        buildTasks: [
            "styles", "scripts", "copy",
        ],

        // ------------- Return Paths -------------
        projectPath: projectPath,
        bowerPath: bowerPath,
        cleanPaths: cleanPaths,

        // ---------- Errorhandler ------
        errorHandler: function(taskName)
        {
            return function (e) {
                notifier.notify({
                    "title": taskName,
                    "message": "An error occured in the " + e.plugin + " plugin."
                });
                console.log(e.message);
                this.emit("end");
            };
        }
    }
})();
