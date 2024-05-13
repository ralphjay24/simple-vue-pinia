<script>
import { RouterLink, RouterView } from 'vue-router'
import NavMenu from './components/NavMenu.vue'
import { useTheme } from 'vuetify'

export default {
  name: "HeaderName",
  components: {
    NavMenu,
  },
  methods: {
    toggleTheme() {
      const theme = this.$vuetify.theme.current.dark ? 'light' : 'dark'

      document.documentElement.setAttribute('theme-mode', theme)
      this.$vuetify.theme.global.name = theme
    },
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <NavMenu header="My Vue App" />
    </div>

    <v-btn @click="toggleTheme">Toggle Dark/Light</v-btn>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
