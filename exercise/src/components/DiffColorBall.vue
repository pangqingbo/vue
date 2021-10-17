<template>
  <div>
    <div id="balllist">
      <div
        class="ball"
        v-for="item in items"
        :style="item.styleObj"
        :key="item.id"
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';

export default {
  props: ['msg'],
  setup(props) {
    // 生成随机颜色
    let { msg } = toRefs(props)
    function randomColor() {
      let color = ref("");
      const str = "0123456789ABCDEF";
      let i = 0;
      color.value = "#";
      while (i < 6) {
        color.value += str[parseInt(Math.random() * str.length)];
        i++;
      }
      return color.value;
    }

    let items = ref([]);
    function setItems() {
      // 每个div里的文字
      let content = [...msg.value];
      // 获取最大宽度，方便设置div不超出盒子
      let maxWidth = ref(0);
      maxWidth.value = document.body.clientWidth;
      // 创建一个长度为10的items数组，div的个数由items长度决定
      // 同时设置每个div的位置、大小、颜色
      items.value = Array.from({ length: content.length }, (v, i) => {
        // 设置每个div大小
        let size = parseInt(Math.random() * 50 + 150);
        // 设置每个div位置
        // let left = parseInt(Math.random() * (maxWidth.value - size));
        let left = ref(0)
        left.value = parseInt(Math.random() * (maxWidth.value - size))
        let top = parseInt(Math.random() * (500 - size));
        // 设置每个div颜色
        let backgroundColor = randomColor();
        let styleObj = {
          backgroundColor: backgroundColor,
          left: left.value + "px",
          top: top + "px",
          width: size + "px",
          height: size + "px",
          lineHeight: size + "px",
        };
        return {
          // 每个div里的文字由msg数组决定
          content: content[i],
          id: ++i,
          styleObj,
        };
      });
      // return items;
    }
    onMounted(setItems)
    // 设置在浏览器窗口大小发生变化时调用setItems重新渲染
    window.onresize = setItems
    return { 
      items,
      setItems
    };
  },
};
</script>

<style scoped>
#balllist {
  position: relative;
  width: 100%;
  /* 固定容器高度 */
  height: 500px;
}
.ball {
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 50%;
  opacity: 0.8;
  color: white;
  font-size: large;
}
</style>
