<template>
  <div id="team">
    <Hero :data="hero"></Hero>
    <div class="members">
      <b-container>
        <b-row>
          <div class="member" v-for="(member, i) in members" :key="i">
            <div class="member__img">
              <img :src="member.data.avatar.url" :alt="member.data.avatar.alt" />
            </div>
            <p class="member__title">{{member.data.name[0].text}}</p>
            <p class="member__desc">{{member.data.job[0].text}}</p>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped>
.member {
  width: calc(100% / 3);
  padding: 0 15px;
  margin-bottom: 32px;
}

.member:nth-child(2n) {
  width: calc(100% / 4);
}

.member:nth-child(3n + 1) {
  width: calc(100% / 4);
}

.member:nth-child(2n + 1) {
  flex-grow: 2;
}

.member__title {
  font-size: 1.25em;
  font-weight: bold;
  margin-bottom: 8px !important;
}

.member__img {
  width: 100%;
  height: 400px;
  margin-bottom: 16px;
}

.member__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import Hero from "~/components/Hero";

export default {
  components: {
    Hero
  },
  computed: {
    hero() {
      return this.$store.state.hero.hero.team;
    }
  },

  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      const res = await api.query(
        Prismic.Predicates.at("document.type", "members")
      );

      return {
        members: res.results
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
