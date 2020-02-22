<template>
  <div id="partners">
    <b-container>
      <div class="partners__header">
        <h2 class="header-title">Our partners</h2>
        <div class="header-info">
          We believe direct collaboration with our clients is essential to
          bringing unique and engaging experiences to life.
        </div>
      </div>
      <div class="partners-list">
        <b-row>
          <b-col
            v-for="(partner, i) in partners"
            :key="i"
            cols="6"
            sm="6"
            md="3"
            lg="2"
            class="d-flex justify-content-center align-items-center"
          >
            <a :href="partner.src" class="mb-4">
              <img :src="'/images/svg' + partner.image" :alt="partner.title" :title="partner.title" />
            </a>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          title: "C-Space",
          image: "/cspace.svg",
          src: "#"
        },
        {
          title: "Digital Republik",
          image: "/digitalrepublik.svg",
          src: "#"
        },
        {
          title: "Lotos",
          image: "/lotos.svg",
          src: "#"
        },
        {
          title: "Inha in Tashkent",
          image: "/inha.svg",
          src: "#"
        },
        {
          title: "Partiya Edi",
          image: "/partiyaedi.svg",
          src: "#"
        },
        {
          title: "Level Up Solutions",
          image: "/levelup.svg",
          src: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
.partners-list {
  padding: 4rem 0;
}
.partners__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.header-info {
  width: 300px;
  text-align: right;
  color: #7d7d7d;
}
</style>
