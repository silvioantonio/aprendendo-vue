import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	//Binding(el,binding,vnode) quando a diretiva é interligafa com elemento
	bind: function (elemento, binding, vnode) {
		
		let atraso = 0;
		if(binding.modifiers['atrasar']) atraso = 3000
		setTimeout(() => {
			if(binding.arg === 'fundo'){
				//elemento.style.backgroundColor = 'lightgreen'
				elemento.style.backgroundColor = binding.value
			}else{
				elemento.color = binding.value
			}
		}, atraso)
	}

	//inserted(el, binding, vnode) elemento inserido no nó pai

	//updated(el, binding, vnode, oldNode) quando o componente é atualizado (antes dos filhos)

	//componentUpdated(el, binding, vnode, oldNode) quando o component é atualizado (depois dos filhos)

	//unbind(el, binding, vnode) quando a diretiva é desvinculada do elemento

})

new Vue({
	render: h => h(App),
}).$mount('#app')
