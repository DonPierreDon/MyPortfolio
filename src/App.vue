<template>
  <header-comp></header-comp>

  <RouterView></RouterView>
</template>

<script>
import HeaderComp from "./components/icons/HeaderComp.vue";

export default {
  components: {
    HeaderComp,
  },
};
</script>
