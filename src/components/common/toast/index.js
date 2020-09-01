import Toast from './Toast.vue'
const obj = {}


obj.install = function(Vue) {
// 1创建组件构造器
	const toastContrustor = Vue.extend(Toast)
// 2new的方式，根据组件构造器，可以创建一个组件对象
	const toast = new toastContrustor()
// 3将组件对象手动进行挂载
	toast.$mount(document.createElement('div'))
// 4toast.$el对应的就是div 
	document.body.appendChild(toast.$el)
	Vue.prototype.$toast = toast
}

export default obj