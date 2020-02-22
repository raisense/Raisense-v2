<template>
  <div id="our-works">
    <b-container>
      <div class="our-works__header">
        <h2 class="header-title">Our works</h2>
        <div class="header-info">
          We love what we do and combine our expert knowledge with enthusiasm to
          go above and beyond for our clients.
        </div>
      </div>
      <div class="our-works__content">
        <b-row>
          <b-col cols="12" sm="6" v-for="(project, i) in projects" :key="i">
            <div class="project">
              <div class="project__image">
                <img :src="project.data.image.url" :alt="project.data.name[0].text" />
              </div>
              <p class="project__title">{{ project.data.name[0].text }}</p>
              <p class="project__desc">{{ project.data.description[0].text }}</p>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="button-more">
        <nuxt-link :to="localePath('/work')">See all works</nuxt-link>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["projects"],
  data() {
    return {};
  }
};
</script>

<style scoped>
#our-works {
  margin-bottom: 8rem;
}

.our-works__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.header-info {
  width: 300px;
  text-align: right;
  color: #7d7d7d;
}

.project {
  margin-bottom: 4rem;
  /* box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2); */
}
.project__title {
  font-size: 2em;
  margin-bottom: 10px;
  font-weight: bold;
}

.project__image {
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  height: 400px;
}

.project__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project__image {
  margin-bottom: 24px;
}

.button-more {
  padding: 12px 24px;
  border: 1px solid #333;
  border-radius: 2px;
  width: fit-content;
  margin: 0 auto;
}

.button-more a {
  text-decoration: none;
  color: #333;
}
</style>
