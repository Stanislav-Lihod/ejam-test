<script setup>

</script>

<template>
  <header>
    <div class="header-benefits">
      <div class="container">
        <div class="header-benefits__content">
          <div class="header-benefits__item">30-DAY SATISFACTION GUARANTEE</div>
          <div class="header-benefits__item">Free delivery on orders over $40.00</div>
          <div class="header-benefits__item">50.000+ HAPPY CUSTOMERS</div>
          <div class="header-benefits__item">100% Money Back Guarantee</div>
        </div>
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
    font-size: 12px;
    line-height: 1;
    background-color: #252F3D;
    padding: 15px 0 13px;

    @media @tablet{
      padding: 10px 0;
    }

    &__content{
      display: flex;
      gap: 40px;
      justify-content: space-between;

      @media @tablet{
        gap: 24px;
      }
    }

    &__item{
      color: #ffffff;
      text-transform: uppercase;

      @media @tablet{
        text-align: center;
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
        max-height: 16px;
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
    }
  }
}
</style>
