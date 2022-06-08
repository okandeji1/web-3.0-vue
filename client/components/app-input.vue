<template>
  <div>
    <input
    :placeholder="placeholder"
    :type="type"
    :name="name"
    step="0.0001"
    @change="(e) => handleChange(e, name)"
    class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
  </div>
</template>

<script lang="ts">

export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true
    },

    handleChange: {
      type: Function,
      required: true
    },
  }
}
</script>
