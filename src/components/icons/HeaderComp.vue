<template>
  <header id="header" class="bg-gray-700 text-white sticky top-0">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        href="#"
        :to="{ name: 'home' }"
        class="text-white font-bold uppercase text-2xl mr-4"
      >
        HomePage
      </router-link>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-2">
          <li>
            <router-link href="#" :to="{ name: 'cv' }" class="px-2 text-white">
              CV
            </router-link>
          </li>
          <!-- Navigation Links -->
        </ul>
        <ul class="ml-auto">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="changeLocale">{{
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
      return this.$i18n.locale === "fr" ? "French" : "English";
    },
  },
};
</script>
