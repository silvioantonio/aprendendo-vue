<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">{{pre}} Mensagem</b-button>
		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide">
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
		</transition>
		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterConcelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveConcelled"
			>
			<div v-if="exibir2" class="caixa"></div>
		</transition>
		<hr>
		<b-button @click="addAluno">Add</b-button>
		<transition-group name="slide">
			<b-list-group v-for="(aluno,i) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(i)">{{aluno}}</b-list-group-item>
			</b-list-group>
		</transition-group>
		
	</div>
</template>

<script>

export default {
	data(){
		return {
			alunos: ['Teste 1', 'Teste 2', 'Teste 3', 'Teste 4'],
			msg:'Mensagem para usuario',
			exibir: false,
			exibir2: true,
			pre: 'Mostrar',
			tipoAnimacao: 'fade',
			larguraBase: 0,
		}
	},
	watch: {
		exibir(value){
			this.pre = value ? 'Esconder' : 'Mostrar'
		}
	},
	methods:{
		addAluno(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo){
			let rodada = 1
			const temporizador = setInterval(()=>{
				const novaLargura = this.larguraBase + (negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada>30){
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el, done, false)
		},
		afterEnter(el){

		},
		enterCancelled(){

		},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el, done, true)
		},
		afterLeave(el){

		},
		leaveCancelled(){

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
	font-size: 1.5rem;
}

.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: aquamarine;
}

/* 
.fade-enter{
	opacity: 0;
}

.fade-enter-active{
	transition: opacity 2s;
}

.fade-enter-to{
	opacity: 1;
}

.fade-leave{
	opacity: 1;
}

.fade-leave-active{
	transition: opacity 2s;
}

.fade-leave-to{
	opacity: 0;
} */

.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active{
	transition: opacity 2s;
}

@keyframes slide-in{
	from { transform: translateY(40px); }
	to { transform: translateY(0px); }
}
@keyframes slide-out{
	from { transform: translateY(0px); }
	to { transform: translateY(40px); }
}

.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active{
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}

</style>
