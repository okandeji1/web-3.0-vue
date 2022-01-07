<template>
  <div
    class="flex justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl"
  >
    <div
      class="w-10 h-10 rounded-full flex justify-center items-center"
      :class="color"
    >
    <svg-icon :name="icon" class="text-white w-4 h-4 fill-current" />
    </div>
    <div class="flex flex-col flex-1 ml-5">
      <h1 class="mt-2 text-white text-lg">{{ title }}</h1>
      <p class="mt-2 text-white text-sm md:w-9/12">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
    },

    icon: {
      type: String,
    },

    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },
  },
};
</script>
