var gulp = require('gulp');

gulp.task('runTests', function () {
    var mocha = require('gulp-mocha');
    var testResults = mocha({reporter:'nyan'});
    testResults.on('error',function() {
        testResults.end();
    });

    gulp.src('./src/*.js', {read:false})
        .pipe(testResults);
});

gulp.task('default', function() {
    gulp.watch('./src/*.js', ['runTests'])
});