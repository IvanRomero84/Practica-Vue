<template>
  <div class="seccTwo">
    <h2>SERVICIO A EMPRESAS</h2>
    <p class="seccTwoP">
      Apeteat es el socio perfecto para las empresas que se preocupan por la
      alimentación de sus empleados y la responsabilidad social corporativa.
    </p>
    <b-row align-h="center">
      <b-col cols="4">
        <img src="../../public/servicio-01.svg" alt="srv1" width="100%" />
      </b-col>
      <b-col cols="4" class="imgGrid">
        <h3>CANTINA VIRTUAL</h3>
        <p
          class="seccTwoPGrid"
        >Servicios de cantina virtual para satisfacer la demanda individual diaria de almuerzos de toda la empresa.</p>
        <b-button variant="outline-success">SABER MÁS</b-button>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4" class="imgGrid">
        <h3>APETEAT CORNER</h3>
        <p class="seccTwoPGrid">Disfruta de toda la experiencia apeteat dentro de tu empresa.</p>
        <b-button variant="outline-success">SABER MÁS</b-button>
      </b-col>
      <b-col cols="4">
        <img src="../../public/servicio-03.svg" alt="srv3" width="100%" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="4">
        <img src="../../public/servicio-02.svg" alt="srv2" width="100%" />
      </b-col>
      <b-col cols="4" class="imgGrid">
        <h3>CATERING "FINGER FOOD"</h3>
        <p
          class="seccTwoPGrid"
        >La mejor solución para disfrutar sin complicaiones de una comida sana y rica mientras estas reunido.</p>
        <b-button variant="outline-success">SABER MÁS</b-button>
      </b-col>
    </b-row>
  </div>
</template>


<script>
import "./SecTwo.css";

export default {
  name: "SecTwo"
};
</script>