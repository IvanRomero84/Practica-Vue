<template>
  <div>
    <Nav />
    <div class="opacity">
      <div class="seccOne">
        <b-row align-h="center">
          <b-col cols="8">
            <h1>DISFRUTA DE UN ALMUERZO RICO, SANO Y COMPROMETIDO EN LA OFICINA</h1>
            <p class="seccOneP">
              Comer bien a diario es posible.
              <b>¿Pedimos?</b>
            </p>
            <div class="btn">
              <b-button variant="success">¡A COMER!</b-button>
              <b-button variant="outline-light">SERVICIO A EMPRESAS</b-button>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>


<script>
import Nav from "./Nav";
import "./SecOne.css";

export default {
  name: "SecOne",
  components: {
    Nav
  }
};
</script>




