<template>
  <div class="container">
    <div class="content">
      <div data-aos="fade-up" class="text-sm-h3 text-h4 topic">EXPERIENCE</div>
      <v-timeline >
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
            <div class="text-sm-body-1 text-body-2 font-weight-regular">
              <div class="description">
                {{ item.description }}
              </div>
              <li
                class="sub-description"
                v-for="(item, index) in item.subDescription"
                :key="index"
              >
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
        year: "Jan 2021 - Apr 2021",
        title: "MFEC Public Company Limited",
        description: `Flutter Developer (Internship)`,
        subDescription: [
          "Build a mobile app with Flutter",
          "Use State Management to manage the state of the app with Riverpod and Provider",
          "Custom UI ,Animation with Flutter",
          "Build Ecommerce app with Flutter",
          "Build GG Fantacy(Clone) app with Flutter",
          "Build Video Streaming app with Flutter",
          "Research Librarys and use them to build the app",
          "Use Firebase Authentication to login and register ",
          "Use Firebase Analytics to track the usage of the app",
          "Use Firebase Crashlytics to track the crash of the app",
          "Use Firebase Cloud Messaging to send notification to the user",
          "Use Firebase Crashlytics to track the crash of the app",
          "Use Firebase Remote Config to manage the app's configuration",
          "Use Firebase Cloud Functions to manage the app's functions",
          "Use Firebase Test Lab to test the app",
          "Learn about Line API and use it for authentication",
          "Use Firebase Authentication to login with Line",
          "Learn about Node.js and use it Custom JWT for Line Login",
          "Use Google Maps API to get the location",
          "Use MVVM Design Pattern to build the app",
          "Learn about Test-Driven Development",
          "Use Git Flow to manage the app's source code",
          "Use Retrofit to call the API",
          "Use Codemagic to build CI/CD pipeline for Flutter",
          "Learn about Agora.io and use it to build the app",
          "Use Google Admob to advertise the app",
          "Writing custom platform-specific code for Android and iOS with Flutter",
          "Automate Test with Dart",
        ],
      },
      {
        year: "Jun 2021 - Aug 2021",
        title: "SCB10X (SkinX) part time",
        description: `Software Enginear`,
        subDescription: [
          "Build a mobile app with Flutter",
          "Custom UI ,Animation with Flutter",
          "Use State Management to manage the state of the app with Bloc",
          "Fetch data from API and use data model for get data and display result",
          "Build UI Voucher deal with Flutter",
          "Build UI Flash sale with Flutter",
          "Build UI Clinic page deal with Flutter",
          "Redesign SkinX stores with Flutter",
          "Redesign Doctor page with Flutter",
          "Redesign Drug page with Flutter",
          "Edit T&C, Policy on HTML and display with Flutter",
        ],
      },

      {
        year: "Sep 2021 - Current",
        title: "SCB10X (SkinX)",
        description: `Software Enginear`,
        subDescription: [
          "Build a mobile app with Flutter",
          "Custom UI ,Animation with Flutter",
          "Use State Management to manage the state of the app with Bloc",
          "Fetch data from API and use data model for get data and display result",
          "Build API for SkinX app with Nest.js",
          "Redesign SkinX app",
          "Redesign SkinX stores with Flutter and Nest.js",
          "Build Feature Referral with Nest.js and Flutter",
          "Build Feature Universal search with Flutter",
          "Build Feature Onboarding deal with Flutter",
          "Build Feature FAQ with (Flutter, Nest.js, HTML)",
          "Build Feature contents on web SkinX with Vue.js and Nest.js",
          "Build Feature Wallet with Flutter and Nest.js",
          "Build Feature notification calendar on web Doctor SkinX with Vue.js",
          "Build Feature Watsons with Flutter",
          "Build Feature Coin with Flutter",
          "Build UI Cart page with Flutter",
          "Build UI Promotion with Flutter",
          "Use Google Maps API to get the location and use it for Watsons Feature",
          "Setup CI/CD pipeline for SkinX web with GCP Cloud Build and Cloud Run",
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
  white-space: pre-line;
}
</style>
