<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="msg in mensagens"
			:key="msg.texto"
			:variant="msg.tipo">{{msg.texto}}</b-alert>
		<b-card-group deck>
			<b-card header="Form card">
				<b-form-group label="Nome:">
					<b-form-input type="text" size="lg" v-model.lazy="usuario.nome"
							placeholder="Informe o Nome">
					</b-form-input>
				</b-form-group>
				<b-form-group label="Email:">
					<b-form-input type="text" size="lg" v-model.lazy.trim="usuario.email"
							placeholder="Informe o Email">
					</b-form-input>
				</b-form-group>
				<hr>
				<b-button @click="salvar" size="lg" variant="primary">Save User</b-button>
			</b-card>
			<b-card header="List group">
				<b-list-group>
					<b-list-group-item v-for="(usuario, index) in usuarios" :key="index">
						ID: {{index}} <br> Nome: {{usuario.nome}} <br> Email: {{usuario.email}} <br>
						<b-button class="mr-2" @click="editar(index)" variant="warning">Editar</b-button>
						<b-button @click="excluir(index)" variant="danger">Excluir</b-button>
					</b-list-group-item>
				</b-list-group>
				<hr>
				<b-button @click="buscar" size="lg" variant="success">Search Users</b-button>
			</b-card>
		</b-card-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			id: null,
			usuario: {
				nome: '',
				email: ''
			},
			usuarios: [],
			mensagens: []
		}
	},
	methods: {
		excluir(index){
			this.$http.delete(`/usuarios/${index}.json`).then(() => this.limpar())
			.catch(err => {
				this.mensagens.push({
					texto: 'Erro ao excluir ==>>>'+err,
					tipo:'danger'
				})
			})
		},
		editar(index){
			this.id = index
			this.usuario = {...this.usuarios[index]}
		},
		salvar(){
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(()=>{
					this.limpar()
					this.mensagens.push({
						texto:'Item adicionado',
						tipo: 'success'
					})})
					.catch(err => {
						this.mensagens.push({
							texto: 'Erro ao salvar ==>>>'+err,
							tipo:'danger'
						})
					})

			// this.$http.post('usuarios.json', this.usuario)
			// 	// eslint-disable-next-line no-unused-vars
			// 	.then(() => this.limpar())
		},
		buscar(){
			this.$http.get('usuarios.json').then(res => {
				this.usuarios = res.data
				
			})
		},
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null,
			this.mensagens = []
		}
	},
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Teste 1',
	// 		email: 'email@teste.com.br'
	// 	// eslint-disable-next-line no-console
	// 	}).then(response => console.log(response.config.data))
	// },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
