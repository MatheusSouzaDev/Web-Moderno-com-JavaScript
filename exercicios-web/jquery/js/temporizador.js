(function ($) {
    $.fn.temporizador = function (opcoes) {
        // extend se não passar valor ele assume o do extend
        const opcoesFinais = $.extend({
            mensagem: "Em breve!",
            horario: "23:59:59"
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo)

        let temporizador = setInterval(() => {
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diffMi = alvo.getTime() - agora.getTime()

            if (diffMi >= 0) {
                const diff = regex.exec(new Date(diffMi).toISOString())
                // console.log(diff)

                horaDezena.html(diff[1][0])
                horaUnidade.html(diff[1][1])
                minutoDezena.html(diff[2][0])
                minutoUnidade.html(diff[2][1])
                segundoDezena.html(diff[3][0])
                segundoUnidade.html(diff[3][1])
            } else {
                clearInterval(temporizador)
            }

        }, 500)

        return this
    }
})(jQuery)