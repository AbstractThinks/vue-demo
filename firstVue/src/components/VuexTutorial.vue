<template>
	<div>
		<!-- <div>{{ count }}</div> -->
		<div>{{ test }}</div>
		<button @click="_addNum">_handleClick</button>
		<ul>
			<li v-for="item in products">{{item.title}}</li>
		</ul>
	</div>
</template>
<script>
import { mapGetters,mapActions  } from 'vuex'
	export default {
		name: "vuexTutorial",

		// computed: mapState({
			// 	// 箭头函数可以让代码非常简洁
			// 	count: state => state.count,
			// 	// 传入字符串 'count' 等同于 `state => state.count`
			// 	countAlias: 'count',
			// 	// 想访问局部状态，就必须借助于一个普通函数，函数中使用 `this` 获取局部状态
			// 	countPlusLocalState (state) {
			// 	return state.count + this.localCount
			// 	}
		// })
		// 等同于
		// computed: {
			//   count() {
			//     return this.$store.state.count
			//   },
			//   countAlias() {
			//     return this.$store.state['count']
			//   },
			//   countPlusLocalState() {
			//     return this.$store.state.count + this.localCount
			//   }
		// }
		// 混入
		// computed: {
		//   localComputed () { /* ... */ },
		//   // 使用对象展开运算符将此对象混入到外部对象中
		//   ...mapState({
		//     // ...
		//   })
		// }
		computed: {
			// count () {
			// 	return this.$store.state.count;   //simple.js
			// },
			
			test () {
				console.log(2);
				return 2;
			},
			// /modules/products.js
			// const getters = {
			//   allProducts: state => state.all
			// }
			// ...mapGetters({
			// 	products: 'allProducts'
			// })
			// 等同于
			products () {
				return this.$store.getters.allProducts;
			}

			
		},
		methods:{
			// ...mapActions([
		 //      'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
		 //    ]),
		 //    ...mapActions({
		 //      add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
		 //    })
			_addNum: function () {
				this.$store.commit('increment');
			}
			
		},
		mounted: function () {
			// /modules/products.js
			// 同步使用commit，异步使用dispatch
			// const actions = {
			//   getAllProducts ({ commit }) {
			//     shop.getProducts(products => {
			//       commit(types.RECEIVE_PRODUCTS, { products })
			//     })
			//   }
			// }
			this.$store.dispatch('getAllProducts')
			// this.$store.state.products.actions.getAllProducts();
		}

	}
</script>