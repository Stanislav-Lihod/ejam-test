<script setup>
import HeaderBenefit from "@/components/Features/HeaderBenefit.vue";

const benefits = [
  {
    title: '30-DAY SATISFACTION GUARANTEE',
    logo: 'checkmark'
  },{
    title: 'Free delivery on orders over $40.00',
    logo: 'truck'
  },{
    title: '50.000+ HAPPY CUSTOMERS',
    logo: 'heart'
  },{
    title: '100% Money Back Guarantee',
    logo: 'return'
  },
]

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Navigation} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const destroy = (swiper) => {
  console.log(swiper);
};

const modules = [Navigation, Autoplay];
</script>

<template>
  <header>
    <div class="header-benefits">
      <div class="container">
        <swiper
            :modules="modules"
            class="header-benefits__content"
            :slides-per-view="'auto'"
            :loop="true"
            :space-between="0"
            navigation
            @destroy="destroy"
        >
          <swiper-slide v-for="item in benefits">
            <HeaderBenefit v-bind="item"/>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="header-logos">
      <div class="container">
        <img src="../assets/images/logo.png" alt="logo">
        <div class="header-logos__security">
          <div class="header-logos__security-item">
            <img src="../assets/images/security_1.png" alt="mc afee secure">
          </div>
          <div class="header-logos__security-item">
            <img src="../assets/images/security_2.png" alt="norton antiviruse">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
.header{
  &-benefits{
    background-color: #252F3D;
    padding: 15px 0 13px;
    overflow: hidden;

    @media @tablet{
      padding: 10px 0;
    }

    &__content{
      .swiper-slide{
        @media (min-width: 760px){
          width: auto;
          flex-shrink: 1;
        }
      }
    }

    .container{
      @media @mobile{
        padding: 0 20px;
      }
    }
  }

  &-logos{
    margin: 30px 0 19px;

    @media @tablet{
      margin: 20px 0;
    }

    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    img{
      max-height: 36px;

      @media @tablet{
        max-height: 24px;
      }

      @media @mobile{
        max-height: 20px;
      }
    }

    &__security{
      display: flex;
      gap: 32px;

      @media @tablet{
        gap: 20px;
      }

      @media @mobile{
        gap: 16px;
      }

      img{
        @media @mobile{
          max-height: 16px;
        }
      }
    }
  }
}
</style>

<style>

.swiper-button-prev,
.swiper-button-next{
  display: none;
  @media (max-width: 759px) {
    width: 22px;
    height: 22px;
    display: flex;
    color: white;
    background-color: #252F3D;
    align-items: center;
    justify-content: center;
    top: 0;
    margin-top: 0;

    &::after{
      font-size: 20px;
    }
  }
}

.swiper-button-prev{
  left: 0;
}
.swiper-button-next{
  right: 0;
}

.swiper-wrapper{
  @media (min-width: 760px){
    justify-content: space-between;
    gap: 24px;
  }
}

</style>
