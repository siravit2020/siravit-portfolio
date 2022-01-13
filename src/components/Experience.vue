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
              :data-aos="i % 2 != 0 ? 'fade-left' : 'fade-right'"
              class="text-sm-h6 text-subtitle font-weight-bold"
              v-text="item.year"
            ></div>
          </template>
          <div data-aos="fade-up" data-aos-delay="50" class="py-7">
            <div class="text-sm-h6 text-subtitle font-weight-bold">
              {{ item.title }}
            </div>
            <div
              class="text-sm-body-1 text-body-2 font-weight-regular description"
            >
              {{ item.description }}
              <li v-for="(item, index) in item.subDescription" :key="index">
                {{ item }}
              </li>
            </div>
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
        color: "cyan",
        year: "Jan 2021 to Apr 2021",
        title: "MFEC Public Company Limited",
        description: `Flutter Developer (Internship)
Do the tasks assigned by the mentor
`,
        subDescription: [
          "Build Mobile Applications with Adobe XD Design",
          "Testing",
          "CI/CD",
        ],
      },
      {
        color: "green",
        year: "Jun 2021",
        title: "SCB10X (SkinX) part time",
        description: `Software Enginear`,
        subDescription: [
          "Build UX/UI on Application SkinX with best performance and beauty",
        ],
      },

      {
        color: "pink",
        year: "Sep 2021",
        title: "SCB10X (SkinX)",
        description: `Software Enginear`,
        subDescription: [
          "Build UX/UI on Application SkinX with best performance and beauty",
          "Build some feature on Application SkinX (Mobile Application, Backend)",
          "Build UX/UI on Web Doctor SkinX",
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
.content {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.description {
  color: var(--secondary-color);
  white-space: pre-line;
}
</style>
