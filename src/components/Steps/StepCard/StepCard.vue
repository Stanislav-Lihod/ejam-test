<script setup>
import Feedback from "@/components/Features/Feedback.vue";
import ProductCard from "@/components/Product/ProductCard.vue";
import DiscountBanner from "@/components/Features/DiscountBanner.vue";
import Guarantee from "@/components/Features/Guarantee.vue";
import CTABanner from "@/components/Features/CTABanner.vue";

const product = {
  title: 'Clarifion Air Ionizer',
  benefits: [
    'Negative Ion Technology may <span>help with allergens</span>',
    'Designed for air rejuvenation',
    'Perfect for every room in all types of places.'
  ],
  description: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.',
  rate: 5,
  balance: 12,
  price: 180,
  newPrice: 84,
}
</script>

<template>
  <div class="step-card">
    <div class="step-card__preview">
      <img src="/src/assets/images/products/card_item_1.png" alt="Clarifion Air Ionizer">
      <Feedback
        :name="'Ken T'"
        :rate=5
        :verify=true
        :avatar="'/src/assets/images/icons/avatars/avatr.png'"
      />
    </div>
    <div class="step-card__info">
      <div class="step-card__info-title">
        <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)
      </div>
      <ProductCard
        :benefits="product.benefits"
        :description="product.description"
        :balance="product.balance"
        :rate="product.rate"
        :title="product.title"
        :price="product.price"
        :newPrice="product.newPrice"
      />
      <DiscountBanner
        style="margin-top: 11px"
      />
      <CTABanner
        style="margin-top: 13px"
      />
      <Guarantee
        style="margin-top: 14px"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
.step-card{
  display: flex;
  gap: 40px;
  border-radius: 10px;
  background-color: #FAFAFA;
  padding: 40px;
  width: 100%;

  @media @tablet{
    padding: 30px 20px;
  }

  &__preview{
    flex-basis: 575px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex-shrink: 2;

    @media @tablet{
      flex-shrink: 1;
    }

    img{
      width: 100%;
      border-radius: 10px;
    }
  }

  &__info{
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-basis: 550px;

    &-title{
      font-size: 32px;
      line-height: 140%;
      text-transform: capitalize;
      margin-top: -12px;

      @media @tablet{
        font-size: 24px;
      }

      span{
        color: #2C7EF8;
      }
    }
  }
}
</style>