//导入工具包require('node_modules里对应的模块')
var gulp = require('gulp');
    connect = require('gulp-connect');

//自定义一个tsetless任务（自定义任务名称）
gulp.task('less', function () {
    gulp.src(['./partice9.less'])
        .pipe(gulp.dest(''))
        .pipe(connect.reload(''));
});
 
//定义html任务
gulp.task('html', function () {

    gulp.src('./partice9.html')
        .pipe(gulp.dest(''))
        .pipe(connect.reload());

});

//定义livereload任务
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

//定义监听任务
gulp.task('watch', function() {
    gulp.watch('./*.less', ['less']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['less', 'html', 'connect', 'watch'], function() {
    // content
});


