<template>
  <div>
    <div>
      <div class="flex justify-center">
        <button
          class="bg-red-600 hover:bg-red-500 hover:translate-y-1 rounded-lg text-2xl m-2 p-2"
          @click="exportToPDF"
        >
          {{ $t("CV.export") }}
        </button>
      </div>
      <div class="flex justify-center content-center" id="convert">
        <!-- outer container -->
        <div
          class="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10"
        >
          <!-- header (profile) -->
          <div>
            <!-- social icons-->

            <!-- tech blog -->
            <div class="flex justify-between items-center">
              <div>
                <img
                  alt="profilePicture"
                  class="block object-cover object-center w-full h-72"
                  src="/assets/img/profil.png"
                />
              </div>
              <div class="grid justify-items-end">
                <h1 class="text-7xl font-extrabold">{{ $t("CV.name") }}</h1>
                <p class="text-2xl mt-5">{{ $t("CV.asp") }}</p>
              </div>
            </div>
          </div>
          <!-- detailed info -->
          <div class="flex gap-x-10 mt-10">
            <div class="w-2/6">
              <!-- contact details -->
              <strong class="text-2xl font-bold">{{ $t("CV.left.t1") }}</strong>
              <ul class="mt-2 mb-10 text-xl">
                <li class="px-2 mt-1">
                  <strong class="mr-1">{{ $t("CV.left.tphone") }} </strong>
                  <a href="tel:+0745009007" class="block">{{
                    $t("CV.left.phone")
                  }}</a>
                </li>
                <li class="px-2 mt-1">
                  <strong class="mr-1">E-mail </strong>
                  <a href="mailto:pierre@donnadieu.fr" class="block"
                    >pierre@donnadieu.fr</a
                  >
                </li>
                <li class="px-2 mt-1">
                  <strong class="mr-1">{{ $t("CV.left.tlocation") }}</strong
                  ><span class="block">{{ $t("CV.left.location") }}</span>
                </li>
              </ul>

              <!-- github stats -->
              <!-- skills -->
              <strong class="text-2xl font-bold">{{ $t("CV.left.t2") }}</strong>
              <ul class="mt-2 mb-10 text-xl">
                <li class="px-2 mt-1">{{ $t("CV.left.skill1") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.skill2") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.skill3") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.skill4") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.skill5") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.skill6") }}</li>
              </ul>
              <strong class="text-2xl font-bold">{{ $t("CV.left.t6") }}</strong>
              <ul class="mt-2 mb-10 text-xl">
                <li class="px-2 mt-1">{{ $t("CV.left.a1") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.a2") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.a3") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.a4") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.a5") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.a6") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.a7") }}</li>
              </ul>
              <strong class="text-2xl font-bold">{{ $t("CV.left.t3") }}</strong>
              <ul class="mt-2 mb-10 text-xl">
                <li class="px-2 mt-1">{{ $t("CV.left.fe1") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.fe2") }}</li>
              </ul>
              <!-- what I'm learning these days -->
              <strong class="text-2xl font-bold">{{ $t("CV.left.t4") }}</strong>
              <ul class="mt-2 mb-10 text-xl">
                <li class="px-2 mt-1">{{ $t("CV.left.cl1") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.cl2") }}</li>
              </ul>
              <strong class="text-2xl font-bold">{{ $t("CV.left.t5") }}</strong>
              <ul class="mt-2 mb-10 text-xl">
                <li class="px-2 mt-1">{{ $t("CV.left.ih1") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.ih2") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.ih3") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.ih4") }}</li>
              </ul>
              <strong class="text-2xl font-bold">{{ $t("CV.left.t7") }}</strong>
              <ul class="mt-2 text-xl">
                <li class="px-2 mt-1">{{ $t("CV.left.l1") }}</li>
                <li class="px-2 mt-1">{{ $t("CV.left.l2") }}</li>
              </ul>
            </div>
            <!-- info -->
            <div class="w-4/6">
              <section>
                <!-- about me -->
                <h2 class="text-4xl pb-1 border-b font-semibold">
                  {{ $t("CV.right.about.title") }}
                </h2>
                <p class="mt-6">
                  {{ $t("CV.right.about.1p1s") }}
                  {{ $t("CV.right.about.1p2s") }}
                  {{ $t("CV.right.about.1p3s") }}
                </p>
                <p class="mt-6">
                  {{ $t("CV.right.about.2p1s") }}
                </p>
              </section>
              <section>
                <!-- work experiences -->
                <h2 class="text-4xl mt-8 pb-1 border-b font-semibold">
                  {{ $t("CV.right.workexp.title") }}
                </h2>
                <ul class="mt-4">
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.workexp.t1")
                      }}</strong
                      >{{ $t("CV.right.workexp.time1") }}
                    </p>
                    <p class="flex justify-between text-lg">
                      {{ $t("CV.right.workexp.j1")
                      }}<small>{{ $t("CV.right.workexp.l1") }}</small>
                    </p>
                    <p class="text-justify text-sm">
                      {{ $t("CV.right.workexp.d1") }}
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.workexp.t2")
                      }}</strong
                      >{{ $t("CV.right.workexp.time2") }}
                    </p>
                    <p class="flex justify-between text-lg">
                      {{ $t("CV.right.workexp.j2") }}
                      <small>{{ $t("CV.right.workexp.l2") }}</small>
                    </p>
                    <p class="text-justify text-sm">
                      {{ $t("CV.right.workexp.d2") }}
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.workexp.t3")
                      }}</strong
                      >{{ $t("CV.right.workexp.time3") }}
                    </p>
                    <p class="flex justify-between text-lg">
                      {{ $t("CV.right.workexp.j3") }}
                      <small>{{ $t("CV.right.workexp.l3") }}</small>
                    </p>
                    <p class="text-justify text-sm">
                      {{ $t("CV.right.workexp.d3") }}
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.workexp.t4")
                      }}</strong
                      >{{ $t("CV.right.workexp.time4") }}
                    </p>
                    <p class="flex justify-between text-lg">
                      {{ $t("CV.right.workexp.j4") }}
                      <small>{{ $t("CV.right.workexp.l4") }}</small>
                    </p>
                    <p class="text-justify text-sm">
                      {{ $t("CV.right.workexp.d4") }}
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <!-- Project -->
                <h2 class="text-4xl mt-8 pb-1 border-b font-semibold">
                  {{ $t("CV.right.projects.title") }}
                </h2>
                <ul class="mt-4">
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.projects.t1")
                      }}</strong
                      >{{ $t("CV.right.projects.time1") }}
                    </p>
                    <p class="flex justify-between text-base">
                      {{ $t("CV.right.projects.d1") }}
                      <small class="text-lg">{{
                        $t("CV.right.projects.l1")
                      }}</small>
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.projects.t2")
                      }}</strong
                      >{{ $t("CV.right.projects.time2") }}
                    </p>
                    <p class="flex justify-between text-base">
                      {{ $t("CV.right.projects.d2")
                      }}<small class="text-lg">{{
                        $t("CV.right.projects.l2")
                      }}</small>
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.projects.t3")
                      }}</strong
                      >{{ $t("CV.right.projects.time3") }}
                    </p>
                    <p class="flex justify-between text-base">
                      {{ $t("CV.right.projects.d3") }}
                      <small class="text-lg">{{
                        $t("CV.right.projects.l3")
                      }}</small>
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.projects.t4")
                      }}</strong
                      >{{ $t("CV.right.projects.time4") }}
                    </p>
                    <p class="flex justify-between text-base">
                      {{ $t("CV.right.projects.d4") }}
                      <small class="text-lg">{{
                        $t("CV.right.projects.l4")
                      }}</small>
                    </p>
                  </li>
                </ul>
              </section>
              <section>
                <!-- Education -->
                <h2 class="text-4xl mt-8 pb-1 border-b font-semibold">
                  {{ $t("CV.right.education.title") }}
                </h2>
                <ul class="mt-4">
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.education.t1")
                      }}</strong
                      >{{ $t("CV.right.education.time1") }}
                    </p>
                    <p class="flex justify-between text-base">
                      <small class="text-lg">{{
                        $t("CV.right.education.l1")
                      }}</small>
                    </p>
                  </li>
                  <li class="pt-4">
                    <p class="flex justify-between text-base">
                      <strong class="text-lg">{{
                        $t("CV.right.education.t2")
                      }}</strong
                      >{{ $t("CV.right.education.time2") }}
                    </p>
                    <p class="flex justify-between text-base">
                      <small class="text-lg">{{
                        $t("CV.right.education.l2")
                      }}</small>
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <!-- short lines to introduce myself -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: "CV",
  methods: {
    exportToPDF() {
      let body = document.body;
      let html = document.documentElement;
      let height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      let heightCM = height / 35.35;
      html2pdf(document.getElementById("convert"), {
        filename: "CvPierreDonnadieu.pdf",
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: {
          orientation: "portrait",
          unit: "cm",
          format: [heightCM, 60],
        },
      });
    },
  },
};
</script>
