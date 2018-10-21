var gulp = require('gulp');
var electron = require('electron-connect').server.create();

gulp.task('default', () => {
    // 启动。
    electron.start();

    // 后端重启。
    gulp.watch([
        './main/*.js',
        './main/*/*.js',
    ], electron.restart);

    // 前端刷新。
    gulp.watch([
        './asset/*.html',
        './asset/styles/*.css',
        './asset/scripts/*.js',
    ], electron.reload);
});