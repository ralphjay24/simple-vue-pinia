<script>
import { mapState, mapActions } from 'pinia'
import { useStore } from '../stores/store'

export default {
  name: 'HomeView',
  props: {
  },
  data() {
    return {
      name: '',
    }
  },
  mounted() {
    this.name = this.nameStore
  },
  computed: {
    ...mapState(useStore, {
      nameStore: 'name',
    }),
  },
  methods: {
    ...mapActions(useStore, ['saveName']),
    save(name) {
      this.name = name
      this.saveName(name)
    }
  },
}
</script>

<template>
  <v-card
    class="d-flex align-center"
    max-width="1000"
    height="400px"
  >
    <v-card-text>
      <v-text-field
        :model-value="name"
        label="Name"
        variant="outlined"
        clearable
        hint="Enter your name to access other menus."
        @update:modelValue="save"
      >
        <template v-slot:prepend>
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props" icon="mdi-account-box" size="x-large"></v-icon>
            </template>

            Please enter your name to access other menus. This is a required field.
          </v-tooltip>
        </template>
      </v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>