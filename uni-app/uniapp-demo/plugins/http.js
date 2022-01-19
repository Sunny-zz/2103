// 封装  uni.request 

const http = {
	get: (url, params) => {
		return new Promise((resolve, reject)=> {
			// 做判断
			if(url){
				uni.request({
					method:'GET',
					url,
					data: params,
					success: (res) => {
						resolve(res.data)
					},
					fail: (err) => {
						reject(err)
					}
				})
			}else{
				reject('请求未能发出，失败了')
			}
		})
	},
	post: () => {
		
	}
}

export default http 
