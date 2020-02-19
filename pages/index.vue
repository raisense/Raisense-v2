<template>
  <div>
    <Hero :data="hero.index"></Hero>
    <b-container>
      <div id="services">
        <b-row>
          <b-col>
            <h2>Our Services</h2>
          </b-col>
          <b-col>
            <div role="tablist">
              <div class="accordion-item" v-for="(item, i) in items" :key="i">
                <div class="inner" v-if="i <= 3">
                  <div header-tag="header" class="p-1" role="tab">
                    <h5
                      block
                      v-b-toggle="'accordion-' + i"
                      class="service-item"
                      variant="info"
                    >
                      {{ item.title }}
                    </h5>
                  </div>
                  <b-collapse
                    :id="'accordion-' + i"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ item.desc }}</b-card-text>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div role="tablist">
              <div class="accordion-item" v-for="(item, i) in items" :key="i">
                <div class="inner" v-if="i > 3">
                  <div header-tag="header" class="p-1" role="tab">
                    <h5
                      block
                      v-b-toggle="'accordion-' + i"
                      class="service-item"
                      variant="info"
                    >
                      {{ item.title }}
                    </h5>
                  </div>
                  <b-collapse
                    :id="'accordion-' + i"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-text>{{ item.desc }}</b-card-text>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <OurWorks></OurWorks>
    <Partners></Partners>
  </div>
</template>

<script>
import Hero from "~/components/Hero";
import Partners from "~/components/Partners";
import OurWorks from "~/components/OurWorks";

export default {
  components: {
    Hero,
    OurWorks,
    Partners
  },
  computed: {
    items() {
      return this.$store.state.services.services;
    }
  },
  data() {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch.
        `,
      hero: {
        index: {
          title: "Hey, we are RAISENSE",
          desc: "We are Software Company based in Tashkent"
        }
      }
    };
  }
};
</script>

<style>
.service-item {
  cursor: pointer;
}

#services {
  height: 700px;
  padding-top: 8rem;
}

*[role="tablist"]:nth-child(n + 3) {
  margin-bottom: 4rem;
}
</style>
