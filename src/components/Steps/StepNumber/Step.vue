<script setup>
defineProps({
  active: Boolean,
  checked: Boolean,
  title: String,
  number: Number
})
</script>

<template>
  <div
      class="step"
      :class="{ active, checked }"
      :data-number=number
  >
    <span>Step {{number}} :</span> {{ title }}
  </div>
</template>

<style lang="less" scoped>
.step{
  font-size: 20px;
  line-height: 110%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media @tablet{
    font-size: 14px;
  }

  @media @mobile{
    justify-content: center;
    text-align: center;
    font-size: 12px;
    gap: 6px;
  }

  &::before{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    content: attr(data-number);
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 50%;
    border: 2px solid #2C7EF8;
    color: #2C7EF8;

    @media @tablet{
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }

    @media @mobile{
      width: 18px;
      height: 18px;
      margin-right: 0;
    }
  }

  &.active{
    font-weight: bold;

    &:before{
      color: #ffffff;
      background-color: #2C7EF8;
    }
  }

  &.checked{
    &:before{
      content: '';
      border-color: #85BF55;
      background-color: #85BF55;
      background-image: url("data:image/svg+xml,%3Csvg width='23' height='18' viewBox='0 0 23 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.66638 9L8.32521 16L21.6664 2' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center;

      @media @tablet{
        background-size: 50%;
      }
    }
  }

  span{
    @media @mobile{
      display: none;
    }
  }
}
</style>