const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const exec = require('child_process').exec;


gulp.task('default', (cb) => {
    exec('npm run styles', (err, stdout, stderr) => {
        if(!err){
            console.log(stdout)
            console.log(stderr)
        } else {
            cb(err)
        }
    })
    gulp.watch('./src/css/**/*.scss', gulp.task('styles'))
    nodemon({
        script:'server.js',
        env: { NODE_ENV: 'development' }
    })
    cb();
})


gulp.task('styles', (cb) => {
    gulp.src('./src/css/**/*.scss')
        .pipe(
            sass({})
            .on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions']
            })
        )
        .pipe(
            gulp.dest('./public/css')
        )
    cb();
})
