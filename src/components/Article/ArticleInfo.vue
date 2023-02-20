<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <div>
            <span>{{ title }}</span>
          </div>
          <!-- 图片 -->
          <img v-if="imgList" :src="imgList" alt="" class="thumb" />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>来源 {{ source }} &nbsp;&nbsp; 发布日期 {{ time }}</span>
          <!-- 关闭按钮 -->
          <!-- <van-icon name="cross" /> -->
        </div>
        <van-divider />
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  name: 'ArticleInfo',
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    },
    time: {
      // 通过数组形式，定义多种可能的类型
      type: String,
      default: ''
    },
    // 封面的信息对象
    imgList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  /* 矩形黄金比例：0.618 */
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
.van-divider {
  margin: 1px 0 0 0;
}
</style>
