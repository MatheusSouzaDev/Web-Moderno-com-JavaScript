const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			comments: false,
			presets: ['env'] // pega a versão mais recente do js
		}))
		.pipe(uglify()) // formata o js em uma linha
		.on('error', err => console.log(err))
		.pipe(concat('codigo.min.js')) // pega o código gerado em um arquivo
		.pipe(gulp.dest('build'))
}

function fim(cb) {
	console.log('Fim!!!')
	return cb()
}

exports.default = series(transformacaoJS, fim)