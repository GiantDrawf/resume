// 优先跑脚本
const exec = require("child_process").exec,
	shell = "./bash.sh";
exec(shell);
const gulp = require("gulp"),
	less = require("gulp-less"),
	cleanCss = require("gulp-clean-css"),
	imagemin = require("gulp-imagemin"),
	browserSync = require("browser-sync"),
	port = process.env.PORT || 6323,
	child_process = require("child_process"),
	filePath = [
		`${__dirname}/src/less/**/*.less`,
		`${__dirname}/src/images/*`
	],
	serverFile = [
		`${__dirname}/app.js`,
		`${__dirname}/resume.json`
	],
	tasks = ["less", "image"];
gulp.task("less", () => {
	return gulp.src(`${__dirname}/src/less/main.less`)
	 	.pipe(less())
	 	.pipe(cleanCss())    // 上线后打开
	 	.pipe(gulp.dest("./build/css"))
	 	.pipe(browserSync.reload({stream: true}));
});

gulp.task("image", () => {
	return gulp.src(filePath[1])
		.pipe(imagemin())
		.pipe(gulp.dest("./build/images"));
});

gulp.task("server", tasks, () => {
	browserSync.init({
    	proxy: `http://localhost:${port}/`
  	});
});


gulp.task("watch", () => {
	gulp.watch(filePath, tasks);
	gulp.watch(serverFile).on("change", () => {
		exec(shell);
	})
});

gulp.task("default", ["server", "watch"]);