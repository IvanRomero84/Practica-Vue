<template>
  <div id="app">
    <SecOne />
    <SecTwo />
    <SecThree />
    <Footer />
  </div>
</template>

<script>
import SecOne from "./components/SecOne.vue";
import SecTwo from "./components/SecTwo";
import SecThree from "./components/SecThree";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    SecOne,
    SecTwo,
    SecThree,
    Footer
  }
};
</script>


