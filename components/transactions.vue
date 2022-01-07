<template>
  <div class="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div class="flex flex-col md:p-12 py-12 px-4">
          <h3 class="text-white text-3xl text-center my-2" v-if="getCurrentAccount">
            Latest transactions
          </h3>
          <h3 class="text-white text-3xl text-center my-2" v-else>
            Connect your account to see the latest transactions
          </h3>

        <div class="flex flex-wrap justify-center items-center mt-10">
          <!-- {transactions.reverse().map((transaction, i) => ( -->
            <lazy-crypt-transaction-card v-for="(transaction, key) in getTransactions" :key="key" :transaction="transaction" />
          <!-- ))} -->
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions } from "vuex";


const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
export default {

  computed: {
    ...mapGetters({
      getCurrentAccount: "getCurrentAccount",
      getTransactions: "getTransactions",
    }),
  },

  data() {
    return {
      commonStyles,
    }
  },

  methods: {

    handleChange (){
      console.log('e')
    },

    handleSubmit () {},

    ...mapActions({
      connectWallet: 'connectWallet'
    })
  }
}
</script>
