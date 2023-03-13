<template>
  <div class="containner">
    <div class="content">
      <div
        class="text-sm-h3 text-h4 topic"
        data-aos="fade-up"
        style="margin-bottom: 60px"
      >
        PROJECT
      </div>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
        center-active
        data-aos="fade-up"
        style="margin-bottom: 60px"
        v-if="window.width > 600"
      >
        <v-tab v-for="(item, index) in tabs" :key="index">
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
        center-active
        data-aos="fade-up"
        style="margin-bottom: 60px"
        vertical
        v-else
      >
        <v-tab v-for="(item, index) in tabs" :key="index">
          {{ item.title }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" data-aos="fade-up">
        <v-tab-item v-for="(project, index) in tabs" :key="index">
          <div
            class="d-flex flex-sm-row flex-column"
            style="
              width: 100%;
              margin-bottom: 80px;
              justify-content: center;
              align-items: center;
            "
            v-for="(item, index) in project.projectList"
            :key="index"
          >
            <img
              data-aos="fade-up"
              data-aos-duration="600"
              :src="require('@/assets/images/' + item.image)"
              class="image"
            />

            <div data-aos="fade-up" class="col-layout">
              <div class="text-sm-h4 text-h5 topic-project" v-if="item.title">
                {{ item.title }}
              </div>
              <div
                class="text-sm-h6 text-subtitle-1 topic-project"
                v-if="item.subTitle"
              >
                {{ item.subTitle }}
              </div>
              <div class="tag-row" v-if="item.links">
                <a
                  :href="link.linkTo"
                  target="_blank"
                  class="
                    text-sm-subtitle-1 text-subtitle-2
                    font-weight-regular
                    link
                  "
                  v-for="(link, i) in item.links"
                  :key="i"
                  >{{ link.title }}</a
                >
              </div>
              <div
                class="text-sm-body-1 text-body-2 font-weight-regular des"
                v-if="item.description"
              >
                {{ item.description }}
              </div>

              <div
                class="text-sm-body-1 text-body-2 font-weight-regular tag-row"
                style="margin-top: 20px"
                v-if="item.tools"
              >
                <div class="tag" v-for="(tool, i) in item.tools" :key="i">
                  {{ tool }}
                </div>
              </div>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    tab: null,
    window: {
      width: 0,
      height: 0,
    },
    tabs: [
      {
        title: "Flutter",
        projectList: [
          {
            title: "Skinx",
            subTitle: "(Mobile Application + Backend)",
            links: [
              {
                title: "Google Play",
                linkTo:
                  "https://play.google.com/store/apps/details?id=com.scb10x.skinx&referrer=utm_source%3DFacebook%26anid%3Dadmob",
              },
              {
                title: "App Store",
                linkTo: "https://apps.apple.com/us/app/skinx/id1539622700",
              },
              {
                title: "Web Page",
                linkTo: "https://skinx.app/",
              },
            ],
            description:
              "SkinX is an online dermatologist application. that has gathered dermatologists from leading hospitals and clinics to give advice To treat skin problems online with an End to End Dermatology Platform From seeing a doctor to giving advice, prescribing medications, keeping a history and following up. Providing a wide range of services in skin care, such as acne problems, skin problems, including hair and scalp.",
            tools: [
              "Flutter",
              "Nest.js",
              "TypeScript",
              "Firebase Service",
              "Google Cloud",
            ],
            image: "skinx.png",
          },

          {
            title: "GG Live (Clone)",
            subTitle: "(Mobile Application)",
            description:
              "GG Live provides you complete and the most updated football news, analyses, stats, and results exclusively to you. (Work assigned during the internship)",
            links: [
              {
                title: "Github",
                linkTo: "https://github.com/siravit2020/gg-live",
              },
              {
                title: "Google Play",
                linkTo:
                  "https://play.google.com/store/apps/details?id=th.co.wawa.ggapplication&hl=th&gl=US",
              },
              {
                title: "App Store",
                linkTo: "https://apps.apple.com/th/app/gg-live/id1529997716",
              },
            ],
            tools: [
              "Flutter",
              "Firebase Service",
              "Google Signin",
              "Riverpod",
              "Firebase Signin",
            ],
            image: "gg-preview.png",
          },
          {
            title: "BIGO Clone",
            subTitle: "(Mobile Application)",
            description:
              "This application is made to study the use of VideoCall with Agora in Flutter (Work assigned during the internship)",
            links: [
              {
                title: "Github",
                linkTo: "https://github.com/siravit2020/flutter_bigo",
              },
            ],
            tools: [
              "Flutter",
              "Firebase Service",
              "Agora",
              "Provider",
              "Google Sign In",
            ],
            image: "bigo.png",
          },
          {
            title: "Clone App CleanHome",
            subTitle: "(Mobile Application)",
            description:
              "This application is made to study the use of calendar libraries in Flutter. and use Firebase services (Work assigned during the internship)",
            links: [
              {
                title: "Github",
                linkTo: "https://github.com/siravit2020/flutter_clean_home",
              },
              {
                title: "Adobe XD",
                linkTo:
                  "https://www.xdguru.com/house-cleaning-app-xd-template/",
              },
            ],
            tools: ["Flutter", "Firebase Service"],
            image: "clean-home.png",
          },
          {
            title: "Clone App Ecommerce",
            subTitle: "(Mobile Application)",
            description:
              "Build an application from a given design and use Firebase serivces (Work assigned during the internship)",
            links: [
              {
                title: "Github",
                linkTo: "https://github.com/siravit2020/flutter_ecommerce",
              },
              {
                title: "Adobe XD",
                linkTo:
                  "https://www.xdguru.com/free-xd-mobile-ecommerce-ui-kit/",
              },
            ],
            tools: [
              "Flutter",
              "Firebase Service",
              "Google Sigin",
              "Facebook Sigin",
            ],
            image: "ecommerce-preview.png",
          },
          {
            title: "Party Haan",
            subTitle: "(Mobile Application)",
            description:
              "Application Party Hann Clone (Examination when applying for a job with SkinX)",
            links: [
              {
                title: "Github",
                linkTo: "https://github.com/siravit2020/flutter_skinx_siravit",
              },
            ],
            tools: ["Flutter", "Provider", "Firebase Service"],
            image: "skinx-test.png",
          },
          {
            title: "Minessweeper",
            subTitle: "(Mobile Application)",
            description: "Game minessweeper",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/flutter_game",
              },
            ],
            tools: ["Flutter", "Provider"],
            image: "minesweeper.png",
          },
          {
            title: "Google Ads Tutorials",
            subTitle: "(Mobile Application)",
            description:
              "This application is made for educational purposes about Google AdMob (Work assigned during the internship)",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/flutter_ads2",
              },
            ],
            tools: ["Flutter", "Google Ad Mob"],
            image: "ads.png",
          },
          {
            title: "Intern workshop",
            subTitle: "(Mobile Application)",
            description:
              "This application is made for educational purposes about Sqlite, QRcode, Fingerprint, Chart, PDF, libary in Flutter (Work assigned during the internship)",
            links: [
              {
                title: "GitHub",
                linkTo:
                  "https://github.com/siravit2020/flutter_intern_workshop",
              },
            ],

            tools: ["Flutter"],
            image: "intern-preview.png",
          },
          {
            title: "Covid19",
            subTitle: "(Mobile Application)",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/flutter_covid_new",
              },
            ],
            tools: ["Flutter", "Bloc"],
            image: "covid.png",
          },
        ],
      },
      {
        title: "Android",
        projectList: [
          {
            title: "Dessert",
            subTitle: "(Mobile Application Android + Frontend + Backend)",
            links: [
              {
                title: "Google Play",
                linkTo:
                  "https://play.google.com/store/apps/details?id=com.maiguy.dessert",
              },
            ],
            description:
              "Application for finding friends, finding girlfriends, finding people to talk to, matching using smart algorithms. or search for interested people near you Algorithms can find the right person for you. Use psychological questions to calculate the compatibility between you and the person you meet.",
            tools: [
              "Android",
              "Kotlin",
              "Vue.js",
              "Node.js",
              "JavaScript",
              "Google AdMob",
              "Facebook Developer",
              "ML Kit",
              "Firebase Service",
            ],
            image: "dessert.png",
          },

          {
            title: "Movie",
            subTitle: "(Mobile Application)",
            description:
              "This application is made for educational purposes about MVVM design pattern , LiveData , Room data , okHttp , Retrofit2 , Rxjava , Paging , Glide , Gson",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/Movie",
              },
            ],
            tools: ["Android", "Kotlin"],
            image: "movie.png",
          },
          {
            title: "PaperNote",
            subTitle: "(Mobile Application)",
            description:
              "This application is made for educational purposes about MVP design pattern , Firebase firstore , Databinding , ML kit , Material Design for android",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/PaperNote",
              },
            ],
            tools: ["Android", "Kotlin", "Firebase Service"],
            image: "paper-note.png",
          },
          {
            title: "Todo App",
            subTitle: "(Mobile Application)",
            description:
              "This application is made for educational purposes about MVVM design pattern , LiveData , Room data , Coroutines",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/Todo_App",
              },
            ],
            tools: ["Android", "Kotlin", "SQLite"],
            image: "android-todo.png",
          },
          {
            title: "Libary Progress Dialog",
            subTitle: "(Android Libary)",
            description: "",
            links: [
              {
                title: "GitHub",
                linkTo: "https://github.com/siravit2020/progress-dialog",
              },
            ],
            tools: ["Android", "Java", "Kotlin"],
            image: "android-lib.png",
          },
        ],
      },
      {
        title: "Web",
        projectList: [
          {
            title: "Rakkar digital",
            subTitle: "Full Stack",
            links: [
              {
                title: "website",
                linkTo: "https://www.rakkardigital.com/",
              },
            ],
            description:
              "Rakkar Digital is a startup company backed by SCB 10X focusing in digital asset and blockchain space",
            tools: ["Nuxt.js", "Firebase", "GCP", "CMS"],
            image: "rakkar.png",
          },
          {
            title: "SkinX",
            subTitle: "Full Stack",
            links: [
              {
                title: "website",
                linkTo: "https://skinx.app/",
              },
            ],
            description: "SkinX website",
            tools: [
              "Vue.js",
              "Nest.js",
              "JavaScript",
              "TypeScript",
              "Markdown",
            ],
            image: "skinx-landing.png",
          },
          {
            title: "Skinx Doctor",
            subTitle: "Full Stack",

            description: "Web application for doctor in SkinX",
            tools: [
              "Vue.js",
              "Nest.js",
              "JavaScript",
              "TypeScript",
              "Firebase Service",
              "Google Cloud",
            ],
            image: "skinx-web.png",
          },

          {
            title: "My Portforio",
            subTitle: "(Web Site)",
            links: [
              {
                title: "Github",
                linkTo: "https://github.com/siravit2020/siravit-portfolio",
              },
            ],

            tools: ["Vue.js", "Html", "Css", "Scss"],
            image: "port.png",
          },
        ],
      },
    ],
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  max-width: 50%;
  margin: auto;
  max-height: 400px;
  padding: 0px 40px;
  object-fit: scale-down;
}
.tag {
  color: var(--primary-color);
  background-color: #e9e9e980;
  padding: 8px 12px;
  border-radius: 10px;
  margin-bottom: 8px;
  margin-right: 8px;
  min-width: 130;
}

.col-layout {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

.des {
  margin-top: 20px;
  color: var(--promary-color);
}
.topic-project {
  font-weight: 500;
  color: var(--promary-color);
}
.tag-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.link {
  color: var(--secondary-color);
  margin-right: 12px;
  text-decoration: none;
}
.link:hover {
  color: var(--accent-color);
}

@media only screen and (max-width: 600px) {
  .col-layout {
    width: 100%;
  }
  .image {
    margin-bottom: 40px;
    max-width: 100%;
  }
}
</style>
