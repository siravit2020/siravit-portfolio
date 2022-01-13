<template>
  <div class="containner">
    <div class="content">
      <div class="text-sm-h3 text-h4 topic" data-aos="fade-up">SKILL</div>
      <div class="d-flex flex-sm-row flex-column" style="">
        <div class="col-layout">
          <div v-for="(item, index) in skills" :key="index">
            <div
              data-aos="fade-up"
              class="text-sm-h5 text-h6 title"
              align="start"
            >
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
            <div data-aos="fade-up" class="text-h5 title" align="start">
              {{ item.title }}
            </div>
            <v-row style="margin-bottom: 10px">
              <div
                data-aos="fade-up"
                :data-aos-delay="i * 50"
                class="text-body-1 tag"
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
        ],
      },
      {
        title: "Frameworks",
        content: [
          "Flutter",
          "Android",
          "Vuetify",
          "Burfy",
          "TypeORM",
          "Nest.js",
          "Node.js",
          "Vue.js",
        ],
      },
      {
        title: "Structure",
        content: [
          "Design Pattern (MVC, MVP, MVVM)",
          "State management (Bloc, Provider, Riverpod, GetX)",
        ],
      },
      {
        title: "Database",
        content: [
          "NoSql (Firebase Realtime,Firebase firestore)",
          "Sql (MySql)",
        ],
      },
    ],
    skills2: [
      {
        title: "Tools",
        content: [
          "Visual Studio Code",
          "Android Studio",
          "Postman",
          "Figma",
          "AdobeXD",
          "Codemagic",
        ],
      },
      {
        title: "Other",
        content: [
          "CI/CD",
          "Firebase Service",
          "Testing (UnitTest, IntegrationTest)",
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
  width: 50%;
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
