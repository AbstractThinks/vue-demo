<template>
  <div id="homepageindex">
    <mu-list-item>
    	<mu-content-block>
		<mu-row gutter>
            <mu-col width="20" tablet="20" desktop="20" >
            	<div>5月16日</div>
            	<div>早间</div>
            </mu-col>
            <mu-col width="80" tablet="80" desktop="80" >
            	勒索病毒袭来，一般快或爆发迎来相关基于
            </mu-col>      
        </mu-row>
        </mu-content-block>
    </mu-list-item>
	
	<div class="blank10"></div>
	

			<mu-list-item>
				<mu-content-block>
					<mu-row gutter>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left">
    						<img src="../../assets/img/homepage/title-hot.png" alt="">
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right info">
    					查看近期热点
    					</mu-col>
    				</mu-row>
					<mu-content-block class="hotbg">
						<div class="blank10"></div>
						<h3>机会或是跌出来的（附2只个股）</h3>
						<div >本期热点为近期在相对地步区域强势运行的2只个</div>
						<div class="blank20"></div>
						<div class="desc">
							<span>5月10日发布</span>
							<span>阅读量100000</span>
						</div>
						<div class="blank10"></div>
					</mu-content-block>
				</mu-content-block>
			</mu-list-item>
	
	<div class="blank10"></div>
			<mu-list-item>
				<mu-content-block>
					<mu-row gutter>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left ">
    						<img src="../../assets/img/homepage/title-hot.png" alt="">
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right info">
    					查看近期热点
    					</mu-col>
    				</mu-row>
					<mu-content-block class="goldbg">
						<div class="blank10"></div>
						<h3>机会或是跌出来的（附2只个股）</h3>
						<div>本期热点为近期在相对地步区域强势运行的2只个</div>
						<div class="blank20"></div>
						<div class="desc">
							<span>5月10日发布</span>
							<span>阅读量100000</span>
						</div>
						<div class="blank10"></div>
					</mu-content-block>
				</mu-content-block>
			</mu-list-item>

	<div class="blank10"></div>
    <mu-row>
        <mu-col width="50" tablet="50" desktop="50" >

			<mu-list-item>
				<mu-content-block>
					<mu-row>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left ">
    						<img src="../../assets/img/homepage/title-short.png" alt="">
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right info">
    						更多
    					</mu-col>
    				</mu-row>
					<mu-divider/>
					<mu-row>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left ">
    						<h3>生财有道</h3>
    						<div>1000人已关注</div>
    						<div></div>
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right ">
    						<img src="../../assets/img/homepage/title-short.png" alt="">
    					</mu-col>
    				</mu-row>
    				<mu-row>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left ">
    						<div>月收益率</div>
    						<div>20.00%</div>
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right">
    						<div>月成功率</div>
    						<div>71.00%</div>
    					</mu-col>
    				</mu-row>
				</mu-content-block>
			</mu-list-item>
				
        </mu-col>

        <mu-col width="50" tablet="50" desktop="50" >

					<mu-list-item>
						<mu-content-block>
							<mu-row>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left ">
    						<img src="../../assets/img/homepage/title-short.png" alt="">
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right info">
    						更多
    					</mu-col>
    				</mu-row>
					<mu-divider/>
					<mu-row>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left white">
    						<h3>生财有道</h3>
    						<div>1000人已关注</div>
    						<div></div>
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right">
    						更多
    					</mu-col>
    				</mu-row>
    				<mu-row>
    					<mu-col width="50" tablet="50" desktop="50" class="text-left ">
    						<div>月收益率</div>
    						<div>20.00%</div>
    					</mu-col>
    					<mu-col width="50" tablet="50" desktop="50" class="text-right">
    						<div>月成功率</div>
    						<div>71.00%</div>
    					</mu-col>
    				</mu-row>
						</mu-content-block>
					</mu-list-item>
        </mu-col>      
    </mu-row>
  </div>
</template>

<script>
export default {
  name: 'homepageindex'
}
</script>  
<style lang="scss">
@import "../../assets/css/variable.scss";
#homepageindex {
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	position: relative;
	.mu-item {
		padding: 0;
	}
	&>.blank10 {
		background-color: $grey2;
	}
	.mu-content-block {
		// color: $white;
        .info {
            color: $info;
        }
		img {
			height: 21px;
		}
		h3 {
			margin-top: 0px;
		}
        .desc {
            font-size: 12px;
        }
	}
	.hotbg {
		background: url(../../assets/img/homepage/hotbg.png);
    	background-size: 100% 100%;
	}
	.goldbg {
		background: url(../../assets/img/homepage/goldbg.png);
    	background-size: 100% 100%;
	}
}
</style>