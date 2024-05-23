<script setup>

</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-info">
        <div class="footer-info__item">Copyright (c) 2023</div>
        <a href="mailto:clarifionsupport@clarifion.com" class="footer-info__item">clarifionsupport@clarifion.com</a>
      </div>
      <div class="footer-encryption">Secure 256-bit SSL encryption.</div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
footer{
  background-color: #252F3D;
  padding: 24px 0;
  color: #ffffff;

  @media @mobile{
    padding: 20px 0;
  }

  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media @mobile{
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
      font-size: 12px;
    }
  }
}

.footer{
  &-info{
    display: flex;
    gap: 16px;

    &__item{
      &:first-child{
        &::after{
          content: '|';
          margin-left: 16px;
        }
      }
    }

    a{
      color: #ffffff;
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  &-encryption{
    line-height: 150%;
    display: flex;
    align-items: center;
    gap: 16px;

    &::before{
      content: '';
      width: 16px;
      height: 16px;
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z' stroke='white' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203' stroke='white' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-size: cover;

      @media @tablet{
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>
