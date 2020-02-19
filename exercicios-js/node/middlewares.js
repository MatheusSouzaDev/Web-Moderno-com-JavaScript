const passo1 = (ctx, next) => {
	ctx.valor1 = 'mid1'
	next()
}

const passo2 = (ctx, next) => {
	ctx.valor2 = 'mid2'
	next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
	const execPasso = indice => {
		middlewares && indice < middlewares.length &&
			middlewares[indice](ctx, () => execPasso(indice + 1))
	}
	execPasso(0)
}

const ctx = {}
const ctx1 = {}
const ctx2 = {}
const ctx3 = {}

exec(ctx, passo1, passo2, passo3)
exec(ctx1, passo2, passo1, passo3)
exec(ctx2, passo1, passo3)
exec(ctx3, passo3, passo1, passo2)

console.log(ctx)
console.log(ctx1)
console.log(ctx2)
console.log(ctx3)