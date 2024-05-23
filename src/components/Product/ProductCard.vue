<script setup>
defineProps({
  benefits: Array,
  title: {
    required: true,
    type: String,
  },
  description: String,
  rate: {
    type: Number,
    default: 5
  },
  balance: {
    type: Number,
    default: 1
  },
  price:{
    required: true,
    type: Number
  },
  newPrice: Number
})
</script>

<template>
  <div class="card">
    <div class="card-product">
      <img src="/src/assets/images/products/card_item_2.png" :alt=title>
      <div class="card-info">
        <div class="card-info__general">
          <div class="card-info__heading">
            <div class="card-info__title">{{title}}</div>
            <div class="card-info__rate">
              <div v-for="item in rate" class="card-info__rate-star" />
            </div>
            <div class="card-info__balance">{{balance}} left in Stock</div>
          </div>
          <div class="card-info__price"><span :class="{crossed : newPrice}">${{ price }}</span> <span class="new-price" v-if="newPrice">${{newPrice}}</span></div>
        </div>
      </div>
      <div class="card__description" v-if="description">
        {{ description }}
      </div>
    </div>
    <ul class="card__benefits" v-if="benefits">
      <li v-for="item in benefits" v-html="item"></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.card{
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media @mobile{
    margin-top: 3px;
    gap: 16px;
  }

  &-product{
    display: grid;
    grid-template-columns: 134px auto;
    grid-gap: 9px 24px;

    @media @tablet{
      grid-template-columns: 100px auto;
    }

    @media @mobile{
      grid-template-columns: 80px auto;
      grid-gap: 11px 16px;
    }

    img{
      max-width: 134px;
      max-height: 134px;
      border-radius: 10px;
      margin-top: 2px;
      grid-row-start: 1;
      grid-row-end: 3;

      @media @tablet{
        max-width: 100px;
        height: 100px;
        grid-row-end: 1;
      }

      @media @mobile{
        max-width: 80px;
        max-height: 80px;
      }
    }
  }

  &-info{
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media @tablet{
      align-self: center;
    }

    &__heading{
      display: flex;
      flex-direction: column;
      gap: 14px;
      flex-grow: 1;

      @media @tablet{
        gap: 8px;
      }
    }

    &__title{
      font-size: 20px;
      line-height: 1;

      @media @tablet{
        font-size: 16px;
      }

      @media @mobile{
        font-size: 14px;
      }
    }

    &__rate{
      display: flex;
      gap: 2px;

      &-star{
        width: 18px;
        height: 18px;
        background: url("/src/assets/images/icons/star.svg") no-repeat;

        @media @tablet{
          width: 12px;
          height: 12px;
          background-size: cover;
        }
      }
    }

    &__general{
      display: flex;
      justify-content: space-between;
      gap: 16px;

      @media @mobile{
        align-items: flex-start;
      }
    }

    &__price{
      display: flex;
      align-items: flex-start;
      gap: 22px;
      font-weight: 700;
      line-height: 1;
      margin-top: 2px;
      color: #969696;

      @media @mobile{
        gap: 8px;
        align-items: center;
      }

      span{
        &.crossed{
          text-decoration: line-through;

          @media @mobile{
            font-size: 10px;
          }
        }

        &.new-price{
          color: #2C7EF8;
          transform: scale(1.4);
          transform-origin: right;

          @media @mobile{
            transform: scale(1);
            font-size: 14px;
            transform-origin: center;
          }
        }
      }
    }

    &__balance{
      font-weight: lighter;
      display: flex;
      align-items: center;
      gap: 16px;
      color: #37465A;

      @media @tablet{
        font-size: 12px;
        gap: 8px;
      }
      @media @mobile{
        gap: 16px;
      }

      &::before{
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        background-color: #2C7EF8;
        border-radius: 50%;
        border: 4px solid #E3EEFF;
        flex-shrink: 0;

        @media @tablet{
          width: 6px;
          height: 6px;
          border: 3px solid #E3EEFF;
        }
      }
    }
  }

  &__description{
    font-size: 16px;
    line-height: 140%;
    color: #4D5254;

    @media @tablet{
      grid-column-start: 1;
      grid-column-end: 3;
      text-align: center;
      font-size: 14px;
    }

    @media @mobile{
      font-size: 12px;
    }
  }

  &__benefits{
    padding-left: 0;
    margin-left: 0;
    list-style: none;
    color: #4D5254;
    font-size: 16px;
    line-height: 160%;
    display: flex;
    flex-direction: column;
    gap: 9px;

    @media @tablet{
      font-size: 14px;
    }

    @media @mobile{
      gap: 11px;
      font-size: 12px;
      line-height: 160%;
    }

    li{
      &::before{
        content: '';
        width: 22px;
        height: 22px;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='22' viewBox='0 0 24 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.99976 11L8.65858 18L21.9998 4' stroke='%232C7EF8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: inline-block;
        margin-right: 12px;
        transform: translateY(5px);

        @media @tablet{
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>