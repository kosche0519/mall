<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" 
		class="tab-control-item" 
		:class="{active:index===currentIndex}" @click="tabclick(index)">
			<span >{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			tabclick(index){
				this.currentIndex=index
				this.$emit('tabclick',index)
			}
		}
		
	}
</script>

<style>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 15px;
		background-color: #fff;
	}
	.tab-control-item{
		flex: 1;
		height: 40px;
		line-height: 40px;
	}
	.tab-control-item span {
		padding: 5px;
	}
	.active{
		color:var(--color-high-text);
		
	}
	.active span {
		border-bottom: var(--color-high-text) 2px solid;
	}
</style>
