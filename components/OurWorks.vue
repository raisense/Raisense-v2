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
          <b-col cols="6" v-for="(project, i) in projects" :key="i">
            <div class="project">
              <div class="project__image">
                <img :src="'/images' + project.image" :alt="project.title" />
              </div>
              <p class="project__title">{{ project.title }}</p>
              <p class="project__desc">{{ project.desc }}</p>
            </div>
          </b-col>
        </b-row>
      </div>
      <nuxt-link to="/">See all works</nuxt-link>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Samanta",
          desc: "Speech Recognition based offline vortial assistant",
          image: "/samantha.jpg",
          src: "#"
        },
        {
          title: "C-Vision",
          desc: "AI-based ED technology for entrance exams and proctoring",
          image: "/cvision.jpg",
          src: "#"
        },
        {
          title: "Partiya Edi",
          desc: "Online restaurant with Delivery service",
          image: "/partiyaedi.jpg",
          src: "#"
        },
        {
          title: "Samanta",
          desc: "Speech Recognition based offline vortial assistant",
          image: "/samantha.jpg",
          src: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
.our-works__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.header-info {
  width: 300px;
  text-align: right;
  color: #7d7d7d;
}

.project {
  margin-bottom: 4rem;
}
.project__title {
  font-size: 2em;
  margin-bottom: 10px;
  font-weight: bold;
}

.project__image img {
  width: 100%;
}

.project__image {
  margin-bottom: 24px;
}
</style>
