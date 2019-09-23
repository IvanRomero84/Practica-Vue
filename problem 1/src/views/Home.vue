<template>
  <div class="home">
    <div class="margin">
      <img alt="apetEat logo" src="../../public/logo.svg" />
      <div>
        <button class="btnMenu">Menú completo 9€</button>
        <button class="btnMenu">Medio Menú 6€</button>
      </div>
    </div>
    <Nav />
    <ApetEat />
  </div>
</template>

<script>
// @ is an alias to /src
import ApetEat from "@/components/ApetEat.vue";
import Nav from "@/components/Nav.vue";
import "./Home.css";

export default {
  name: "home",
  components: {
    ApetEat,
    Nav
  }
};
</script>
