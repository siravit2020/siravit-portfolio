<template>
  <div class="container">
    <div class="content">
      <div data-aos="fade-up" class="text-sm-h3 text-h4 topic">EXPERIENCE</div>
      <v-timeline>
        <v-timeline-item
          v-for="(item, i) in years"
          :key="i"
          color="#d49c6b"
          small
        >
          <template v-slot:opposite>
            <div
              data-aos="fade-up"
              class="text-sm-h6 text-subtitle font-weight-bold"
              v-text="item.year"
            ></div>
          </template>
          <div data-aos="fade-up" data-aos-delay="50" class="py-7">
            <div class="text-sm-h6 text-subtitle font-weight-bold">
              {{ item.title }}
            </div>
            <div
              class="description text-sm-body-1 text-body-2 font-weight-regular"
            >
              {{ item.description }}
            </div>
            <ul class="text-sm-body-1 text-body-2 font-weight-regular">
              <li
                class="sub-description"
                v-for="(item, index) in item.subDescription"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        year: "Jan 2021 - Apr 2021",
        title: "MFEC Public Company Limited",
        description: `Flutter Developer (Internship)`,
        subDescription: [
          "Build mobile apps, using state management libraries, creating custom UI and animations, and building e-commerce and video streaming app with flutter.",
          "Researching and using various libraries and Third-party APIs.",
          "Researching and using Firebase services.",
          "Writing custom platform-specific code for Android and iOS with Flutter.",
          "Automate Test with Dart.",
        ],
      },
      {
        year: "Jun 2021 - Aug 2021",
        title: "SkinX (part time)",
        description: `Software Enginear`,
        subDescription: [
          "Developed and delivered features using Flutter.",
          "Improve the performance of existing mobile applications.",
          "Redesign of existing features.",
        ],
      },
      {
        year: "Jul 2022 - Nov 2022",
        title: "Rakkar Digital (Outsource)",
        description: `Software Enginear`,
        subDescription: [
          "Build company website and cms using Nuxt.js.",
          "Worked closely with product owner and UX/UI to gather requirements.",
        ],
      },
      {
        year: "Sep 2021 - Current",
        title: "SkinX",
        description: `Software Enginear`,
        subDescription: [
          "Designed and developed complex software systems using. Flutter, Vue.js, Nest.js.",
          "Developed new features.",
          "Worked closely with product owner and UX/UI to gather requirements and provide solutions.",
          "Setup CI/CD pipeline for web and mobile.",
          "Setup architecture and structure with best practices using Flutter.",
          "Research and select effective tools for development.",
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 160px;
}

.description {
  color: var(--primary-color);
  white-space: pre-line;
  margin-bottom: 16px;
}
.sub-description {
  color: var(--secondary-color);
  list-style-position: outside;
}
</style>
