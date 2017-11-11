var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
concat = require('gulp-concat'),
gulpSequence = require('gulp-sequence'),
reload      = browserSync.reload,
jsVendors = require('./package.json').jsDependecies,
sass = require('gulp-sass');

gulp.task('js-vendors', function() {
    var vendors = Object.keys(jsVendors).map(function(name) {
        return name + '/' + jsVendors[name];
    });
    return gulp.src(vendors, { cwd: './node_modules' })
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('js-compress', function() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'));
});
gulp.task('js', function() {
    return gulp.src("./src/assets/js/**/*.js")
        .pipe(gulp.dest("./public/assets/js"));
    });

gulp.task('sass', function () {
return gulp.src("./src/assets/stylesheets/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/assets/stylesheets"))
    .pipe(browserSync.stream());
});

gulp.task('css', function () {

return gulp.src('./src/assets/stylesheets/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([require('precss'), require('autoprefixer')]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/assets/stylesheets'));
});

gulp.task('html', function() {
return gulp.src("./src/**/*.html")
    .pipe(gulp.dest("./public/"));
});

gulp.task('serve', function () {
browserSync.init({
    open: false,
    reloadDelay: 1000,
    server: {
        baseDir: "./public"
    }
});
});

gulp.watch("./src/assets/stylesheets/**/*.scss", ['sass']);
gulp.watch("./src/assets/stylesheets/**/*.css", ['css']).on('change', browserSync.reload);
gulp.watch("./src/assets/js/*.js", ['js']).on('change', browserSync.reload);
gulp.watch("./src/*.html", ['html']).on('change', browserSync.reload);

gulp.task('default', gulpSequence('sass','css','js-vendors','html','js', 'serve', ));
gulp.task('public', gulpSequence('sass','css', 'js-vendors', 'html', 'js-compress', 'serve', ));