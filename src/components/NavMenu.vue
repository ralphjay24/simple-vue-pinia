<script>
import { useStore } from '../stores/store'
import { mapState } from "pinia"


export default {
  name: 'NavMenu',
  props: {
    header: {
      type: String,
      default: 'This is a header section',
    }
  },
  computed: {
    ...mapState(useStore, {
      nameStore: 'name',
    }),
    isDisabledLink() {
      return !this.nameStore || /^\s+$/.test(this.nameStore);
    }
  },
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ header }}</h1>
  </div>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <Component
      to="/love-arrays"
      :is="isDisabledLink ? 'span' : 'router-link'"
    >
      I love Arrays
    </Component>
    <Component
      to="/rest-api"
      :is="isDisabledLink ? 'span' : 'router-link'"
    >
      REST API
    </Component>
  </nav>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a, nav span {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
