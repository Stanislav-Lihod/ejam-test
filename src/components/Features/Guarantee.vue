<script setup>
</script>

<template>
  <div class="guarantee">
    <img src="/src/assets/images/icons/guarantee.png" alt="Guarantee logo">
    <div class="guarantee__content">
      <slot>
        If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>.
        Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.guarantee{
  display: flex;
  gap: 16px;

  img{
    width: 88px;
    height: 88px;
    flex-shrink: 0;
  }

  &__content{
    color: #4D5254;
    font-size: 16px;
    line-height: 140%;

    span{
      font-weight: bold;
    }
  }
}
</style>