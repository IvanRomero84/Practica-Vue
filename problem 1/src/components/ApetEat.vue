<template>
  <div class="body">
    <b-row>
      <b-col cols="2">
        <h4 class="entrantes">Entrantes</h4>
      </b-col>
      <b-col col="10">
        <hr class="entrantes" />
      </b-col>
    </b-row>

    <section id="salad" class="row">
      <Card
        v-for="(item, index) in $store.state.salad"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:price="item.price"
        v-bind:image="item.image"
      />
    </section>
    <section id="rice" class="row">
      <Card
        v-for="(item, index) in $store.state.rice"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:price="item.price"
        v-bind:image="item.image"
      />
    </section>
    <section id="chicken" class="row">
      <Card
        v-for="(item, index) in $store.state.chicken"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="item.id"
        v-bind:title="item.title"
        v-bind:price="item.price"
        v-bind:image="item.image"
      />
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import "./ApetEat.css";

export default {
  name: "ApetEat",
  components: {
    Card
  }
};
</script>


