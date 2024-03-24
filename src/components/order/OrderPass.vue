<script>
export default {
  name: "OrderPass.vue"
}
</script>

<template>
  <section class="skip">
    <div class="container">
      <h2>Alternatively, you have the option to bypass this step and generate <br/>a domain at a later time.</h2>
      <a href="#">I'll generate my domain at a later time ></a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.skip {
  padding: 5rem 0;

  .container {
    text-align: center;

    h2 {
      @include fluid-type($text-lg, $text-2xl, 500, $gray-200);
    }

    a {
      @include fluid-type($text-xl, $text-4xl, 700, $blue-100);
      display: block;
      margin-top: 0.938rem;
    }
  }
}

</style>