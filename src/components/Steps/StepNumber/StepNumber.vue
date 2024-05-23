<script setup>
import Step from "@/components/Steps/StepNumber/Step.vue";
const steps =[
  {
    title: 'Cart Review',
    checked: true
  },{
    title: 'Checkout',
    checked: true
  },{
    title: 'Special Offer',
    active: true
  },{
    title: 'Confirmation'
  },
]
</script>

<template>
  <div class="steps">
    <Step
        v-for="(item,index) in steps"
        :number="index + 1"
        v-bind="item"
    />
  </div>
</template>

<style lang="less" scoped>
.steps{
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 24px;

  @media @tablet{
    gap: 16px;
  }

  @media @mobile{
    gap: 14px;
  }
}
</style>