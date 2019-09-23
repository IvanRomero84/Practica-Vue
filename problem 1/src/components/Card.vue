<template>
  <div class="col-md-4">
    <article class="plate-card">
      <img v-bind:src="image" alt="plato" />
      <h5>{{title}}</h5>
      <div class="row plus">
        <h6>+{{price}}€</h6>
        <button class="btn" @click="$store.commit('count')">+</button>
      </div>
    </article>
  </div>
</template>



<script>
import "./Card.css";

export default {
  name: "Card",
  props: {
    title: String,
    image: String,
    price: String
  }
};
</script>
