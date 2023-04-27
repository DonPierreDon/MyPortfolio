<template>
  <div class="pdf-container mt-10" v-if="isFrench">
    <iframe :src="fr" class="pdf-iframe"></iframe>
  </div>
  <div class="pdf-container mt-10" v-else>
    <iframe :src="eng" class="pdf-iframe"></iframe>
  </div>
</template>

<script>
export default {
  name: "CV",
  data() {
    return {
      eng: "/assets/img/CvPierre.pdf#toolbar=0&navpanes=0&scrollbar=0",
      fr: "/assets/img/CvPierreFr.pdf#toolbar=0&navpanes=0&scrollbar=0",
    };
  },
  computed: {
    isFrench() {
      return this.$i18n.locale === "fr";
    },
  },
};
</script>
<style>
.pdf-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* This sets the aspect ratio to 16:9 */
}

.pdf-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
