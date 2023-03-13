<template>
  <div class="containner">
    <div class="content">
      <div class="text-sm-h3 text-h4 topic" data-aos="fade-up">SKILL</div>
      <div
        class="d-flex flex-sm-row flex-column justify-sm-space-between"
        style=""
      >
        <div class="col-layout">
          <div v-for="(item, index) in skills" :key="index">
            <div data-aos="fade-up" class="text-sm-h5 text-h6 title">
              {{ item.title }}
            </div>
            <v-row no-gutters style="margin-bottom: 10px">
              <div
                data-aos="fade-up"
                :data-aos-delay="i * 50"
                class="text-sm-body-1 text-body-2 tag"
                v-for="(item, i) in item.content"
                :key="i"
              >
                {{ item }}
              </div>
            </v-row>
          </div>
        </div>
        <div class="col-layout">
          <div v-for="(item, index) in skills2" :key="index">
            <div data-aos="fade-up" class="text-sm-h5 text-h6 title">
              {{ item.title }}
            </div>
            <v-row no-gutters style="margin-bottom: 10px">
              <div
                data-aos="fade-up"
                :data-aos-delay="i * 50"
                class="text-sm-body-1 text-body-2 tag"
                v-for="(item, i) in item.content"
                :key="i"
              >
                {{ item }}
              </div>
            </v-row>
          </div>
          <DeskAnimation class="desk" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeskAnimation from "../components/DeskAnimation.vue";
export default {
  components: {
    DeskAnimation,
  },
  data: () => ({
    skills: [
      {
        title: "Coding Languages",
        content: [
          "Dart",
          "Kotlin",
          "Java",
          "JavaScript",
          "TypeScript",
          "HTML",
          "SCSS",
          "CSS",
          "Solidity",
        ],
      },
      {
        title: "Frameworks",
        content: [
          "Flutter",
          "Android",
          "Vuetify",
          "TypeORM",
          "React.js",
          "Nest.js",
          "Node.js",
          "Vue.js",
          "Nuxt.js",
          "React.js",
          "Next.js",
          "Tailwind CSS",
        ],
      },
      {
        title: "Structure",
        content: [
          "Design pattern (MVC, MVP, MVVM, etc.)",
          "State management (Bloc, Provider, Riverpod, GetX)",
          "SOLID design principles",
        ],
      },
      {
        title: "Database",
        content: ["Firebase firestore", "Firebase Realtime", "MySQL"],
      },
      {
        title: "Clouds",
        content: ["Firebase", "Google Cloud Platform"],
      },
      {
        title: "Devops",
        content: [
          "Git",
          "Docker",
          "CI/CD",
          "GCP Cloud Build",
          "GCP Cloud Run",
          "Codemagic",
        ],
      },
      {
        title: "Microservices",
        content: [
          "Nx.dev",
          "GCP Pub/Sub",
          "GCP Cloud Tasks",
          "Kafka",
          "Saga Pattern",
          "Messaging Broker",
        ],
      },
    ],
    skills2: [
      {
        title: "Knowledge",
        content: [
          "RESTful API",
          "Testing (UnitTest, IntegrationTest)",
          "Analytics (Google Analytics)",
          "Kafka",
          "Saga Pattern",
          "Messaging Broker",
          "Google login API",
          "Google Map API",
          "Facebook login API",
          "Line login API",
          "Agora.io",
          "Google play store",
          "Apple store",
        ],
      },
      {
        title: "Tools",
        content: [
          "Visual Studio Code",
          "Android Studio",
          "Postman",
          "Figma",
          "AdobeXD",
          "Codemagic",
          "Sourcetree",
          "Jira",
        ],
      },
      {
        title: "Others",
        content: [
          "Teamwork, multitasking, and attention to detail.",
          "Experience with Agile.",
          "development methodologies. Strong problem-solving and analytical skills.",
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.containner {
  width: 100%;
  margin-bottom: 160px;
}
.content {
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}
.col-layout {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 48%;
}
.title {
  margin-bottom: 10px;
  color: var(--primary-color);
  font-weight: 500;
}
.skill {
  color: var(--primary-color);
  font-weight: 400;
  padding-right: 10px;
}
.tag {
  color: var(--primary-color);
  background-color: #e9e9e980;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 400;
  margin-bottom: 8px;
  margin-right: 8px;
  min-width: 130;
}
.desk {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .col-layout {
    width: 100%;
  }
}
</style>
