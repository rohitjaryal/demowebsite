grunt.registerTask('deploysite', 'Deploying website', function (name) {
    //port = grunt.option("port");
    var done = this.async();
    //DEBUG=myapp:* npm start
    // set DEBUG=myapp:* & npm start
});


function runScript(scriptPath, childArgs, callback) {
    // keep track of whether callback has been invoked to prevent multiple invocations
    var invoked = false;
    try {
        var process = childProcess.fork(scriptPath, childArgs);

        // listen for errors as they may prevent the exit event from firing
        process.on('error', function (err) {
            if (invoked) return;
            invoked = true;
            callback(err);
        });

        // execute the callback once the process has finished running
        process.on('exit', function (code) {
            if (invoked) return;
            invoked = true;
            var err = code === 0 ? null : new Error('exit code ' + code);
            callback(err);
        });
    }
    catch (err) {
        console.log('Error occurred while executing Grunt task! ' + err);
    }
}