<template>
  <div id="history">
    <div class="text-center">
      
    </div>
    <mu-list>
        <mu-list-item @click="open('topRule')"> 
          <h6 class="text-center">5月16日发布个股近5交易日最大涨幅</h6>
        </mu-list-item> 
        <mu-list-item title="荣盛发展(002146)" afterText="涨幅  +8.03%" >
        </mu-list-item>
         <mu-list-item title="荣盛发展(002146)"  afterText="涨幅  +8.03%" >
        </mu-list-item>
        <mu-list-item title="荣盛发展(002146)" afterText="涨幅  +8.03%" >
        </mu-list-item>
        <mu-list-item slot="nested"> 
          <h6 class="text-center">数据统计至5月22日收盘后</h6>
          <h6 class="text-center">回顾股票现在已失去参考意义</h6> 
        </mu-list-item> 
    </mu-list>
  </div>
</template>

<script>
export default {
  name: 'history',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    },
  },
}
</script>  
<style lang="scss">
	#history {
		button{
		}
	}
    
</style>