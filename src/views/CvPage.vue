<template>
  <div class="pdf-container mt-10">
    <iframe
      :src="'/assets/img/CvPierre.pdf#toolbar=0&navpanes=0&scrollbar=0'"
      class="pdf-iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "CV",
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
