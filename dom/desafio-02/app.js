
new Vue({
    el:'#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Alertado')
        },
        alteraValor(event){
            this.valor = event.target.value
        }
    }
})