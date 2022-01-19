<template>
	<view>
		<text>hello about</text>
		<view v-if="posts.length">
			<view v-for="(item) in posts" :key="item.id">
				<navigator :url="`../post/post?id=${item.id}`">
					<text>{{item.title}}</text>
				</navigator>
			</view>
		</view>
		<view v-else>请稍等 ....</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posts: []
			}
		},
		async mounted() {
			// uni.request({
			// 	url:'https://cnodejs.org/api/v1/topics?limit=10&tab=good',
			// 	success: (res) => {
			// 		console.log(res.data)
			// 		this.posts = res.data.data
			// 	}
			// })
			const res = await this.$http.get('https://cnodejs.org/api/v1/topics', {
				limit: 10,
				tab: 'good'
			})
			this.posts = res.data
		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
