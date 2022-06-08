<template>
  <li class="mx-4 cursor-pointer" :class="classProps">{{title}}</li>
</template>

<script lang="ts">

export default {

  props: {
    classProps: {
      type: String,
    },

    title: {
      type: String,
      required: true
    }
  }
}
</script>
