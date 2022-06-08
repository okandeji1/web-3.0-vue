<template>
  <div class="flex flex-col md:flex-row justify-center items-center w-full gradient-bg-services">
      <div class="flex mf:flex:row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div class="flex flex-1 flex-col justify-start items-start">
          <h1 class="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we <br /> continue to improve
          </h1>
        </div>
      </div>
      <div class="flex flex-1 items-center justify-start flex-col">
        <lazy-crypt-service-card
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon="shield"
          subtitle="Security is guaranteed. We always maitain privacy and the quality of our products."
        />
        <lazy-crypt-service-card
          color="bg-[#8945F8]"
          title="Best exchange rate"
          icon="search"
          subtitle="Security is guaranteed. We always maitain privacy and the quality of our products."
        />
        <lazy-crypt-service-card
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon="heart"
          subtitle="Security is guaranteed. We always maitain privacy and the quality of our products."
        />
      </div>
    </div>
</template>
