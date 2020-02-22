<template>
  <footer>
    <div class="footer-form">
      <b-container>
        <div class="form-header">
          <b-row>
            <b-col cols="12" sm="6">
              <h3>Drop us a line</h3>
            </b-col>
            <b-col cols="12" sm="6">
              <p class="text-xs-left text-md-right">Let’s do a cool project together</p>
            </b-col>
          </b-row>
        </div>
        <form action="/">
          <b-row>
            <b-col cols="12" sm="6">
              <div class="floating">
                <label for="name" class="floating__label"></label>
                <input type="text" class="floating__input" id="name" placeholder="Name" />
              </div>
              <div class="floating">
                <label for="name" class="floating__label"></label>
                <input type="text" class="floating__input" id="name" placeholder="E-mail" />
              </div>
              <div class="floating">
                <label for="name" class="floating__label"></label>
                <input type="text" class="floating__input" id="name" placeholder="Phone number" />
              </div>
            </b-col>
            <b-col class="d-flex justify-content-start flex-column" cols="12" sm="6">
              <div class="floating">
                <label for="name" class="floating__label"></label>
                <textarea class="floating__textarea" id="name" placeholder="Your message"></textarea>
              </div>
              <input type="submit" class="leet-link submit align-self-end" value="Send" />
              <!-- <button href="#" class="leet-btn submit align-self-end">
                <div class="button-background">
                  <div class="left"></div>
                  <div class="center"></div>
                  <div class="right"></div>
                </div>
                <div class="text">Submit your message</div>
                <div class="plus-icon">+</div>
              </button>-->
            </b-col>
          </b-row>
        </form>
      </b-container>
    </div>
    <div id="footer">
      <b-container>
        <b-row>
          <b-col cols="12" sm="4">
            <div class="address mb-4">
              Chust street, Mirzo Ulugbek district,
              Tashkent Uzbekistan, 100070
            </div>
            <div class="map-link mb-4">
              <a href="#" class="leet-link">We are on the map</a>
            </div>
            <div class="other-links mb-4">
              <a href="tel:+998 97 256 56 54">+998 97 256 56 54</a>
              <br />
              <a href="mailto:info@raisense.uz">info@raisense.uz</a>
            </div>
          </b-col>
          <b-col class="d-flex justify-content-start justify-content-sm-end" cols="6" sm="4">
            <div class="footer-nav">
              <div class="footer-link" v-for="(nav,i) in footerNav" :key="i">
                <nuxt-link :to="localePath(nav.link)" class="leet-link">{{nav.name}}</nuxt-link>
              </div>
            </div>
          </b-col>
          <b-col class="d-flex justify-content-end" cols="6" sm="4">
            <ul class="links">
              <li>
                <a href="https://www.facebook.com/raisense.uz/" class="leet-link">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/raisense.uz/" class="leet-link">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/raisense" class="leet-link">Linkedin</a>
              </li>
              <li>
                <a href="https://t.me/raisense" class="leet-link">Twitter</a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <div class="bottom-line mb-sm-0">© 2019, ALL RIGHT RESERVED 2019, RAISENSE.</div>
    </div>
  </footer>
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

/* #footer .map-link {
  width: fit-content;
  border-bottom: 1px solid #fff;
}

#footer .map-link a {
  text-decoration: none !important;
} */

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

.form-header {
  padding: 4rem 0;
}

.form-header h3 {
  font-size: 40px;
  font-weight: bold;
}

.form-header p {
  font-size: 18px;
}

.submit {
  color: #fff;
  /* width: fit-content; */
  /* text-align: right; */
  font-size: 1rem;
}

.footer-form {
  background-color: #15141a;
  color: #fff;
}

.footer-form input,
.footer-form textarea {
  background-color: transparent;
  border: 0;
  padding: 12px 24px;
  border-bottom: 1px solid #fff;
}

.floating__input {
  border-width: 0;
  margin-bottom: 3rem;
  color: #fff;
  width: 80%;
}

.floating__textarea {
  border-width: 0;
  height: 147px;
  margin-bottom: 3rem;
  color: #fff;
  width: 100%;
}

.floating__input:focus {
  outline: none;
}

.footer-link {
  margin-bottom: 2rem;
}

.links {
  list-style: none;
}

.links li {
  margin-bottom: 2rem;
}
</style>