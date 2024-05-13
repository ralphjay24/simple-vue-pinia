<script>
import HeaderName from "@/components/HeaderName.vue";

export default {
  name: "LoveArraysView",
  components: {
    HeaderName
  },
  data() {
    return {
      numbers: null,
      results: {},
      prefixStr: 'key-',
    }
  },
  methods: {
    countValidation: (value) => {
      let valid
      if (!value) {
        valid = true
      } else {
        const numbers = value.split(',')
        valid = numbers.length < 50
      }

      return valid || 'Error: The count of numbers is exceeded to 50.'
    },
    numberValidation: (value) => {
      let valid
      if (!value) {
        valid = true
      } else {
        const numbers = value.split(',')
        const numCheck = numbers.find(val => {
          if (val == '') {
            return true
          }
          val = parseInt(val.trim())
          return val < 0 || val > 9
        })
        valid = numCheck === undefined
      }

      return valid || 'Error: Each number should be 0 to 9.'
    },
    countNumbers() {
      const nums = this.numbers.split(',')
      let results = {}
      nums.forEach((num) => {
        num = num.trim()
        const keyFormat = `${this.prefixStr}${num}`
        results[keyFormat] = results[keyFormat] ? parseInt(results[keyFormat]) + 1 : 1
      })

      // sorting
      this.results = Object.fromEntries(
        Object.entries(results)
          // sort by number in descending order
          .sort(([a,], [b,]) => {
            a = a.replace(this.prefixStr, '')
            b = b.replace(this.prefixStr, '')

            return b < a ? -1 : b > a ? 1 : 0
          })
          // sort by count in descending order
          .sort(([,a], [,b]) => b < a ? -1 : b > a ? 1 : 0)
      )
    },
  },
}
</script>

<template>
  <v-card
    max-width="1000"
    height="400px"
    prepend-icon="mdi-account"
  >
    <template v-slot:title>
      <HeaderName />
    </template>
    <v-card-text class="bg-grey-lighten-2 pt-4 h-100">
      <v-col>
        <v-text-field
          v-model="numbers"
          single-line
          variant="solo"
          density="comfortable"
          placeholder="Type a series of numbers"
          :rules="[countValidation, numberValidation]"
        >
          <template v-slot:append-inner>
            <v-btn elevation="2" color="success" @click="countNumbers">Submit</v-btn>
          </template>
        </v-text-field>
      </v-col>
      <v-col>
        <section class="bg-white elevation-2 pa-2 h-200px" style="height: 220px;">
          <v-list tag="ul" density="compact" theme="light">
            <v-list-item
              v-for="(number, key) in results"
              :key="key"
              tag="li"
              v-text="`${key.replace(prefixStr, '')} - ${number}`"
            />
          </v-list>
        </section>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-list-item--density-compact.v-list-item--one-line {
  min-height: 20px;
}
</style>