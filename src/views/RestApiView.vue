<script>
import HeaderName from "@/components/HeaderName.vue";

export default {
  name: "ResApiView",
  components: {
    HeaderName
  },
  data() {
    return {
      images: [],
      loading: false,
    }
  },
  mounted() {
    this.getDogsImage()
  },
  methods: {
    getDogsImage() {
      this.loading = true
      this.images = []
      fetch('https://dog.ceo/api/breeds/image/random/6')
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            this.images = [...new Set(data.message)] // filter out duplicates
          }
        })
        .finally(() => this.loading = false)
    },
  },
}
</script>

<template>
  <v-card
    max-width="1000"
    height="600px"
    prepend-icon="mdi-account"
  >
    <template v-slot:title>
      <HeaderName />
    </template>
    <v-card-text class="bg-grey-lighten-2 pt-4 h-100">
      <v-row class="mx-auto pa-1">
        <v-btn
          :loading="loading"
          prepend-icon="mdi-refresh"
          @click="getDogsImage"
          variant="tonal"
          color="success"
        >
          New Images

          <template v-slot:loader>
            <v-progress-circular indeterminate></v-progress-circular>
          </template>
        </v-btn>
      </v-row>
      <v-row class="mx-auto">
        <v-col
          v-for="(image, key) in images"
          :key="key"
          cols="4"
        >
          <div class="fadein">
            <img
              decoding="async"
              loading="lazy"
              :alt="`Image #${key}`"
              :src="image"
            >
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-list-item--density-compact.v-list-item--one-line {
  min-height: 20px;
}

.fadein img{
  opacity:0.5;
  transition: 1s ease;
  width: 100%;
  height: 200px;
}

.fadein img:hover{
  opacity:1;
  transition: 1s ease;
}
</style>