<template>
  <div id="homepagemine">
    <mu-list-item title="账号： 180****8888" describeText="风险测评等级： 中高风险" class="bg-white" :disabled="true">
        <mu-icon slot="left" value=":iconfont icon-pandianjihua"/>
        <mu-flat-button label="认证" primary slot="right"/>
    </mu-list-item>

    <div class="blank10"></div>
    <mu-list-item :disabled="true" class="bg-white pd-tb">
       <mu-list-item title="积分余额" :disabled="true">
           <mu-raised-button label="充值" primary slot="right"/>
       </mu-list-item>
       <mu-divider/>
       <mu-list-item title="已使用服务">
           
       </mu-list-item>
    </mu-list-item>
    <div class="blank10"></div>
    <mu-list-item :disabled="true" class="bg-white pd-tb">
       <mu-list-item title="宣传/活动">
            
       </mu-list-item>
       <mu-divider/>
       <mu-list-item title="叫你炒股">
           
       </mu-list-item>
    </mu-list-item>
    <div class="blank10"></div>
    <mu-list-item :disabled="true" class="bg-white pd-tb">
       <mu-list-item title="联系服务人员" :disabled="true">
            
       </mu-list-item>
       <mu-divider/>
       <mu-list-item title="客服及投诉电话：95584" :disabled="true">
            
       </mu-list-item>
       <mu-divider/>
       <mu-list-item title="帮助">
           
       </mu-list-item>
    </mu-list-item>
    <div class="blank10"></div>
    <mu-list-item class="text-center bg-white">
        退出登陆
    </mu-list-item>
    <div class="blank80"></div>
  </div>
</template>

<script>
export default {
  name: 'homepagemine'
}
</script>  
<style lang="scss">
    @import "../../assets/css/variable.scss";
    #homepagemine {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        position: relative;
        width: 100%;
        height: 100%;
        background-color: $grey4;
        .mu-item.show-left {
            padding-left: 56px;
            padding-right: 100px;
        }
        .mu-item-right {
            right:32px; 
        }
        .bg-white {
            background-color:$white;
            &.pd-tb>div>div>.mu-item {
                padding-top: 0;
                padding-bottom: 0;
            }
        }
        
    }
</style>