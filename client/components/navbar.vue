<template>
  <nav class="w-full flex md:justify-center justify-between items-center p-4">
    <div class="md:flex-[0.5] flex-initial justify-center items-center">
      <img src="~/assets/images/logo.png" alt="Logo" class="w-32 cursor-pointer" />
    </div>
    <ul
      class="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
    >
      <lazy-crypt-navbar-item
        v-for="(item, index) in navItem"
        :key="item + index"
        :title="item"
        classProps=""
      />
      <li
        class="bg-[#2952e3] py-2 px-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
      >
        Login
      </li>
    </ul>
    <div class="flex relative">
      <svg-icon
        name="close"
        v-if="getToggleMenu"
        class="text-white md:hidden w-4 h-4 cursor-pointer fill-current"
        @click="() => setToggleMenu()"
      />
      <svg-icon
        name="menu"
        v-else
        class="text-white md:hidden cursor-pointer w-4 h-4 fill-current"
        @click="() => setToggleMenu()"
      />

      <ul
        class="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        v-if="getToggleMenu"
      >
        <li class="text-xl w-full my-2">
          <svg-icon name="close" @click="() => setToggleMenu()" />
        </li>
        <lazy-crypt-navbar-item
          v-for="(item, index) in navItem"
          :key="item + index"
          :title="item"
          classProps="my-2 text-lg"
        />
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { mapGetters, mapMutations } from "vuex";
const navItem = ["Market", "Exchange", "Tutorials", "Wallets"];

export default {
  computed: {
    ...mapGetters({
      getToggleMenu: "settings/getToggleMenu",
    }),
  },

  data() {
    return {
      navItem,
    };
  },

  methods: {
    ...mapMutations({
      setToggleMenu: "settings/setToggleMenu",
    }),
  },
};
</script>
