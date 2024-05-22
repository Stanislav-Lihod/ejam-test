<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import StepNumber from "@/components/Steps/StepNumber/StepNumber.vue";
import StepCard from "@/components/Steps/StepCard/StepCard.vue";
</script>

<template>
  <Header/>
  <main>
    <div class="container">
      <div class="main-heading">
        <h1>Wait ! your order in progress.</h1>
        <div class="main-heading__description">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
      </div>
      <StepNumber/>
      <StepCard/>
    </div>
  </main>
  <Footer/>
</template>

<style lang="less" scoped>
main{
  margin: 19px 0 61px;
  flex: 1 0 auto;

  .container{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
}

.main-heading{
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;

  h1{
    font-size: 48px;
    line-height: 1;

    @media @tablet{
      font-size: 38px;
      line-height: 140%;
    }
  }

  &__description{
    font-size: 24px;
    color: #4D5254;
    line-height: 1;

    @media @tablet{
      font-size: 18px;
      line-height: 140%;
    }

    @media @mobile{
      font-size: 16px;
    }
  }
}
</style>
