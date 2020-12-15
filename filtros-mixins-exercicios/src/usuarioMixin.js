export default{
    data() {
        return {
            global: 'Mixin global'
        }
    },
    computed:{
        usuarioLogado(){
            return 'Teste 1'
        }
    },
    created() {
        console.log('usuarioMixin')
    },
}