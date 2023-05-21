<template>
  <img
    src="/assets/img/banner.png"
    class="object-cover w-full h-full"
    alt="Bandeau"
  />
  <div class="mr-48 ml-48">
    <div class="p-20">
      <div
        class="container px-5 py-2 mx-auto lg:pt-6 p-4 lg:px-4 mt-10 rounded-lg"
      >
        <div class="flex flex-wrap items-center">
          <div class="flex flex-wrap w-1/3">
            <div class="w-full">
              <img
                src="/assets/img/workingstation.png"
                alt="About"
                class="rounded-lg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-2/3">
            <section class="py-8">
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
                  </p>
                  <p class="mt-4 text-xl text-gray-900">
                    {{ $t("homepage.about.2p1s") }}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="container px-3 py-2 mx-auto mt-12 text-lg">
        <div class="flex flex-wrap pl-12">
          <div class="flex flex-wrap w-1/2 pt-10 pb-16 pl-16">
            <div class="w-full flex flex-col items-center">
              <div class="font-bold text-4xl">
                {{ $t("homepage.skillstitle") }}
              </div>
              <div class="w-full pt-10">
                <ul class="font-bold">
                  <li>{{ $t("homepage.progskills.title") }}</li>
                </ul>
                <ul class="list-disc mt-2 ml-10">
                  <li class="text-left">
                    {{ $t("homepage.progskills.s1") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.progskills.s2") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.progskills.s3") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.progskills.s4") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.progskills.s5") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.progskills.s6") }}
                  </li>
                </ul>
              </div>
              <div class="w-full pt-10">
                <ul class="font-bold">
                  <li>{{ $t("homepage.softskills.title") }}</li>
                </ul>
                <ul class="mt-2 list-disc ml-10">
                  <li class="text-left">
                    {{ $t("homepage.softskills.s1") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.softskills.s2") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.softskills.s3") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.softskills.s4") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.softskills.s5") }}
                  </li>
                  <li class="text-left">
                    {{ $t("homepage.softskills.s6") }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap w-1/2 items-center">
            <img
              src="/assets/img/openspace.png"
              alt="About"
              class="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-6" id="projects">
      <div class="text-center mt-10">
        <h2 class="text-6xl font-extrabolds rounded-lg p-4 ml-16 mr-16">
          {{ $t("homepage.sectiontitleprojects") }}
        </h2>
      </div>
      <div class="mt-10">
        <div>
          <div>
            <div class="flex flex-wrap">
              <div class="w-1/2">
                <img
                  alt="profilePicture"
                  class="block object-cover object-center h-96 rounded-lg"
                  src="/assets/img/screenSolaire.png"
                />
              </div>
              <div class="w-1/2 text-center">
                <h2
                  class="text-4xl font-bold mb-4 text-emerald-800 text-center"
                >
                  {{ $t("project1.title") }}
                </h2>
                <div class="flex flex-wrap mb-4 text-xl">
                  <div class="w-1/2">
                    <a
                      class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                      href="https://github.com/DonPierreDon/Simple-et-Solaire"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                  <div class="w-1/2">
                    <a
                      class="text-blue-700 hover:text-blue-600 hover:translate-y-1 relative inline-block transition-all duration-200"
                      href="https://simple-et-solaire.vercel.app/"
                      target="_blank"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div class="flex justify-center w-full">
                  <div class="p-4 rounded-lg">
                    <p class="text-gray-700 mb-4 text-xl">
                      {{ $t("project1.description.p1") }}
                      {{ $t("project1.description.p2") }}
                    </p>
                    <div class="flex items-center mb-4">
                      <div
                        class="border-t-2 border-emerald-800 flex-1 mr-4"
                      ></div>
                      <div class="text-emerald-800 text-2xl uppercase">
                        {{ $t("project1.titlelist") }}
                      </div>
                      <div
                        class="border-t-2 border-emerald-800 flex-1 ml-4"
                      ></div>
                    </div>
                    <ul
                      class="list-disc pl-4 list-inside text-xl text-gray-900 text-left"
                    >
                      <li>{{ $t("project1.elemlist.1") }}</li>
                      <li>{{ $t("project1.elemlist.2") }}</li>
                      <li>{{ $t("project1.elemlist.3") }}</li>
                      <li>{{ $t("project1.elemlist.4") }}</li>
                      <li>{{ $t("project1.elemlist.5") }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="pt-16">
            <div class="flex flex-wrap mb-4 text-xl">
              <div class="w-1/2">
                <h2
                  class="text-4xl font-bold mb-4 text-emerald-800 text-center"
                >
                  {{ $t("project3.title") }}
                </h2>
                <div class="flex flex-wrap mb-4 text-xl text-center">
                  <div class="w-1/2">
                    <a
                      class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                      href="https://github.com/DonPierreDon/Recipe-app"
                      target="_blank"
                    >
                      Github
                    </a>
                  </div>
                  <div class="w-1/2">
                    <p class="text-blue-700 relative inline-block line-through">
                      no Website
                    </p>
                  </div>
                </div>
                <div class="flex justify-center w-full">
                  <div class="p-4 rounded-lg">
                    <p class="text-gray-700 text-xl mb-4">
                      {{ $t("project3.description.p1") }}
                      {{ $t("project3.description.p2") }}
                    </p>
                    <div class="flex items-center mb-4">
                      <div
                        class="border-t-2 border-emerald-800 flex-1 mr-4"
                      ></div>
                      <div class="text-emerald-800 text-2xl uppercase">
                        {{ $t("project1.titlelist") }}
                      </div>
                      <div
                        class="border-t-2 border-emerald-800 flex-1 ml-4"
                      ></div>
                    </div>
                    <ul
                      class="list-disc pl-4 list-inside text-gray-900 text-xl"
                    >
                      <li>{{ $t("project3.elemlist.1") }}</li>
                      <li>{{ $t("project3.elemlist.2") }}</li>
                      <li>{{ $t("project3.elemlist.3") }}</li>
                      <li>{{ $t("project3.elemlist.4") }}</li>
                      <li>{{ $t("project3.elemlist.5") }}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <img
                  alt="profilePicture"
                  class="block object-cover object-center h-96 rounded-lg"
                  src="/assets/img/ScreenApi.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="flex flex-wrap mb-4 text-xl pt-16">
              <div class="w-1/2">
                <img
                  alt="profilePicture"
                  class="block object-cover object-center w-full h-96 rounded-lg"
                  src="/assets/img/screenMusic.png"
                />
              </div>
              <div class="w-1/2">
                <h2
                  class="text-4xl font-bold mb-4 text-emerald-800 text-center"
                >
                  {{ $t("project4.title") }}
                </h2>
                <div class="flex text-center">
                  <div class="w-1/2">
                    <a
                      class="text-orange-500 hover:text-orange-400 hover:translate-y-1 relative inline-block transition-all duration-200"
                      href="https://github.com/DonPierreDon/Music-App"
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
                <div>
                  <div class="p-4 rounded-lg">
                    <p class="text-gray-700 text-xl mb-4 text-center">
                      {{ $t("project4.description.p1") }}
                    </p>
                    <div class="flex items-center mb-4">
                      <div
                        class="border-t-2 border-emerald-800 flex-1 mr-4"
                      ></div>
                      <div class="text-emerald-800 text-2xl uppercase">
                        {{ $t("project1.titlelist") }}
                      </div>
                      <div
                        class="border-t-2 border-emerald-800 flex-1 ml-4"
                      ></div>
                    </div>
                    <ul
                      class="list-disc pl-4 list-inside text-xl text-gray-900"
                    >
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
