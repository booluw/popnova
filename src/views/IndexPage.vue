<script lang="js" setup>
import { nextTick, onMounted, ref } from 'vue';

import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { useMouse } from '../composables/useMouse';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const lenis = new Lenis();
const container = ref(null);
let ctx;
const { x, y } = useMouse();

onMounted(async () => {
  await nextTick();
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  ctx = gsap.context((self) => {
    const sections = gsap.utils.toArray(".section");
    gsap.from("div.uppercase", {
      translateY: -10,
      opacity: 0.4,
      duration: .5,
      ease: 'ease.in'
    })
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

    const tl = gsap.timeline().to(".banner", {
      opacity: 1,
      duration: .5,
      ease: "slow(0.5,0.5,false)"
    });

    mainTl.add(tl, .05);
    mainTl.add(gsap.to(".banner__heading", {
      translateY: 0,
      opacity: 1
    }), .1);

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        pin: '.wrapper',
        scrub: 1,
        snap: true,
      }
    })
  }, container.value)

})
</script>
<template>
  <div class="absolute p-4 border-secondary border text-white z-[90] rounded-full mouse" :style="`top: ${y - 20}px; left: ${x - 20}px`">
    <div class="p-1 border-secondary border bg-secondary rounded-full" />
  </div>
  <section class="overflow-x-hidden" ref="container">
    <section
      class="jumbo min-h-screen overflow-hidden flex flex-col justify-center items-center bg-primary"
    >
      <div class="uppercase text-center">
        <h2
          class="font-semibold text-2xl md:text-[25px] tracking-[10px] md:tracking-[30px] text-secondary"
        >
          Welcome to
        </h2>
        <h1
          class="font-bold font-serif text-6xl md:text-[100px] overflow-hidden text-white"
        >
          popnova
        </h1>
      </div>
    </section>
    <section class="content">
      <!-- <img src="@/assets/imgs/popnova/Model-with-facial-paint.jpg" class="w-64 h-auto absolute z-[90] opacity-75" :style="`top: ${y - 20}px; left: ${x - 20}px`" /> -->
      <section
        class="h-[200vh] overflow-hidden bg-white -mt-[100vh] opacity-0 relative p-20 flex gap-20 justify-between items-center banner"
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
                Join us on this remarkable summer journey and let your wardrobe
                reflect the beauty of the season. Be prepared to captivate and
                enchant wherever you go. It's a summer like no other, and you
                deserve nothing less than the finest from Popnova
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div class="wrapper overflow-hidden relative min-h-screen">
      <section class="cont flex w-[300vw]">
        <section class="h-[100vh] min-w-[100vw] bg-green-500 flex justify-between items-center px-28 relative section">
          <div>
            <h2 class="font-bold font-serif text-8xl text-white capitalize tracking-wider">
              The future of African fashion
            </h2>
            <p class="text-3xl mt-5 text-white opacity-75">
              Popnova is <span class="text-primary">reimagining</span> how Africa's fashion is represented.
            </p>
          </div>
        </section>
        <section class="h-[100vh] min-w-[100vw] bg-primary section"></section>
        <section class="h-[100vh] min-w-[100vw] bg-white section"></section>
        <section class="h-[100vh] min-w-[100vw] bg-secondary section"></section>
      </section>
    </div>
    <section class="bg-primary h-screen">Hello Worl</section>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  &__heading {
    background: -webkit-linear-gradient(rgba(#d2bb98, 5), rgba(#a54132, 0.75));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.mouse {
  box-shadow: 0 0 0 0 darken(rgba(#d2bb98, 1), 50%);
  transform: scale(1);
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(.95);
    box-shadow: 0 0 0 0 rdarken(gba(#d2bb98, .7), 50%);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px darken(rgba(#d2bb98, 0), 50%);
  }

  100% {
    transform: scale(.95);
    box-shadow: 0 0 0 0 darken(rgba(#d2bb98, 0), 50%);
  }
}
</style>
