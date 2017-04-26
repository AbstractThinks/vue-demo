<template>
  <div id="localcontent">
    <mu-popup position="top" :overlay="false" :open="tipPopup" popupClass="popup-top">
      解锁成功
    </mu-popup>
  	<div class="blank20"></div>
  	<mu-content-block>
  		<mu-paper :zDepth="3" >
  			<mu-content-block>
  			<div class="blank10"></div>
  			<h3 class="text-center">抓热点隐藏部分，解锁后立即查看</h3>
  			<mu-raised-button label="已过期不能解锁" fullWidth primary disabled/>
			<mu-raised-button label="立即解锁" fullWidth primary @click="_openUnlockModal"/>
			<mu-sub-header class="text-center">已有17人解锁</mu-sub-header>
			<div class="blank10"></div>
			</mu-content-block>
		</mu-paper>
	</mu-content-block>
	<div class="blank20"></div>
	<mu-dialog :open="dialog" @close="_close" title="确认查看该内容？">
		<p class="text-center">查看该内容需要支付</p>
    <p class="text-center">积分余额：197积分</p>
    <p>注：我已知晓本产品为中高风险产品，我确认我的风险承受能力等级为中高风险，与产品的客户风险承受能力等级相匹配。并确定使用该产品，自愿承担使用该产品所带来的风险。</p>
    <div class="flex-container">
      <div>
        <mu-checkbox />
      </div>
      <div class="labeltext">
        我已阅读并同意《“策略好股”服务平台“增值服务”客户须知》
      </div>
    </div>
		<mu-flat-button slot="actions" primary label="确定" @click="_confirm"/>
		<mu-flat-button slot="actions" primary label="取消" @click="_close"/>
	</mu-dialog>
  <mu-dialog :open="dialogTip" @close="_dialogTipClose" title="您的积分余额不足">
    <p>您的积分余额不足够支付查看本次解锁内容，请充值后再重新进行解锁操作。</p>
    <mu-flat-button slot="actions" primary label="立即去充值" @click="_confirm"/>
    <mu-flat-button slot="actions" primary label="取消" @click="_dialogTipClose"/>
  </mu-dialog>
  </div>
</template>

<script>

export default {
  name: 'localcontent',
  data() {
  	return {
  		dialog: false,
      dialogTip: false,
      tipPopup: false,
  	}
  } ,
  methods: {
  	_openUnlockModal() {
      // this.open();
  		this.dialog = true;
  	},
    open (position) {
      this.tipPopup = true
    },
  	_close() {
  		this.dialog = false;
  	},
  	_confirm() {
      this._close();
      // 积分不够
      // this._dialogTipOpen();
      setTimeout( () => {this.open();}, 0);
      
  	},
    _dialogTipOpen() {
      this.dialogTip = true;
    },
    _dialogTipClose() {
      this.dialogTip = false;
    },


  },
  watch: {
    tipPopup (val) {
      if (val) {
        setTimeout(() => {
          this.tipPopup = false
        }, 1000)
      }
    }
  },
}
</script>  
<style lang="scss">
	@import "../../assets/css/variable.scss";
	#localcontent {
		.mu-content-block {
			padding: 16px;
			.blank10 {
				background-color: $white;
			}
		}
	}
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  .labeltext {
    font-size: 13px;
    padding-left: 8px;
  }
</style>