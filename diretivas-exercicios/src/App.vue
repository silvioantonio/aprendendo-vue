<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva v-html'"></p>
		<hr>
		<p v-destaque="'Usando diretiva v-destaque personalizada'"></p>
		<p v-destaque="cor">Usando diretiva personalizada</p>
		<p v-destaque="'blue'">Usando diretiva personalizada</p>
		<!--<p v-teste:argumento.modificador1.modificador2="valor">Usando diretiva personalizada</p>-->
		<p v-destaque:fundo.atrasar="'blue'">Usando diretiva personalizada</p>
		
		<p v-destaque-local:fundo.atrasar="'blue'">Usando diretiva personalizada</p>
		<p v-destaque-local:fundo.alternar="{cor1:'green', cor2:'red', atraso: 2000, intervalo:200}">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	components:{},
	directives:{
		'destaque-local':{
			bind: function (elemento, binding, vnode) {

				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						//elemento.style.backgroundColor = 'lightgreen'
						elemento.style.backgroundColor = binding.value
					}else{
						elemento.color = binding.value
					}
				}

				let atraso = 0;
				if(binding.modifiers['atrasar']) atraso = 3000
				
				let cor1 = binding.value.cor1
				let cor2 = binding.value.cor2
				let corAtual = cor1
				setTimeout(() => {
					if(binding.modifiers['alternar']){
						setInterval(() =>{
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						},binding.value.intervalo)
					}else{
						aplicarCor(binding.value.cor1)
					}
				}, binding.value.atraso)
			}
		}
	},
	data(){
		return {
			cor: 'red'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
