<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{inverterNome()}}</strong></p>
        <p>Idade é: <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar</button>
        <button @click="reiniciarFn">ReiniciarNome CallBack</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    //props: ['nome'],
    // props:{
    //     nome: String
    // },
    // props:{
    //     nome: {
    //         type: String,
    //         required: true,
    //         default: 'Valor Default'
    //     }
    // },
    props:{
        nome: {
            type: String,
            required: true,
            default: () => {
                return 'Valor default function'
            }
        },
        idade: 21,
        reiniciarFn: Function
    },
    created() {
        barramento.$on('idadeMudou', (idade) => {
            this.idade = idade
        })
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome)
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
