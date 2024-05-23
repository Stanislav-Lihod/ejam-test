<script setup>

</script>

<template>
  <div class="discount">
    <img src="/src/assets/images/icons/discount.svg" alt="discount">
    <div class="discount__content">
      <slot>
        Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each</span>.
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.discount{
  width: calc(100% - 8px);
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: #EDF3FD;
  margin-top: 11px;

  @media @tablet{
    width: 100%;
  }
  @media @mobile{
    margin-top: 3px;
  }

  img{
    @media @mobile{
      width: 24px;
      height: 24px;
    }
  }

  &__content{
    font-size: 16px;
    line-height: 140%;

    @media @mobile{
      font-size: 14px;
    }

    span{
      color: #2C7EF8;
    }
  }
}
</style>