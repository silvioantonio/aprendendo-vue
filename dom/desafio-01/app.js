
new Vue({
    el: '#desafio',
    data: {
        nome: 'Silvio',
        idade: 28,
        imagem: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FTOPSPAPEISDEPAREDE%2F&psig=AOvVaw1ADDPaJZ3h6jm-HJb1WIdX&ust=1604542032738000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCw4IHn5-wCFQAAAAAdAAAAABAD'
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        },
        numeroRandomico(){
            return Math.random()
        }
    }
})