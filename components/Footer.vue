<template>
  <div id="footer">
    <b-container>
      <b-row>
        <b-col>
          <div class="address">
            Chust street, Mirzo Ulugbek district,
            Tashkent Uzbekistan, 100070
          </div>
          <div class="map-link">
            <a href="#">We are on the map</a>
          </div>
          <div class="other-links">
            <a href="#">+998 97 256 56 54</a>
            <a href="#">info@raisense.uz</a>
          </div>
        </b-col>
        <b-col>
          <div class="footer-nav">
            <div class="footer-link" v-for="(nav,i) in footerNav" :key="i">
              <nuxt-link :to="nav.link">{{nav.name}}</nuxt-link>
            </div>
          </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <div class="bottom-line">© 2019, ALL RIGHT RESERVED 2019, RAISENSE.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerNav: [
        {
          link: "/work",
          name: "Works"
        },
        {
          link: "/about",
          name: "About Us"
        },
        {
          link: "/work",
          name: "How We Work"
        },
        {
          link: "/team",
          name: "Team"
        }
      ]
    };
  }
};
</script>

<style scoped>
#footer {
  background-color: #212128;
  padding-top: 64px;
  color: #fff;
}

#footer a {
  color: #fff;
}

#footer .address {
  width: 300px;
}

#footer .bottom-line {
  margin-top: 64px;
  padding: 26px;
  font-size: 14px;
  text-align: center;
  background-color: #15141a;
  color: #444;
}
</style>