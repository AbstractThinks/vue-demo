<template>
  <div id="newstockrule">
  <div class="banner">
    <div class="blank50"></div>
    <img src="../../assets/img/newstock/stockrule_text.png">
    <div class="blank50"></div>
  </div>
  
  <mu-content-block class="bg-grey">
    <div class="blank40"></div>
    <mu-paper :zDepth="2" >
      <mu-content-block class="before-container">
      <div class="blank20"></div>
        <div class="before">
          <mu-chip >
            以前
          </mu-chip>
        </div>
        
      预先交款，未中签后再退款
      <div class="blank20"></div>
      </mu-content-block>
    </mu-paper>
    <div class="blank40"></div>
    <mu-paper :zDepth="2" >
      <mu-content-block class="now-container">
      <div class="blank20"></div>
      <div class="now">
        <mu-chip >
          现在
        </mu-chip>
      </div>
        
      先申请，再摇号，中了再缴款
      <div class="blank20"></div>
      </mu-content-block>
    </mu-paper>
    <div class="blank40"></div>
    <div>
      <p class="tooltip">
        中签结果公布提前至申购日的下两个交易日
      </p>
      <p class="tooltip">
        中签结果公布提前至申购日的下两个交易日
      </p>
    </div>
    <div class="blank30"></div>
  </mu-content-block>

  


  <mu-content-block class="text-center">
    <div class="blank30"></div>
    <div class="title">
      新规下的打新时间表
    </div>
    <div class="description grey">
      以下时间均为<span class="warning">交易日时间</span>
    </div>
    <div class="blank20"></div>
    <mu-divider />
    <div class="blank20"></div>
  </mu-content-block>
  <mu-stepper orientation="vertical" :linear="false">
    <mu-step active>
      <mu-step-label >
        <!-- <mu-icon slot="icon" value="warning" color="red"/> -->
        申购前<span class="number"><i>22</i></span>日
      </mu-step-label>
      <mu-step-content>
        <mu-paper :zDepth="1">
          <p class="title">
            平均股票市值1万以上
          </p>
          <p class="description">
            上海和深圳市场的市值分开单独计算，多账户市值合并计算
          </p>
        </mu-paper>
        
      </mu-step-content>
    </mu-step>
    <mu-step active >
      <mu-step-label >
        申购前<span class="number"><i>2</i></span>日
      </mu-step-label>
    </mu-step>
    <mu-step active >
      <mu-step-label >
        <span class="number"><i>申购日</i></span>
      </mu-step-label>
      <mu-step-content>
         <mu-paper :zDepth="1">
          <p class="title">
            可申购额度
          </p>
          <mu-divider />
          <p class="description">
            上海市场<span class="emphasize">1万</span>市值 = <span class="emphasize">1000</span>股<br>
            深圳市场<span class="emphasize">5千</span>市值 = <span class="emphasize">500</span>股
          </p>
        </mu-paper>
      </mu-step-content>
    </mu-step>
    <mu-step active>
      <mu-step-label>
        申购后<span class="number"><i>1</i></span>日
      </mu-step-label>
      <mu-step-content>
        <mu-paper :zDepth="1">
          <p class="title">
            配号
          </p>
          <mu-divider />
          <p class="description">
            上海市场每 <span class="emphasize">1000</span> 股 = <span class="emphasize">1</span>个号<br>
            深圳市场每 <span class="emphasize">500</span> 股 = <span class="emphasize">1</span>个号
          </p>
        </mu-paper>

      </mu-step-content>
    </mu-step>
    <mu-step active>
      <mu-step-label>
        申购后<span class="number"><i>2</i></span>日
      </mu-step-label>
      <mu-step-content>
        <mu-paper :zDepth="1">
          <p class="title">
            中签结果公布
          </p>
          <p class="description">
            中签公布后，可查询个人每只股票的中签数量
          </p>
          <mu-divider />
          <p class="title">
            <span class="emphasize">中签缴款  <i class="iconfont icon-xinxi"></i></span>
          </p>
          <p class="description">
            查看个人资金是否足够缴纳新股申购所需金额，不足建议立即补充资金
          </p>
        </mu-paper>
        <div class="blank10"></div>
        <mu-paper :zDepth="1">
          <p>
            16:00 为补足中签缴款的最后时间点
          </p>
        </mu-paper>
      </mu-step-content>
    </mu-step>
    <mu-step active :last="true">
      <mu-step-label>
        申购后<span class="number"><i>3</i></span>日
      </mu-step-label :last="true">
      <mu-step-content :last="true">
         <mu-paper :zDepth="1">
          <p class="description">
            认购成功
          </p>
        </mu-paper>
      </mu-step-content>
    </mu-step>
  </mu-stepper>



    
  <mu-content-block>
    <div class="blank40"></div>
   <!--  <mu-raised-button label="分享" fullWidth primary>
      <i class="iconfont icon-fenxiang"></i>
    </mu-raised-button> -->
    <div class="blank40"></div>
  </mu-content-block>
  </div>
</template>

<script>
import { 
  mapGetters,
  mapActions,
  mapState
} from 'vuex';
import * as types from '../../store/mutation-types';

export default {
   name: 'newstockrule',
   
}
</script>

<style lang="scss">
#newstockrule {
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;
  .bg-grey {
    background:#eeeeee;
  }
  .banner {
    text-align: center;
    background: url(../../assets/img/newstock/stockrule_banner.jpg);
    background-size: 100% 100%;
    img {
      width: 220px;
    }
  }
  .number {
    font-size: 36px;
    display: inline-block;
    padding-left: 8px;
    padding-right: 18px;
    color: #f44336;
  }
  .mu-step-content-inner {
    padding:4px;
    .mu-paper {
      padding: 8px;
    }
  }
  .title {
    font-size: 16px;
  }
  .description {
    font-size: 12px;
  }
  .emphasize {
    font-size: 16px;
    color: #f44336;
    font-weight: bolder;
  }
  .before-container,
  .now-container {
    position: relative;
    text-align: center;
  }
  .before,
  .now {
    position: absolute;
    width: 100%;
    text-align: center;
    margin-left: -16px;
    top: -16px;
    font-size:12px;
  }
  .before {
    .mu-chip {
      background: #ffa726;
      color: #fff;
    }
  }
  .now {
    .mu-chip {
      background: #f44336;
      color: #fff;
    }
  }
  .grey {
    color: #cccccc;
  }
  .warning {
    color: #ffa726;
  }
  .tooltip {
    position: relative;
    padding-left: 16px;
    &:after,&:before {
      display: inline-block;
      position: absolute;
      content:"";
      left: 0px;
      border-radius: 50%;
    }
    &:after {
      width: 4px;
      height: 4px;
      background: red;
      left: 6px;
      top: 8px;

    }
    &:before {
      width: 8px;
      height: 8px;
      background: #ffab91;
      left: 4px;
      top: 6px;
    }
  }
  
}

</style>