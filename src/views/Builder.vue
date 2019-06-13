<template>
  <main class="build">
    <MobileView v-if="w < 500"></MobileView>
    <WebView v-else></WebView>
  </main>
</template>

<script>

import MobileView from "@/components/BuilderMobileView";
import WebView from "@/components/BuilderWebView";
export default {
  name: "builder",

  data() {
    return {
      w: window.innerWidth
    }
  },

  components: {
    MobileView,
    WebView
  },

  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone||iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
