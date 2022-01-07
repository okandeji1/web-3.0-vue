<template>
  <div
    class="flex flex-1 m-4 bg-[#181918] flex-col p-3 rounded-md hover:shadow-2xl 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] v sm:max-w-[300px]"
  >
    <div class="flex flex-col items-center mt-3 w-full">
      <div class="w-full mb-6 p-2">
        <a
          :href="
            'https://ropsten.etherscan.io/address/' + transaction.addressFrom
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-white text-base">
            From: {{ shortenAddress(transaction.addressFrom) }}
          </p>
        </a>
        <a
          :href="
            'https://ropsten.etherscan.io/address/' + transaction.addressTo
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-white text-base">
            From: {{ shortenAddress(transaction.addressTo) }}
          </p>
        </a>
        <p class="text-white text-base">Amount: {{ transaction.amount }} ETH</p>
        <br />
        <p class="text-white text-base" v-if="transaction.message">
          Message: {{ transaction.message }}
        </p>
      </div>
      <img
        :src="transaction.gifUrl || transaction.url"
        alt="gif"
        class="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
      />
      <div class="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
        <p class="text-[#37c7da] font-bold">{{ transaction.timestamp }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { shortenAddress } from "../utils/utility";

export default {
  props: {
    transaction: {
      type: Object,
    },
  },

  data() {
    return {};
  },

  methods: {
    shortenAddress,
  },
};
</script>
