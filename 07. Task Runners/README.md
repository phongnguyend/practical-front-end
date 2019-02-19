### Install Gulp:
```js
npm install gulp -g
npm install gulp --save-dev
```
### Install Babel:
```js
npm install @babel/core --save-dev
npm install @babel/preset-env --save-dev
npm install @babel/register --save-dev
```
### Install Gulp plugins:
```js
npm install gulp-babel --save-dev
npm install gulp-uglify --save-dev
npm install gulp-concat --save-dev
npm install gulp-clean --save-dev
npm install gulp-eslint --save-dev
npm install gulp-sass --save-dev
```

### gulpfile.babel.js
```js
import gulp from "gulp";
import babel from "gulp-babel";
import clean from "gulp-clean";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import sass from "gulp-sass";
import eslint from "gulp-eslint";

gulp.task("clean", function() {
  return gulp.src("build").pipe(clean());
});

gulp.task("build:styles", function() {
  return gulp
    .src("source/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/styles"));
});

gulp.task("build:js", function() {
  return gulp
    .src("source/**/*.js")
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "build:styles", "build:js"));

gulp.task("lint", () => {
  return gulp
    .src(["source/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
```
