const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css()  {
    return gulp
    .src ('scss/app.scss')
    .pipe(autoprefixer({
        overrrideBrowserslist : ['las 2 versions'],
        cascade: false
    }))
    .pipe( sass ( {
        outputstyle: 'expanded', //nested, compact, compressed
    }))
    .pipe ( gulp.dest('css'));
}

// Funcion para que gulp escuche cambios en los archivos...
function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html');
    gulp.watch('div.html');
}

// registrar funciones como tareas
// Con parallel se indica que las tareas corran al mismo tiempo, de decir, de manera asíncrona

gulp.task('css',css);
gulp.task('watch', gulp.parallel(watchFiles));