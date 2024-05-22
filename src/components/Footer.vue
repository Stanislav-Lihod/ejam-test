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
  font-size: 16px;
  line-height: 140%;

  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
}
</style>
