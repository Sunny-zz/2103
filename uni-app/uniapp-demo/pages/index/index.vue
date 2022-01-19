<template>
	<view class="content">
		<text>{{$store.state.message}}</text>
		<text>{{$store.getters.messageLength}}</text>
		<button @click="changeMessage">修改 vuex 数据</button>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title + ' '}}<text>{{ 'digitalcity' | firstWordUpcase }}</text></text>
		</view>
		<button @click="changText" type="primary">按钮修改标题</button>
		<view class="list">
			<text>数组的个数{{arrNum}}</text>
			<view v-for="item in arr" :key="item.id" v-html="item.content"></view>
		</view>
		<view v-if="userInfo" class="user-info">
			<text>{{userInfo.username}}</text>
		</view>
		<view class="">
			<button @click="count ++" type="default">+1</button>
			<text>{{count}}</text>
			<button @click="count--" type="default">-1</button>
		</view>
		<!-- url 地址直接找得到对应 页面组件 -->
		<navigator open-type="switchTab" url="../about/about">
			<button type="default">跳转到新页面</button>
		</navigator>
		<button @click="jump" type="default">直接使用 uni.navigateTo 跳转  tabbar 要使用 uni.switchTab 跳转</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
				title: 'Hello',
				arr: [{
						id: 1,
						content: '<text>wqw12w1</text>'
					},
					{
						id: 2,
						content: '<text>uju89jj12</text>'
					},
					{
						id: 3,
						content: '<text>uju89jj12</text>'
					},
					{
						id: 4,
						content: '<text>uju89jj12</text>'
					}
				],
				userInfo: null
			}
		},
		computed: {
			arrNum() {
				return this.arr.length
			}
		},
		filters: {
			firstWordUpcase: function(value) {
				return value.slice(0, 1).toLocaleUpperCase() + value.slice(1)
			}
		},
		watch: {
			count: {
				handler(newNum, oldNum) {
					console.log(newNum, oldNum)
					console.log('num 改变了')
				},
				immediate: true
			}
		},
		onLoad() {
			console.log('index 页面加载')
		},
		onShow() {
			console.log('我出现了')
		},
		onHide() {
			console.log('我消失了')
		},
		methods: {
			changText() {
				this.title = '哈哈哈2'
			},
			jump() {
				uni.switchTab({
					url: '../about/about',
					
				})
			},
			changeMessage(){
				this.$store.commit('changeMessage', 'hello 哈哈哈哈')
			}
		},
		destroyed() {
			console.log('index组件销毁')
		},
		mounted() {
			uni.request({
				url: 'https://jsonplaceholder.typicode.com/users/1',
				success: (res) => {
					this.userInfo = res.data
				}
			})
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}
	}



	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
