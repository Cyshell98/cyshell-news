<template>
  <div class="home-container">
    <!-- navbar -->
    <van-nav-bar title="Cyshell-News" fixed />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 导入,注册 ArticleInfo 组件 -->
      <!-- 在使用组件的时候，如果某个属性名是“小驼峰”形式，则绑定属性的时候，建议改写成“连字符”格式。-->
      <!-- 例如：cmtCount 改为 cmt-Count -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ArticleInfo v-for="item in newsList" :key="item.id" :title="item.title" :source="item.source" :time="item.postTime" :imgList="item.imgList"> </ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 导入request.js
// import { getArticleListAPI } from '@/api/articleAPI.js'
import { getNewsListAPI } from '@/api/newsAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'
import { Toast } from 'vant'

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      loading: true,
      finished: false,
      // 页码值
      page: 1,
      // 每页显示多少条数据
      limit: 10,
      // 文章的数组
      newsList: []
    }
  },
  created() {
    this.initArticleList()
    // this.initNewsList()
  },
  methods: {
    // async initNewsList() {
    // 发起GET请求，获取文章的列表数据
    // const { data: res } = await getNewChannelAPI()
    // console.log(res)
    // },
    // 封装获取文章数据的方法
    async initArticleList() {
      // 发起GET请求，获取文章的列表数据
      const { data: res } = await getNewsListAPI(this.page)
      console.log(res.data)
      // 证明是上拉加载，旧数据在前，新数据在后
      // this.arr = [...旧数组, ...新数组]
      this.newsList = [...this.newsList, ...res.data]
      this.loading = false

      if (res.data.length === 0) {
        // 如果上拉加载的时候，返回的res数组为空，则停止加载
        this.finished = true
      }
      // this.newsList = res.data
      console.log(this.newsList)
    },
    onLoad() {
      setTimeout(() => {
        console.log('触发了onload')
        // 异步更新数据
        // 1.让页码+1
        this.page++
        // 2.重新请求接口获取数据
        this.initArticleList()
      }, 1000)
    },
    onRefresh() {
      setTimeout(() => {
        this.initArticleList(true)
        this.isLoading = false
        Toast('刷新成功')
      }, 1000)
    }
  },
  components: {
    ArticleInfo
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  // .van-nav-bar {
  //   background-color: #007bff;
  // }
  // /deep/.van-nav-bar__title {
  //   color: white;
  // }
}
</style>
