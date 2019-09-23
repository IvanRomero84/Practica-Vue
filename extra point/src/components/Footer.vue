<template>
  <div class="footer">
    <b-row align-h="center">
      <b-col cols="2">
        <h6 class="footerP">Apeteat</h6>
        <p class="footerP">Servicio a empresas</p>
        <p class="footerP">Compromiso</p>
        <p class="footerP">Blog</p>
      </b-col>
      <b-col cols="2">
        <h6 class="footerP">Ayuda</h6>
        <p class="footerP">Contacto</p>
        <p class="footerP">FAQs</p>
        <p class="footerP">Legal</p>
      </b-col>
      <b-col cols="2">
        <h6 class="footerP">Seamos amigos</h6>
        <p class="footerP">Facebook</p>
        <p class="footerP">Instagram</p>
        <p class="footerP">Twitter</p>
        <p class="footerP">Linkedin</p>
      </b-col>
      <b-col cols="2"></b-col>
      <b-col cols="3">
        <img src="../../public/ico-enisa.svg" alt="enisa" width="15%" />
      </b-col>
    </b-row>
    <b-row align-h="around">
      <hr />
      <b-col cols="6">
        <a>
          <img src="../../public/ico-visa.svg" alt="visa" width="7%" />
        </a>
        <a>
          <img src="../../public/ico-mastercard.svg" alt="mc" width="6%" />
        </a>
        <a>
          <img src="../../public/ico-sodexo.svg" alt="sodexo" width="14%" />
        </a>
        <a>
          <img src="../../public/ico-ticket-restaurant.svg" alt="ticket" width="14%" />
        </a>
        <a>
          <img src="../../public/ico-cheque-dejeuner-1.svg" alt="ticketTwo" width="14%" />
        </a>
      </b-col>
      <b-col cols="3">
        <small class="copyright">Copyright © 2019 apeteat | Todos los derechos regístrados.</small>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </div>
</template>


<script>
import "./Footer.css";

export default {
  name: "Footer"
};
</script>