export default{
    data(){
        return {
            frutas:['banana', 'maçã', 'laranja'],
            fruta:''
        }
    },
    methods: {
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    },
}