<script setup>
import Step from "@/components/Steps/StepNumber/Step.vue";
</script>

<template>
  <div class="steps">
    <Step
        :number=1
        :title="'Cart Review'"
        :active=false
        :checked=true
    />
    <Step
        :number=2
        :title="'Checkout'"
        :active=false
        :checked=true
    />
    <Step
        :number=3
        :title="'Special Offer'"
        :active=true
        :checked=false
    />
    <Step
        :number=4
        :title="'Confirmation'"
        :active=false
        :checked=false
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
}
</style>