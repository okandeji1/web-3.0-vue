<template>
  <div class="flex flex-1 m-4 bg-[#181918] flex-col p-3 rounded-md hover:shadow-2xl 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] v sm:max-w-[300px]">
    <div class="flex flex-col items-center mt-3 w-full">
      <div class="w-full mb-6 p-2">
        <a
          href="https://ropsten.etherscan.io/address/addressFrom"
          target="_blank"
          rel="noopener noreferrer">
          <p class="text-white text-base">
            From: {{shortenAddress(addressFrom)}}
          </p>
        </a>
        <a
          href="https://ropsten.etherscan.io/address/addressTo"
          target="_blank"
          rel="noopener noreferrer">
          <p class="text-white text-base">
            From: {shortenAddress(addressTo)}
          </p>
        </a>
        <p class="text-white text-base">Amount: {{amount}} ETH</p>
        <!-- {message && ( -->
          <!-- <> -->
            <br />
            <p class="text-white text-base">Message: {{message}}</p>
          <!-- </> -->
        <!-- )} -->
      </div>
        <img :src="gifUrl || url" alt="gif" class="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover" />
        <div class="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p class="text-[#37c7da] font-bold">{{timestamp}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
  addressTo: {
    type: String,
  },

  addressFrom: {
    type: String,
  },

  timestamp: {
    type: String,
  },

  message: {
    type: String,
  },

  amount: {
    type: String,
  },

    keyword: {
    type: String,
  },

  url: {
    type: String,
  },
}
}
</script>
