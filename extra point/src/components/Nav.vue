<template>
  <div class="navigation">
    <b-nav>
      <b-container class="text-ligh">
        <b-row>
          <b-col cols="6">
            <a>Quienes somos</a>
            <a>Como funciona</a>
            <a>Servicio a empresas</a>
            <a>Compromiso</a>
          </b-col>
          <b-col cols="2">
            <img src="../../public/logo.svg" alt="logo" width="60%" />
          </b-col>

          <b-col cols="4">
            <b-button size="sm" variant="success">NUEVO PEDIDO</b-button>
            <a>
              <b>Hola, Pepe</b>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </b-nav>
  </div>
</template>

<script>
import "./Nav.css";

export default {
  name: "Nav"
};
</script>