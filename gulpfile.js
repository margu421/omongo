'use strict';

var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
var plug = require('gulp-nodemon')();


var source = [
    './client/public/**/*module*.js',
    './client/public/**/*.js'
];

gulp.task('start', function () {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    });
    console.log('Started with Gulp Nodemon');
});

gulp.task('ngAnnotateTest', function(){
   return gulp
       .src(source)
       .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
       .pipe(plug.rename(function (path) {
           path.extname= '.annotated.js';
       }))
       .pipe(plug.uglify({mangle: true}))
       .pipe(gulp.dest('./build'));

});

gulp.task('hint', function(){
    return gulp
        .src(source)
        .pipe(plug.jshint('./.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function(){
    return gulp
        .watch(source,['hint'] )
        .on('change', function (event) {
            console.log('*** File' + event.path + ' was' + event.type );
        });
});