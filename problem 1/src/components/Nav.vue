<template>
  <nav>
    <div class="row">
      <b-button
        variant="outline-success"
        class="btn verde"
        @click="$store.commit('showAll')"
      >Entrantes</b-button>

      <button class="btn">De cuchara</button>
      <button class="btn" @click="$store.commit('showChicken')">Pollo</button>
      <button class="btn" @click="$store.commit('showRice')">Arroces y cereales</button>
      <button class="btn" @click="$store.commit('showSalad')">Ensaladas y zumos</button>
      <div class="row">
        <img class="cart" src="../../public/shopping-cart-solid.svg" alt="cart" width="5%" />
        <p class="counter" id="cart">{{$store.state.numero}}</p>
      </div>
    </div>
    <div class="hr"></div>
  </nav>
</template>

<script>
import "./Nav.css";

export default {
  name: "Nav"
};
</script>


