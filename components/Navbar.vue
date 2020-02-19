<template>
  <div id="nav">
    <b-container>
      <div class="wrapper">
        <div class="left">
          <div class="logo" @click.prevent="isMenuVisible = false">
            <nuxt-link :to="localePath('/')">
              <img src="~assets/images/logo.svg" alt />
            </nuxt-link>
          </div>
        </div>
        <div class="right">
          <div
            class="nav-icon"
            @click.prevent="isMenuVisible = !isMenuVisible"
            :class="{ closed: isMenuVisible }"
          >
            <div class="nav-icon__block"></div>
          </div>
        </div>
      </div>
    </b-container>
    <div
      class="menu"
      v-if="isMenuVisible == true"
      :class="{ 'menu-open': isMenuVisible }"
    >
      <b-container>
        <div class="menu-content">
          <div class="background">
            <div></div>
            <div></div>
          </div>

          <div class="menu-list">
            <div class="menu-item" @click.prevent="isMenuVisible = false">
              <nuxt-link :to="localePath('/work')">Works</nuxt-link>
            </div>

            <div class="menu-item" @click.prevent="isMenuVisible = false">
              <nuxt-link :to="localePath('/about')">About Us</nuxt-link>
            </div>
            <div class="menu-item" @click.prevent="isMenuVisible = false">
              <nuxt-link :to="localePath('/how-we-work')"
                >How We Work</nuxt-link
              >
            </div>
            <div class="menu-item" @click.prevent="isMenuVisible = false">
              <nuxt-link :to="localePath('/team')">Team</nuxt-link>
            </div>

            <div class="langs">
              <span class="langs__item" @click.prevent="isMenuVisible = false">
                <nuxt-link :to="switchLocalePath('ru')">
                  Rus
                </nuxt-link>
              </span>
              <span class="langs__item" @click.prevent="isMenuVisible = false">
                <nuxt-link :to="switchLocalePath('en')">
                  Eng
                </nuxt-link>
              </span>
              <span class="langs__item" @click.prevent="isMenuVisible = false">
                <nuxt-link :to="switchLocalePath('uz')">
                  O'zb
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false
    };
  },
  computed: {}
};
</script>

<style scoped>
#nav {
  padding-top: 40px;
  position: absolute;
  top: 0;
  z-index: 40;
  left: 0;
  width: 100%;
}
#nav .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  position: relative;
  z-index: 999;
}

.logo img {
  width: 32px;
  height: 32px;
}

.nav-icon {
  position: relative;
  z-index: 9999;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.nav-icon.closed .nav-icon__block:after {
  transform: rotate(45deg);
  transform-origin: 100% 50%;
}

.nav-icon.closed .nav-icon__block {
  background-color: transparent;
  transition: 0.1s background-color ease;
}

.nav-icon.closed .nav-icon__block:before {
  transform-origin: 100% 50%;
  transform: rotate(-45deg);
}
.nav-icon__block {
  display: block;
  width: 30px;
  height: 2px;
  background-color: #333;
  position: relative;
}

.nav-icon__block:before,
.nav-icon__block:after {
  transition: 0.4s transform ease-out;
  transform-origin: 100% 50%;
  position: absolute;
  content: "";
  width: 100%;
  height: 2px;
  background: #333;
}

.nav-icon__block:before {
  top: -10px;
  left: 0;
}

.nav-icon__block:after {
  bottom: -10px;
  left: 0;
}

.right {
  display: flex;
  align-items: center;
}

.langs {
  margin-right: 2em;
}

.langs__item:not(:last-child) {
  padding-right: 5px;
  /* line-height: -10px; */
  border-right: 1px solid #333;
}

.menu {
  padding-top: 40px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-y: hidden;
}

.menu-content {
  padding-top: 80px;
}

.menu-list {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.menu-item {
  text-align: right;

  font-size: 2em;
  margin-bottom: 32px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.menu-item {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.menu-item:before {
  content: "";
  position: absolute;
  top: 58%;
  left: 0;
  width: 0%;
  height: 0.075em;
  background: #000;
  pointer-events: none;
}

.menu-item:after {
  content: "";
  position: absolute;
  top: 58%;
  right: 0;
  width: 0%;
  height: 0.075em;
  background: #000;
  right: 0;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  pointer-events: none;
}

.menu-item:hover:before {
  width: 100%;
  transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.menu-item:hover:after {
  transition: 0s;
  width: 100%;
  background: transparent;
}

.menu-item a {
  text-decoration: none;
  color: inherit;
}

.menu-content .background {
  width: 100%;
  height: 100%;
}

.menu-content .background div:first-child {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #eee;
  height: 100%;
  transform: translate(0, -100%);
  transition: 750ms all cubic-bezier(0.77, 0, 0.175, 1) 150ms;
}

.menu-open .menu-content .background div:first-child {
  transform: translate(0, 0);
}
</style>
