<template>
  <header id="header" class="fixed top-0 left-0 w-full bg-lime-100">
    <nav class="container mx-auto flex justify-start items-center py-2 px-4">
      <!-- App Name -->
      <router-link
        href="#"
        :to="{ name: 'home' }"
        class="font-bold uppercase text-2xl mr-4"
      >
        HomePage
      </router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row">
          <li>
            <router-link href="#" :to="{ name: 'cv' }" class="px-2">
              CV
            </router-link>
          </li>
          <!-- Navigation Links -->
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2" href="#" @click.prevent="changeLocale">{{
              currentLocale
            }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  methods: {
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === "fr" ? "en" : "fr";
    },
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale === "fr" ? "Francais" : "English";
    },
  },
};
</script>

<style>
.bg-image2 {
  background-image: url("/assets/img/DeskComputerWork.png");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
