<template>
  <div id="how-we-work">
    <Hero :data="hero"></Hero>
    <b-container>
      <div class="steps">
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="step">
              <h3 class="step__title">We keep you in the loop</h3>
              <p class="step__pretitle">Team Extension</p>
              <p class="step__desc">
                We start with workshops where our teams get to meet in person
                and discuss requirements for the project. Once we agree on the
                scope of work, we assemble a unit of engineers and designers to
                act as your team’s extension.
              </p>
              <p class="step__pretitle">Single Point of Contact</p>
              <p class="step__desc">
                Our team work with your company directly taking part in Slack
                discussions, scrums and conference calls while a senior leader
                remains responsible for coordination. Tools like GitHub, Jira
                and Confluence help everyone stay on the same page when making
                and documenting technical decisions.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="step">
              <h3 class="step__title">We deliver more than code</h3>
              <p class="step__pretitle">Agile & Product Driven</p>
              <p class="step__desc">
                We start with workshops where our teams get to meet in person
                and discuss requirements for the project. Once we agree on the
                scope of work, we assemble a unit of engineers and designers to
                act as your team’s extension.
              </p>
              <p class="step__pretitle">Thinking Ahead</p>
              <p class="step__desc">
                Our team work with your company directly taking part in Slack
                discussions, scrums and conference calls while a senior leader
                remains responsible for coordination. Tools like GitHub, Jira
                and Confluence help everyone stay on the same page when making
                and documenting technical decisions.
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col>
            <div class="step">
              <h3 class="step__title">We build exeptional software</h3>
              <p class="step__pretitle">Maintainable & Quality Code</p>
              <p class="step__desc">
                You’ll work with engineers who specialize in delivering complex
                systems that remain maintainable and scalable. We maintain high
                coding standards, automate processes to reduce maintenance costs
                and make sure the code is self-documenting.
              </p>
              <blockquote>
                Strict code reviews, automated tests, and continuous delivery
                help us detect problems before they arise.
              </blockquote>
              <p class="step__desc">
                At the same time our focus on usability allows us to build
                software that is both intuitive and easy to use.
              </p>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="technologies">
        <b-row>
          <b-col cols="12" md="4">
            <h3>Technology & Tools</h3>
            <p
              class="mb-5 mb-md-0"
            >We are constantly evolving and expanding our knowledge of new technologies and tools</p>
          </b-col>
          <b-col cols="12" md="8">
            <b-row align-h="center">
              <b-col
                cols="3"
                v-for="(tech, i) in techs"
                :key="i"
                class="d-flex justify-content-center align-items-center mb-5"
              >
                <img :src="'/images/technologies' + tech" class="tech-img" alt />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import Hero from "~/components/Hero";
export default {
  components: {
    Hero
  },
  computed: {
    hero() {
      return this.$store.state.hero.hero.workProcess;
    }
  },
  data() {
    return {
      techs: [
        "/digitalocean.svg",
        "/django.svg",
        "/es6.svg",
        "/figma.svg",
        "/kotlin.svg",
        "/maya.svg",
        "/php.svg",
        "/python.svg",
        "/react.svg",
        "/vue.svg",
        "/webgl.svg",
        "/x.svg"
      ]
    };
  }
};
</script>

<style scoped>
.steps {
  padding: 12em 0;
}
.step {
  margin-bottom: 12em;
}

.step__pretitle {
  font-size: 28px;
  margin-bottom: 16px;
}

.step__title {
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 1em;
}

.step__desc {
  color: #7d7d7d;
}

blockquote {
  border-left: 2px solid #000;
  padding-left: 24px;
  font-size: 18px;
  font-weight: bold;
}

.technologies h3 {
  font-size: 45px;
  font-weight: bold;
}

.tech-img {
  /* width: 100%;
  height: ; */
}
</style>
