<template>
  <div id="index">
    <mu-appbar>
      <span>是否开启推送？</span>
      <mu-switch labelLeft class="demo-switch" slot="right"/>
    </mu-appbar>
    <div id="index-container" class="index-container">
        

        <div class="blank60"></div>
        <mu-content-block>
          <div class="blank20"></div>
          <div class="search-container">
            <mu-text-field hintText="搜索" fullWidth>
            </mu-text-field>
            <mu-icon-button icon="search" @click="searchContent"/>
          </div>
        </mu-content-block>


        <mu-content-block>
            <mu-paper class="paper" :zDepth="5">
                <mu-content-block>
                    <div class="blank20"></div>
                    <mu-flexbox>
                        <mu-flexbox-item class="flex-item">
                        <router-link :to="{ name: 'hot'}">
                          <mu-icon-button>
                            <mu-icon value="home" label="热点追击" />
                          </mu-icon-button>
                          <div>
                            热点追击
                          </div>
                        </router-link>
                        </mu-flexbox-item>
                    </mu-flexbox>
                    <div class="blank10"></div>
                     <mu-divider />
                    <div class="blank10"></div>     
                    <div class="blank20"></div>
                </mu-content-block>
            </mu-paper>
        </mu-content-block>
        



        <div class="blank20"></div>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" title="TAB ONE"/>
            <mu-tab value="tab2" title="TAB TWO"/>
        </mu-tabs>
        <div v-if="activeTab === 'tab1'">
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
        </div>
        <div v-if="activeTab === 'tab2'">
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
        </div>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" loadingText="正在加载中..."/>

    </div>
    <mu-paper class="bottom-menu">
      <mu-bottom-nav :value="bottomNav" @change="handleChange" >
        <mu-bottom-nav-item value="recents" title="Recents" icon="restore"/>
        <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
        <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
  
</template>

<script>
export default {
  name: 'index',
  data () {
    const list = []
    for (let i = 0; i < 10; i++) {
      list.push('item' + (i + 1))
    }
    return {
      list,
      num: 10,
      bottomNav: 'recents',
      calls: false,
      activeTab: 'tab1',
      loading: false,
      scroller: null,
      open: false,
      docked: true
    }
  },
  mounted () {

    this.scroller = document.getElementById("index-container");
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    },
    handleTabChange (val) {
      this.activeTab = val
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        for (let i = this.num; i < this.num + 10; i++) {
          this.list.push('item' + (i + 1))
        }
        this.num += 10
        this.loading = false
      }, 2000)
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    searchContent() {
      console.log(1);
    }
  }
}
</script>

<style lang="scss">
  #index {
    height: 100%;
    width: 100%;
    position: relative;
    -webkit-overflow-scrolling : touch;
    .mu-appbar {
      position:absolute;
      top: 0px;
      z-index: 999;
    }
    .index-container {
      height: 100%;
       width: 100%;
      overflow-y: auto;
      position: relative;
      -webkit-overflow-scrolling : touch;
      padding-bottom: 80px;
    }
    
    .flex-item{
      text-align: center;
    } 
    
    .float-button {
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 999;
    }
    
    .search-container>.mu-text-field {
      padding-right: 48px;
    }
    .bottom-menu {
      position: absolute;
      bottom: 0px;
      width: 100%;
      z-index: 999;
    }
  }  
</style>