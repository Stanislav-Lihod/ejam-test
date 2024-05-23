<script setup>
  defineProps({
    verify: Boolean,
    name: {
      type: String,
      required: true,
      default: 'Name'
    },
    rate: Number,
    avatar: String
  })
</script>

<template>
  <div class="feedback">
    <div class="feedback__author">
      <img :src=avatar :alt=name class="feedback__author-avatar">
      <div class="feedback__author-info">
        <div v-if="rate" class="feedback__author-info--rate">
          <div v-for="item in rate" class="feedback__author-info--rate-star"></div>
        </div>
        <div class="feedback__author-info--name">
          {{ name }} <span v-if="verify">Verified Customer</span>
        </div>
      </div>
    </div>
    <div class="feedback__quote">
      “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
    </div>
  </div>
</template>

<style lang="less" scoped>
.feedback{
  padding: 24px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__author{
    display: flex;
    align-items: center;
    gap: 13px;

    &-avatar{
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    &-info{
      display: flex;
      flex-direction: column;
      gap: 7.35px;

      &--name{
        font-weight: bold;
        font-size: 14px;
        line-height: 1;
        display: flex;
        gap: 10px;

        span{
          color: #5BB59A;
          font-size: 12px;
          line-height: 120%;
          display: flex;
          gap: 10px;
          align-items: center;

          &::before{
            content: '';
            width: 16px;
            height: 16px;
            background-image: url("data:image/svg+xml,%3Csvg width='16' height='17' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_205)'%3E%3Cpath d='M15.64 7.6409L14.5522 6.37722C14.3443 6.13728 14.1763 5.68939 14.1763 5.36947V4.00981C14.1763 3.16202 13.4805 2.4662 12.6327 2.4662H11.2731C10.9611 2.4662 10.5053 2.29824 10.2653 2.09029L9.00163 1.00256C8.44977 0.530681 7.54599 0.530681 6.98613 1.00256L5.73045 2.09829C5.49051 2.29824 5.03462 2.4662 4.7227 2.4662H3.33904C2.49126 2.4662 1.79543 3.16202 1.79543 4.00981V5.37747C1.79543 5.68939 1.62747 6.13728 1.42752 6.37722L0.347791 7.6489C-0.116093 8.20076 -0.116093 9.09654 0.347791 9.6484L1.42752 10.9201C1.62747 11.16 1.79543 11.6079 1.79543 11.9198V13.2875C1.79543 14.1353 2.49126 14.8311 3.33904 14.8311H4.7227C5.03462 14.8311 5.49051 14.9991 5.73045 15.207L6.99413 16.2947C7.54599 16.7666 8.44977 16.7666 9.00963 16.2947L10.2733 15.207C10.5133 14.9991 10.9611 14.8311 11.2811 14.8311H12.6407C13.4885 14.8311 14.1843 14.1353 14.1843 13.2875V11.9278C14.1843 11.6159 14.3523 11.16 14.5602 10.9201L15.648 9.6564C16.1119 9.10454 16.1119 8.19277 15.64 7.6409ZM11.321 7.13703L7.45801 11.0001C7.34604 11.112 7.19408 11.176 7.03412 11.176C6.87416 11.176 6.7222 11.112 6.61023 11.0001L4.67471 9.06455C4.44277 8.83261 4.44277 8.4487 4.67471 8.21676C4.90665 7.98482 5.29056 7.98482 5.5225 8.21676L7.03412 9.72838L10.4733 6.28924C10.7052 6.0573 11.0891 6.0573 11.321 6.28924C11.553 6.52118 11.553 6.90509 11.321 7.13703Z' fill='%235BB59A'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_205'%3E%3Crect width='16' height='16' fill='white' transform='translate(-0.00012207 0.64856)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
            display: inline-block;
          }
        }
      }

      &--rate{
        display: flex;
        gap: 4.6px;

        &-star{
          width: 12px;
          height: 12px;
          background: url("/src/assets/images/icons/star_2.svg") no-repeat;
        }
      }
    }
  }

  &__quote{
    font-size: 16px;
    color: #4D5254;
    line-height: 150%;

    @media @tablet{
      font-size: 14px;
    }
  }
}
</style>