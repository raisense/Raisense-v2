<template>
  <div id="work">
    <Hero :data="heroMessage.work" :logo="false"></Hero>
    <div class="projects">
      <b-container>
        <b-row>
          <b-col cols="12" sm="3">
            <div class="portfolio-nav">
              <ul class="categories">
                <li
                  class="category"
                  v-for="(cat, i) in categories"
                  :key="i"
                  :class="{ active: cat.id == currentType }"
                  @click="getProject(cat.id, $event)"
                >{{ cat.name }}</li>
              </ul>
            </div>
          </b-col>
          <b-col cols="12" sm="9">
            <div v-if="loading">
              <loader></loader>
            </div>
            <h5 v-if="projects.length == 0 && !loading">
              <empty></empty>
            </h5>
            <div class=".projects-list" v-if="!loading">
              <b-row>
                <b-col v-for="(project, i) in projects" cols="12" sm="6" :key="i">
                  <div class="project">
                    <div class="project__image">
                      <img :src="project.data.image.url" alt />
                    </div>
                    <h5 class="project__title">{{ project.data.name[0].text }}</h5>
                    <p class="project__desc">{{ project.data.description[0].text }}</p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.projects {
  padding-top: 4rem;
  margin-top: 24px;
}

.project {
  margin-bottom: 4rem;
}

.project__title {
  font-weight: bold;
  font-size: 1.5rem;
}

.project__image {
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 400px;
  margin-bottom: 24px;
}
.project__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project__desc {
  color: #7d7d7d;
}

.categories {
  padding: 0;
  list-style: none;
  font-size: 18px;
}

.category {
  margin-bottom: 20px;
  width: fit-content;
  cursor: pointer;
  position: relative;
  color: #666;
}

.category.active {
  font-weight: bold;
  color: #000;
  transition: 0.1s font-weight ease-out;
}

.category.active:before,
.category.active:after {
  background-color: #000;
  height: 2px;
}

.category:before {
  position: absolute;
  content: "";
  width: 0%;
  background-color: #666;
  height: 1.25px;
  bottom: 0;
  left: 0;
}

.category:hover:before {
  width: 100%;
  transition: 0.3s width cubic-bezier(0.22, 0.61, 0.36, 1);
  transition-delay: 0.6s;
}

.category::after {
  position: absolute;
  content: "";
  width: 100%;
  background-color: #666;
  height: 1.25px;
  right: 0;
  bottom: 0;
}

.category:hover::after {
  width: 0%;
  transition: 0.3s width cubic-bezier(0.22, 0.61, 0.36, 1);
}
</style>

<script>
import Hero from "~/components/Hero";
import loader from "~/components/Loader";
import empty from "~/components/Empty";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  components: {
    Hero,
    loader,
    empty
  },

  computed: {
    categories() {
      return this.$store.state.projects.categories;
    },
    heroMessage() {
      return this.$i18n.messages[this.$i18n.locale].hero;
    }
  },

  data() {
    return {
      loading: false,
      currentType: "",
      projects: []
    };
  },

  created() {
    // console.log(this.heroMessage);
  },
  methods: {
    getProject(tag, $event) {
      this.loading = true;
      this.currentType = tag;

      $event.target.classList.toggle("active");
      const api = Prismic.getApi(PrismicConfig.apiEndpoint);

      if (tag == "*") {
        api
          .then(api =>
            api.query(Prismic.Predicates.at("document.type", "project"))
          )
          .then(res => {
            this.projects = res.results;
            this.loading = false;
          });
      } else {
        api
          .then(api => api.query(Prismic.Predicates.at("document.tags", [tag])))
          .then(res => {
            this.projects = res.results;
            this.loading = false;
          });
      }
    }
  },
  async asyncData({ context, error, req, store }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      const res = await api.query(
        Prismic.Predicates.at("document.type", "project")
      );

      let hero = [];

      // switch (store.i18n.locale) {
      //   case "en":
      //     hero = store.i18n.messages.en;
      //     break;
      //   case "uz":
      //     hero = store.i18n.messages.uz;
      //     break;
      //   case "ru":
      //     hero = store.i18n.messages.ru;
      //     break;
      //   default:
      //     hero = store.i18n.messages.ru;
      //     break;
      // }

      return {
        currentType: "*",
        projects: res.results,
        hero: hero
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
