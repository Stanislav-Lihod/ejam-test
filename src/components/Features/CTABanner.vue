<script setup>
</script>

<template>
  <div class="cta-banner">
    <button class="cta-button"><span>YES - CLAIM MY DISCOUNT</span></button>
    <div class="info-bar">
      <span>Free Shipping</span>
      <span>Secure 256-Bit SSL Encryption</span>
      <div class="payment-icons">
        <img src="/src/assets/images/icons/pays/visa.svg" alt="Visa" />
        <img src="/src/assets/images/icons/pays/shoppay.svg" alt="Shop pay" />
        <img src="/src/assets/images/icons/pays/paypal.svg" alt="Paypal" />
        <img src="/src/assets/images/icons/pays/mastercard.svg" alt="Master card" />
        <img src="/src/assets/images/icons/pays/gpay.svg" alt="Google pay" />
        <img src="/src/assets/images/icons/pays/applepay.svg" alt="Apple pay" />
        <img src="/src/assets/images/icons/pays/amex.svg" alt="Amex" />
      </div>
    </div>
    <a href="#" class="decline-link">NO THANKS, I DON'T WANT THIS.</a>
  </div>
</template>

<style lang="less" scoped>

.cta-banner{
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(100% - 8px);
  margin-top: 13px;

  @media @tablet{
    width: 100%;
  }

  @media @mobile{
    margin-top: 9px;
  }
}

.cta-button {
  background-color: #59AE43;
  color: white;
  padding: 16px 30px;
  border: none;
  font-weight: bold;
  border-radius: 99px;
  font-size: 20px;
  cursor: pointer;
  transition: .3s;

  @media @tablet {
    font-size: 16px;
  }

  @media @mobile{
    font-size: 14px;
  }

  &:hover {
    background-color: #008f4c;
  }

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    &::after{
      content: '';
      width: 16px;
      height: 16px;
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.6988 8.69875C17.0847 8.31284 17.0847 7.68716 16.6988 7.30125L10.41 1.01248C10.0241 0.626565 9.39839 0.626565 9.01248 1.01248C8.62656 1.39839 8.62656 2.02407 9.01248 2.40998L14.6025 8L9.01248 13.59C8.62656 13.9759 8.62656 14.6016 9.01248 14.9875C9.39839 15.3734 10.0241 15.3734 10.41 14.9875L16.6988 8.69875ZM0 8.98819H16V7.01181H0V8.98819Z' fill='white'/%3E%3C/svg%3E%0A");
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

.info-bar {
  padding: 8px 14px;
  border: 1px solid #CFCFCF;
  color: #4D5254;
  border-radius: 4px;
  gap: 16px;
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 1;

  @media @tablet {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }
  @media @mobile {
    margin-top: 3px;
  }

  span{
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    align-items: center;

    &:nth-child(2){
      border-left: 1px solid #CFCFCF;
      border-right: 1px solid #CFCFCF;
      padding: 0 12px;

      @media @tablet{
        border-right: none;
        padding-right: 0;
      }

      &::before{
        content: '';
        width: 12px;
        height: 12px;
        display: inline-block;
        background-image: url("data:image/svg+xml,%3Csvg width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_434)'%3E%3Cpath d='M9.625 5.99902H2.625C2.07272 5.99902 1.625 6.44674 1.625 6.99902V10.499C1.625 11.0513 2.07272 11.499 2.625 11.499H9.625C10.1773 11.499 10.625 11.0513 10.625 10.499V6.99902C10.625 6.44674 10.1773 5.99902 9.625 5.99902Z' stroke='%23696969' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M3.62598 5.99902V3.99902C3.62598 3.33598 3.88937 2.7001 4.35821 2.23126C4.82705 1.76242 5.46294 1.49902 6.12598 1.49902C6.78902 1.49902 7.4249 1.76242 7.89374 2.23126C8.36258 2.7001 8.62598 3.33598 8.62598 3.99902V5.99902' stroke='%23696969' stroke-width='1.33333' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_434'%3E%3Crect width='12' height='12' fill='white' transform='translate(0.5 0.5)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      }
    }
  }
}

.payment-icons {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;

  @media @tablet {
    border-top: 1px solid #CFCFCF;
    padding-top: 12px;
    flex-grow: 1;
    justify-content: center;
  }

  img {
    width: 24px;
    height: auto;
  }
}

.decline-link {
  margin-top: 8px;
  color: #F82C2C;
  font-size: 18px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media @tablet{
    font-size: 16px;
  }
  @media @mobile{
    font-size: 12px;
    margin-top: 3px;
  }
}

.decline-link:hover {
  text-decoration: none;
}
</style>
