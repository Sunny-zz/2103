<template>
	<view>
		<view class="">
			<text>文章的id{{postId}}</text>
		</view>

		<view v-if="post" class="post">
			<text>{{post.title}}</text>
			<view v-html="post.content"></view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				postId: '',
				post: null
			}
		},
		methods: {

		},
		onLoad({id}) {
			this.postId = id
			
		},
		async mounted() {
			const res = await this.$http.get(`https://cnodejs.org/api/v1/topic/${this.postId}`)
			console.log(res)
			this.post = res.data
			uni.setNavigationBarTitle({
			    title: res.data.title
			});
		}
	}
</script>

<style>

</style>
