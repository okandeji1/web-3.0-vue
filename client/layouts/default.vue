<template>
    <div class="min-h-screen">
      <div class="gradient-bg-welcome">
        <lazy-crypt-navbar />
        <lazy-crypt-welcome />
          <Nuxt />
      </div>
      <lazy-crypt-services />
      <lazy-crypt-transactions />
      <lazy-crypt-footer />
    </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {

  computed: {
    ...mapGetters({
      getCurrentAccount: "getCurrentAccount",
    }),
  },

  data() {
    return {}
  },

  methods: {

    ...mapActions({
      checkIfWalletIsConnected: 'checkIfWalletIsConnected',
      checkIfTransactionsExist: 'checkIfTransactionsExist',
    })
  },

  mounted() {
    this.$nextTick(() => {
      this.checkIfWalletIsConnected();
      this.checkIfTransactionsExist();
    });
  }
}
</script>
