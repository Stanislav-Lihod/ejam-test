<script setup>
defineProps({
  logo: String,
  title: String,
})
</script>

<template>
  <div class="benefit">
    <img :src="`/src/assets/images/icons/${logo}.svg`" :alt="logo" />
    {{title}}
  </div>
</template>

<style lang="less" scoped>
.benefit{
  font-size: 12px;
  line-height: 1;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;

  @media @mobile{
    flex-shrink: 0;
    justify-content: center;
  }
}
</style>