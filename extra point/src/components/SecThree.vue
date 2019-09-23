<template>
  <div>
    <parallax :fixed="true">
      <div class="opacity2">
        <div class="seccThree">
          <b-row align-h="center">
            <b-col cols="8">
              <p class="seccThreeP">
                No esperes más, empieza a disfrutar a
                diario de una comida sana.
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
    </parallax>
  </div>
</template>


<script>
import "./SecThree.css";
import Parallax from "vue-parallaxy";

export default {
  name: "SecThree",
  components: {
    Parallax
  }
};
</script>