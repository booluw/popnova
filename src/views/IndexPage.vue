<script lang="js" setup>
import { onMounted, ref } from 'vue';
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const jumboText = ref(null);
const lenis = new Lenis();

onMounted(() => {
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  const tl = gsap.timeline().to(".banner", {
    opacity: 1,
    duration: 2.5,
    ease: "slow(0.5,0.5,false)"
  });

  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "clamp(top center)",
      end: "clamp(end -1000px)",
      scrub: true,
      pin: true
    },
  })

  mainTl.to(".jumbo h1", {
    scale: 1000,
    x: "-1000vw",
    duration: 5,
    ease: "slow(0.1,0.1,false)"
  })

  mainTl.add(tl, .05);
  mainTl
    .add(gsap.to(".banner__heading", {
      translateY: 0,
      opacity: 1
    }), .1);
    
})
</script>
<template>
  <section class="overflow-x-hidden">
    <section
      id="tagline"
      class="jumbo min-h-screen overflow-hidden flex flex-col justify-center items-center bg-primary"
    >
      <div class="uppercase text-center">
        <h2
          class="font-semibold text-2xl md:text-[25px] tracking-[10px] md:tracking-[30px] text-secondary"
        >
          Welcome to
        </h2>
        <h1
          ref="jumboText"
          id="jumboText"
          class="font-bold font-serif text-6xl md:text-[100px] overflow-hidden text-white"
        >
          popnova
        </h1>
      </div>
    </section>
    <section class="content">
      <section
        class="min-h-screen overflow-hidden bg-white -mt-[100vh] opacity-0 relative p-20 flex gap-20 justify-between items-center section banner"
      >
        <img
          src="@/assets/imgs/popnova/Model-with-white-hair.jpg"
          data-speed="0.5"
          class="w-64 h-auto model-img -mt-[70vh] md:-mt-[40vh]"
        />
        <img
          src="@/assets/imgs/popnova/Model-seated.jpg"
          data-speed="1"
          class="w-64 h-auto model-img -mb-[70vh] -ml-[50vw] md:ml-0 md:mb-0 md:-mt-[5vh]"
        />
        <img
          src="@/assets/imgs/popnova/Model-with-facial-paint.jpg"
          data-speed="1.5"
          class="w-64 h-auto model-img md:-mb-[30vh]"
        />
        <div
          class="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center"
        >
          <div class="md:w-2/3 px-5 md:px-0">
            <h1
              class="text-black text-5xl font-serif font-semibold md:text-9xl transform -translate-y-[100px] opacity-75 banner__heading drop-shadow"
            >
              Summer '22
              <span class="block md:text-7xl">Collection</span>
            </h1>
            <div class="md:-mt-[50px] md:w-5/6">
              <span class="text-2xl bg-white bg-opacity-50 px-2">
                Join us on this remarkable summer journey and let your wardrobe reflect the beauty of the season. Be prepared to captivate and enchant wherever you go. It's a summer like no other, and you deserve nothing less than the finest from Popnova
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="h-screen bg-red-400 section"></section>
      <section class="h-screen bg-green-400 section"></section>
      <section class="h-screen bg-primary section"></section>
      <section class="h-screen bg-secondary section"></section>
    </section>
  </section>
</template>

<style lang="scss">
.banner {
  &__heading {
    background: -webkit-linear-gradient(rgba(#d2bb98, 5), rgba(#a54132, .75));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
}
</style>
