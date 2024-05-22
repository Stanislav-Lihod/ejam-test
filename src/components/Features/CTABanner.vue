<script setup>
</script>

<template>
  <div class="cta-banner">
    <button class="cta-button">YES - CLAIM MY DISCOUNT →</button>
    <div class="info-bar">
      <span>Free Shipping</span>
      <span>Secure 256-Bit SSL Encryption.</span>
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

<style scoped>

.cta-banner{
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: calc(100% - 8px);
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

  &:hover {
    background-color: #008f4c;
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

  span{
    flex-shrink: 0;

    &::after{
      content: '|';
      margin-left: 16px;
    }
  }
}

.payment-icons {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;

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
}

.decline-link:hover {
  text-decoration: none;
}
</style>
