<template>
  <div id="hot">
    <mu-list>
      <template v-for="item in hotlist.entries">
        <router-link :to="{ name: 'hotdetail', params: { id: item }}">
            <mu-list-item>
              <div>{{item.resourceName}}</div>
              <div>{{item.createdTime}}</div>
              <div>{{item.resourcePhysicalId}}</div>
              <div>{{item.staffName}}</div>
              <div>{{item.createdTime}}</div>
              <div>{{item.resourcePhysicalId}}</div>
              <div>{{item.staffName}}</div>
              <div>{{item.createdTime}}</div>
              <div>{{item.resourcePhysicalId}}</div>
              <div>{{item.staffName}}</div>
              <div>{{item.resourceName}}</div>
            </mu-list-item>          
        </router-link>
      </template>
    </mu-list>
  	<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" :loadingText="loadText" v-if="hasNext"/>
    <div v-if="hasNoNext">没有更多了</div>
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from '../store/mutation-types';

export default {
   name: 'hot',
   data () {
    return {
      loading: false,
      scroller: null,
      loadText:"正在加载中...",
      hasNext: true,
      hasNoNext:false    
    }
  },
  created: function () {
    
  },
  mounted () {
    this.scroller = this.$el;
    this.getHotList({
        "page":1,
        "pagesize":4
    })
  },
  computed: mapState({
    hotlist: state => state.hot.hotlist,
  }),
  methods: {
    loadMore () { 
      if (this.hotlist.hasNext) {
        this.loading = true
        this.getHotList({
          "page":this.hotlist.pageNumber+1,
          "pagesize":4
        }).then(() => {
          this.loading = false;
        });

      } else {
        this.hasNext = false;
        this.hasNoNext = true;
      }  
    },
    ...mapActions({
      getHotList: types.HOTLIST_ACTION 
    }),
  }
}
</script>

<style lang="scss">
#hot {
	width: 100%;
  height: 100%;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
  position: relative;
}

</style>