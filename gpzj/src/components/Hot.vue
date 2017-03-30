<template>
  <div id="hot">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
    <mu-list>
      <template v-for="item in list">
        <router-link :to="{ name: 'hotdetail', params: { id: item }}">
            <mu-list-item>
              <div>{{item}}</div>
              <div>{{item}}</div>
              <div>{{item}}</div>
              <div>{{item}}</div>
              <div>{{item}}</div>
              <div>{{item}}</div>
            </mu-list-item>          
        </router-link>
      </template>
    </mu-list>
  	<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText="正在加载中..."/>
  </div>
</template>

<script>
export default {
  name: 'hot',
   data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 10,
      refreshing: false,
      trigger: null,
      loading: false,
      scroller: null,
    }
  },
  mounted () {
    this.scroller = this.$el;
    this.trigger = this.$el
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 1000)
    },
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        const list = []
        for (let i = this.num; i < this.num + 10; i++) {
          list.push('item' + (i + 1))
        }
        this.list = list
        this.num += 10
        this.refreshing = false
      }, 2000)
    }
  }
}
</script>

<style>
#hot {
	width: 100%;
  height: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
  position: relative;
}
</style>