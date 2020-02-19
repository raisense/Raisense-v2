<template>
  <div id="work">
    <Hero :data="hero.work"></Hero>
    <div class="projects">
      <b-container>
        <b-row>
          <b-col cols="3">
            <div class="portfolio-nav">
              <ul class="categories">
                <li class="category" v-for="(cat, i) in categories" :key="i">
                  {{ cat }}
                </li>
              </ul>
            </div>
          </b-col>
          <b-col cols="9">
            <div class=".projects-list">
              <b-row>
                <b-col v-for="(project, i) in projects" cols="6" :key="i">
                  <div class="project">
                    <div class="project__image">
                      <img :src="'/images' + project.image" alt />
                    </div>
                    <h5 class="project__title">{{ project.title }}</h5>
                    <p class="project__desc">{{ project.desc }}</p>
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
}

.project {
  margin-bottom: 4rem;
}

.project__image {
  margin-bottom: 24px;
}
.project__image img {
  width: 100%;
}
.project__desc {
  color: #7d7d7d;
}

.categories {
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

export default {
  components: {
    Hero
  },
  computed: {
    projects() {
      return this.$store.state.projects.projects;
    },
    categories() {
      return this.$store.state.projects.categories;
    }
  },
  data() {
    return {
      hero: {
        work: {
          title: "Created with Dedication & Love",
          desc:
            "We love what we do and combine our expert knowledge with enthusiasm to go above and beyond for our clients."
        }
      }
    };
  }
};
</script>
