<template>
	<div id="tutorial" class="tutorial">
		<h2>Tutorial</h2>
		<div class="binding">

			<h3>数据绑定</h3>
			<p>{{ msg }}</p>

			<h3>v-model</h3>
			<input v-model="msg" placeholder="edit me">

			<h3>v-bind</h3>
			<p v-bind:title="msg">鼠标悬停</p>
			<p :title="msg">鼠标悬停</p> <!--简写-->
			
			<h3>v-html</h3>
			<div v-html="rawHtml"></div>

			<h3>v-if v-show</h3>
			<div>
				<h5 v-if="yes">Yes!</h5>
            	<h5 v-if="no">No!</h5>
			</div>
			<em>v-show也是条件渲染指令，和v-if指令不同的是，使用v-show指令的元素始终会被渲染到HTML，它只是简单地为元素设置CSS的style属性。</em>
			<div>
				<h5 v-show="yes">Yes!</h5>
            	<h5 v-show="no">No!</h5>
			</div>

			<h3>v-for</h3>
			<ul>
				<li v-for="person in people">{{person.name}}</li>
			</ul>

			<h3>v-on</h3>
			<div>
				<button v-on:click="_handleClick">click事件</button>
				<button @click="_handleClick">_handleClick</button><!--简写-->
			</div>

			<h3>组件</h3>
			<div>
				<Child mes-father="message from father">></Child>
			</div>
			
			<h3>全局组件</h3>
			<em>
				<pre class="code">
Vue.component('my-component', {
  template: `&lt;div&gt; 
  		A custom component! 
  		&lt;/div&gt;`
})
				</pre>
			</em>
			<my-component></my-component>

			<h3>自定义filter</h3>
			<p>Total: {{ num | currency }}</p>
			<p>Total: {{ num | currency("$") }}</p>
		</div>
	</div>
</template>

<script>
	import Child from './Child';
	export default {
		name: "tutorial",
		data:function () {
		    return {
		    	yes: true,
		    	no: false,
				msg: 'Welcome to Your Vue.js App',
				rawHtml: '<p><em>rawHtml</em></p>',
				num: "0",
				people: [{
                    name: 'Jack',
                    age: 30,
                    sex: 'Male'
                }, {
                    name: 'Bill',
                    age: 26,
                    sex: 'Male'
                }, {
                    name: 'Tracy',
                    age: 22,
                    sex: 'Female'
                }, {
                    name: 'Chris',
                    age: 36,
                    sex: 'Male'
                }]
		    }
		},
		methods: {
			_handleClick: function () {
				console.log(1);
			}
		},
		computed: {
            msg: function() {
                return this.msg +"computed";
            }
        },
		props: {

		},
		components: {
			Child
		},
		beforeCreate: function () {
			//在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
			console.log('tutorial beforeCreate 钩子执行...');
			console.log(this.number)
		},
		cteated: function () {
			//实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
			console.log('tutorial cteated 钩子执行...');
			console.log(this.number)
		},
		beforeMount: function () {
			//在挂载开始之前被调用：相关的 render 函数首次被调用。
			console.log('tutorial beforeMount 钩子执行...');
			console.log(this.number)
		},
		mounted: function () {
			//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
			console.log('tutorial mounted 钩子执行...');
			console.log(this.number)
		},
		beforeUpdate: function () {
			//数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
			console.log('tutorial beforeUpdate 钩子执行...');
			console.log(this.number)
		},
		updated: function () {
			//由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

			//当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
			console.log('tutorial updated 钩子执行...');
			console.log(this.number)
		},
		beforeDestroy: function () {
			//实例销毁之前调用。在这一步，实例仍然完全可用。
			console.log('tutorial beforeDestroy 钩子执行...');
			console.log(this.number)
		},
		destroyed: function () {
			//Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
			console.log('tutorial destroyed 钩子执行...');
			console.log(this.number)
		},
															
	}
</script>
<style>
	.code {
		text-align: left
	}
</style>