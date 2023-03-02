<template>
  <div class="mr-48 ml-48">
    <div class="p-20">
      <div
        class="container px-5 py-2 mx-auto lg:pt-6 p-4 lg:px-4 mt-10 rounded-lg"
      >
        <div class="flex flex-wrap items-center">
          <div class="flex flex-wrap w-1/3">
            <div class="w-full">
              <img
                alt="profilePicture"
                class="block object-cover w-full h-full rounded-lg"
                src="/assets/img/ProfilePic.JPG"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-2/2">
            <section class="bg-orange-300 py-8">
              <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                  <h2 class="text-3xl font-extrabold text-black sm:text-4xl">
                    {{ $t("homepage.about.title") }}
                  </h2>
                </div>
                <div class="mt-8">
                  <p class="text-xl text-gray-900">
                    {{ $t("homepage.about.1p1s") }}
                    {{ $t("homepage.about.1p2s") }}
                    {{ $t("homepage.about.1p3s") }}
                    {{ $t("homepage.about.1p4s") }}
                  </p>
                  <p class="mt-4 text-xl text-gray-900">
                    {{ $t("homepage.about.2p1s") }}
                    {{ $t("homepage.about.2p2s") }}
                    {{ $t("homepage.about.2p3s") }}
                    {{ $t("homepage.about.2p4s") }}
                  </p>
                  <p class="mt-4 text-xl text-gray-900">
                    {{ $t("homepage.about.3p1s") }}
                    {{ $t("homepage.about.3p2s") }}
                    {{ $t("homepage.about.3p3s") }}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div
        class="container px-3 py-2 mx-auto lg:pt-6 lg:px- mt-2 text-amber-500 text-lg"
      >
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/2 bg-gray-800 rounded-lg">
            <div class="w-full p-1 md:p-2">
              <ul class="ml-8 font-bold">
                <li>{{ $t("homepage.progskills.title") }}</li>
              </ul>
              <ul class="list-disc ml-16 mt-2">
                <li>{{ $t("homepage.progskills.s1") }}</li>
                <li>{{ $t("homepage.progskills.s2") }}</li>
                <li>{{ $t("homepage.progskills.s3") }}</li>
                <li>{{ $t("homepage.progskills.s4") }}</li>
                <li>{{ $t("homepage.progskills.s5") }}</li>
                <li>{{ $t("homepage.progskills.s6") }}</li>
              </ul>
            </div>
          </div>
          <div
            class="flex flex-wrap w-1/2 rounded-lg bg-gray-600 text-amber-500"
          >
            <div class="w-full p-1 md:p-2">
              <ul class="ml-8 font-bold">
                <li>{{ $t("homepage.softskills.title") }}</li>
              </ul>
              <ul class="ml-16 mt-2 list-disc">
                <li>{{ $t("homepage.softskills.s1") }}</li>
                <li>{{ $t("homepage.softskills.s2") }}</li>
                <li>{{ $t("homepage.softskills.s3") }}</li>
                <li>{{ $t("homepage.softskills.s4") }}</li>
                <li>{{ $t("homepage.softskills.s5") }}</li>
                <li>{{ $t("homepage.softskills.s6") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-6" id="projects">
      <div class="text-center mt-10">
        <h2
          class="text-6xl font-extrabold text-amber-400 rounded-lg p-4 ml-16 mr-16"
        >
          {{ $t("homepage.sectiontitleprojects") }}
        </h2>
      </div>
      <div class="container px-3 py-2 mx-auto lg:pt-6 lg:px- mt-8">
        <div
          class="flex flex-wrap -m-1 md:-m-2 rounded-md border-4 border-emerald-800 text-center"
        >
          <div class="flex flex-wrap w-1/2 rounded-md bg-sky-200">
            <div class="w-full p-1 md:p-2">
              <h2 class="text-4xl font-bold mb-4 text-emerald-800">
                {{ $t("project1.title") }}
              </h2>
              <div class="flex flex-wrap mb-4 text-xl">
                <div class="w-1/2">
                  <button
                    class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                  >
                    Github
                  </button>
                </div>
                <div class="w-1/2">
                  <button
                    class="text-blue-700 hover:text-blue-600 hover:translate-y-1 relative inline-block transition-all duration-200"
                  >
                    Website
                  </button>
                </div>
              </div>
              <img
                alt="profilePicture"
                class="block object-cover object-center w-full h-96 rounded-lg"
                src="/assets/img/screenSolaire.png"
              />
            </div>
            <div class="flex justify-center w-full">
              <div class="p-4 rounded-lg">
                <p class="text-gray-700 mb-4 text-xl">
                  {{ $t("project1.description.p1") }}
                  {{ $t("project1.description.p2") }}
                  {{ $t("project1.description.p3") }}
                  {{ $t("project1.description.p4") }}
                </p>
                <div class="flex items-center mb-4">
                  <div class="border-t-2 border-emerald-800 flex-1 mr-4"></div>
                  <div class="text-emerald-800 text-2xl uppercase">
                    {{ $t("project1.titlelist") }}
                  </div>
                  <div class="border-t-2 border-emerald-800 flex-1 ml-4"></div>
                </div>
                <ul class="list-disc pl-4 list-inside text-xl text-gray-900">
                  <li>{{ $t("project1.elemlist.1") }}</li>
                  <li>{{ $t("project1.elemlist.2") }}</li>
                  <li>{{ $t("project1.elemlist.3") }}</li>
                  <li>{{ $t("project1.elemlist.4") }}</li>
                  <li>{{ $t("project1.elemlist.5") }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="flex flex-wrap w-1/2 rounded-md text-center bg-emerald-100"
          >
            <div class="w-full p-1 md:p-2">
              <h2 class="text-4xl font-bold mb-4 text-emerald-800">
                {{ $t("project2.title") }}
              </h2>
              <div class="flex flex-wrap mb-4 text-xl">
                <div class="w-1/2">
                  <button
                    class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                  >
                    Github
                  </button>
                </div>
                <div class="w-1/2">
                  <button
                    class="text-blue-700 hover:text-blue-600 hover:translate-y-1 relative inline-block transition-all duration-200"
                  >
                    Website
                  </button>
                </div>
              </div>
              <img
                alt="profilePicture"
                class="block object-cover object-center w-full h-96 rounded-lg"
                src="/assets/img/screenPortfolio.png"
              />
            </div>
            <div class="flex justify-center w-full">
              <div class="p-4 rounded-lg">
                <p class="text-gray-700 mb-4 text-xl">
                  {{ $t("project2.description.p1") }}
                  {{ $t("project2.description.p2") }}
                  {{ $t("project2.description.p3") }}
                  {{ $t("project2.description.p4") }}
                </p>
                <div class="flex items-center mb-4">
                  <div class="border-t-2 border-emerald-800 flex-1 mr-4"></div>
                  <div class="text-emerald-800 text-2xl uppercase">
                    {{ $t("project2.titlelist") }}
                  </div>
                  <div class="border-t-2 border-emerald-800 flex-1 ml-4"></div>
                </div>
                <ul class="list-disc pl-4 list-inside text-xl text-gray-900">
                  <li>{{ $t("project2.elemlist.1") }}</li>
                  <li>{{ $t("project2.elemlist.2") }}</li>
                  <li>{{ $t("project2.elemlist.3") }}</li>
                  <li>{{ $t("project2.elemlist.4") }}</li>
                  <li>{{ $t("project2.elemlist.5") }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-3 py-2 mx-auto lg:pt-6 lg:px- mt-2">
        <div
          class="flex flex-wrap -m-1 md:-m-2 rounded-md border-4 border-emerald-800 text-center"
        >
          <div class="flex flex-wrap w-1/2 rounded-md bg-emerald-100">
            <div class="w-full p-1 md:p-2">
              <h2 class="text-4xl font-bold mb-4 text-emerald-800">
                {{ $t("project3.title") }}
              </h2>
              <div class="flex flex-wrap mb-4 text-xl">
                <div class="w-1/2">
                  <a
                    class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                    href="https://github.com/DonPierreDon/recipe-app-api"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <div class="w-1/2">
                  <button
                    class="text-blue-700 hover:text-blue-600 hover:translate-y-1 relative inline-block transition-all duration-200"
                  >
                    Website
                  </button>
                </div>
              </div>
              <img
                alt="profilePicture"
                class="block object-cover object-center w-full h-96 rounded-lg"
                src="/assets/img/ScreenApi.png"
              />
            </div>
            <div class="flex justify-center w-full">
              <div class="p-4 rounded-lg">
                <p class="text-gray-700 text-xl mb-4">
                  {{ $t("project3.description.p1") }}
                  {{ $t("project3.description.p2") }}
                  {{ $t("project3.description.p3") }}
                  {{ $t("project3.description.p4") }}
                </p>
                <div class="flex items-center mb-4">
                  <div class="border-t-2 border-emerald-800 flex-1 mr-4"></div>
                  <div class="text-emerald-800 text-2xl uppercase">
                    {{ $t("project2.titlelist") }}
                  </div>
                  <div class="border-t-2 border-emerald-800 flex-1 ml-4"></div>
                </div>
                <ul class="list-disc pl-4 list-inside text-gray-900 text-xl">
                  <li>{{ $t("project3.elemlist.1") }}</li>
                  <li>{{ $t("project3.elemlist.2") }}</li>
                  <li>{{ $t("project3.elemlist.3") }}</li>
                  <li>{{ $t("project3.elemlist.4") }}</li>
                  <li>{{ $t("project3.elemlist.5") }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2 rounded-md text-center bg-sky-200">
            <div class="w-full p-1 md:p-2">
              <h2 class="text-4xl font-bold mb-4 text-emerald-800">
                {{ $t("project4.title") }}
              </h2>
              <div class="flex flex-wrap mb-4 text-xl">
                <div class="w-1/2">
                  <a
                    class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                    href="https://github.com/DonPierreDon/musicApp"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <div class="w-1/2">
                  <a
                    class="text-blue-700 hover:text-blue-600 hover:translate-y-1 relative inline-block transition-all duration-200"
                    href="https://music-ecample.vercel.app/"
                    target="_blank"
                  >
                    Website
                  </a>
                </div>
              </div>
              <img
                alt="profilePicture"
                class="block object-cover object-center w-full h-96 rounded-lg"
                src="/assets/img/screenMusic.png"
              />
            </div>
            <div class="flex justify-center w-full">
              <div class="p-4 rounded-lg">
                <p class="text-gray-700 text-xl mb-4">
                  {{ $t("project4.description.p1") }}
                  {{ $t("project4.description.p2") }}
                  {{ $t("project4.description.p3") }}
                  {{ $t("project4.description.p4") }}
                </p>
                <div class="flex items-center mb-4">
                  <div class="border-t-2 border-emerald-800 flex-1 mr-4"></div>
                  <div class="text-emerald-800 text-2xl uppercase">
                    {{ $t("project2.titlelist") }}
                  </div>
                  <div class="border-t-2 border-emerald-800 flex-1 ml-4"></div>
                </div>
                <ul class="list-disc pl-4 list-inside text-xl text-gray-900">
                  <li>{{ $t("project4.elemlist.1") }}</li>
                  <li>{{ $t("project4.elemlist.2") }}</li>
                  <li>{{ $t("project4.elemlist.3") }}</li>
                  <li>{{ $t("project4.elemlist.4") }}</li>
                  <li>{{ $t("project4.elemlist.5") }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function () {
    return {
      hash: this.$route.hash,
    };
  },
  mounted() {
    this.$nextTick(function () {
      if (this.hash) {
        const refName = this.hash.replace("#", "");
        this.scrollToAnchorPoint(refName);
      }
    });
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName];
      el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
