<template>
  <div>
    <Hero :data="heroMessage" :logo="true"></Hero>
    <b-container>
      <div id="services">
        <b-row>
          <b-col cols="12" sm="4">
            <h2>Our Services</h2>
          </b-col>
          <b-col cols="12" sm="4">
            <div role="tablist">
              <div class="accordion-item" v-for="(item, i) in items" :key="i">
                <div class="inner" v-if="i <= 3">
                  <div header-tag="header" class="p-1" role="tab">
                    <h5
                      block
                      v-b-toggle="'accordion-' + i"
                      class="service-item"
                      variant="info"
                    >{{ item.title }}</h5>
                  </div>
                  <b-collapse :id="'accordion-' + i" accordion="my-accordion" role="tabpanel">
                    <b-card-text>{{ item.desc }}</b-card-text>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" sm="4">
            <div role="tablist">
              <div class="accordion-item" v-for="(item, i) in items" :key="i">
                <div class="inner" v-if="i > 3">
                  <div header-tag="header" class="p-1" role="tab">
                    <h5
                      block
                      v-b-toggle="'accordion-' + i"
                      class="service-item"
                      variant="info"
                    >{{ item.title }}</h5>
                  </div>
                  <b-collapse :id="'accordion-' + i" accordion="my-accordion" role="tabpanel">
                    <b-card-text>{{ item.desc }}</b-card-text>
                  </b-collapse>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <OurWorks :projects="projects"></OurWorks>
    <Partners></Partners>
  </div>
</template>

<script>
import Hero from "~/components/Hero";
import Partners from "~/components/Partners";
import OurWorks from "~/components/OurWorks";

import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  components: {
    Hero,
    OurWorks,
    Partners
  },
  computed: {
    items() {
      return this.$store.state.services.services;
    },
    heroMessage() {
      const { messages, locale } = this.$i18n;
      return messages[locale].hero.index;
    }
  },
  data() {
    return {};
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      const res = await api.query(
        Prismic.Predicates.at("document.type", "project")
      );

      return {
        projects: res.results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
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

.accordion-item .inner {
  margin-bottom: 3rem;
}

.accordion-item h5 {
  width: fit-content;
  position: relative;
}

.accordion-item h5:after {
  content: "";
  width: 12px;
  height: 7px;
  background: url("../static/images/svg/arrow.svg");
  position: absolute;
  right: -20px;
  top: 50%;
  transform: rotate(0);
  transition: 0.12s transform ease-in-out;
}

.accordion-item h5.collapsed:after {
  transform: rotate(180deg);
  transition: 0.12s transform ease-in-out;
}
</style>
