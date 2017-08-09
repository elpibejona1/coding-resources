var gulp = require('gulp');
var watch = require('gulp-watch');
var fileInclude = require('gulp-file-include');

gulp.task('fileInclude', function(){
	return gulp
		.src('_html/**/*.html')
		.pipe(fileInclude({
			prefix: '@@',
  			basepath: '@file'
		}))
		.pipe(gulp.dest('./'))
});

gulp.task('watch', function(){
	gulp.watch('_includes/*.html', ['fileInclude']);
	gulp.watch('_images/**/*.svg', ['fileInclude']);
	gulp.watch('_html/**/*.html', ['fileInclude']);
});