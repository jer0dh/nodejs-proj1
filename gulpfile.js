var gulp = require('gulp');

var proj = 'proj1';
var path = '../storage/downloads/';

gulp.task('copy', function() {

	return gulp.src(path + '/' + proj + '/**/*').
	pipe(gulp.dest('.'));
});

gulp.task('default', function() {
	gulp.watch(path + '/' + proj + '/**/*', ['copy']);
});


