<template>
  <v-app>
    <v-main class="main">
      <div
        v-bind:class="{ 'app-bar-fill-init': init, 'app-bar-fill': !init }"
        :id="start"
      >
        <v-container style="max-width: 1024px">
          <v-row no-gutters align="center" justify="center">
            <v-col>
              <a
                v-bind:class="{
                  'logo-init siravit': init,
                  'logo siravit': !init,
                }"
                @click="scroll('About')"
                :id="start"
                >Siravit</a
              >
            </v-col>
            <v-col>
              <div class="row-layout">
                <v-menu bottom left v-if="window.width <= 740">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      light
                      icon
                      v-bind="attrs"
                      v-on="on"
                      v-if="start == '0'"
                    >
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <v-btn dark icon v-bind="attrs" v-on="on" v-else>
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item v-for="(item, i) in menu" :key="i">
                      <v-list-item-title
                        ><a
                          :id="start"
                          class="text-body-2 font-weight-bold menu-init"
                          @click="scroll(item)"
                          >{{ item }}</a
                        ></v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-col
                  cols="auto"
                  v-for="(item, index) in menu"
                  :key="index"
                  v-else
                >
                  <a
                    :id="start"
                    v-bind:class="{
                      'text-body-2 font-weight-bold menu-init': init,
                      'text-body-2 font-weight-bold menu': !init,
                    }"
                    @click="scroll(item)"
                    >{{ item }}</a
                  >
                  <div
                    v-bind:class="{ 'underline-init': init, underline: !init }"
                    :id="start"
                    v-if="tabIndex == item"
                  ></div>
                </v-col>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-container style="max-width: 1024px">
        <AboutMe id="About" />
        <div class="space"></div>
        <Experience id="Eexperience" />
        <div class="space"></div>
        <Education id="Education" />
        <div class="space"></div>
        <Skill id="Skill"></Skill>
        <div class="space"></div>
        <Project id="Project" />
        <div class="space"></div>
      </v-container>
      <Contract id="Contract" />
    </v-main>
  </v-app>
</template>

<script>
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import Contract from "./components/Contract.vue";
export default {
  name: "App",
  index: null,
  components: {
    AboutMe,
    Education,
    Experience,
    Skill,
    Project,
    Contract,
  },
  data: () => ({
    dialog: false,
    appBarFill: false,
    oldScroll: 0,
    window: {
      width: 0,
      height: 0,
    },
    init: true,
    hidden: false,
    tabIndex: null,
    start: "0",
    menu: [
      "About",
      "Eexperience",
      "Education",
      "Skill",
      "Project",
      "Contract",
      "Resume",
    ],
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.handleResize();
  },

  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    handleScroll() {
      this.start = "1";
      this.oldScroll = window.scrollY;
      if (window.scrollY > 200 && this.appBarFill) return;
      if (window.scrollY > 200) {
        this.hidden = false;
        this.appBarFill = true;
        this.init = false;
      } else {
        if (!this.hidden) setTimeout(() => (this.hidden = true), 500);
        this.appBarFill = false;
        this.start = "0";
      }
    },
    scroll(id) {
      this.tabIndex = id;
      if (id === "Resume") {
        window.open(
          "https://firebasestorage.googleapis.com/v0/b/portfolio-10fb3.appspot.com/o/resume%2FSiravit%20Pichphol.pdf?alt=media",
          "_blank"
        );
        return;
      }
      window.scrollTo(0, document.getElementById(id).offsetTop - 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}
.row-layout {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.app-bar-fill-init {
  padding: 0px 20px;
  position: fixed;
  display: flex;
  z-index: 10;
  color: white;
  background-color: white;
  width: 100%;
  height: 60px;
  align-items: center;
}
.app-bar-fill {
  padding: 0px 20px;
  position: fixed;
  display: flex;
  z-index: 10;
  color: white;
  background-color: white;
  width: 100%;
  height: 60px;
  align-items: center;
  animation-name: changeBackground;
  animation-duration: 0.2s;
}
.app-bar-fill[id="1"] {
  background-color: var(--appBar-color);
  animation-name: changeBackgroundAfter;
  animation-duration: 0.5s;
}
.menu-init {
  color: var(--primary-color);
}
.menu {
  color: var(--primary-color);
  animation-name: changeTextColor;
  animation-duration: 0.2s;
}
.menu[id="1"] {
  color: rgb(255, 255, 255);
  animation-name: changeTextColorAfter;
  animation-duration: 0.5s;
}
.logo-init {
  color: var(--primary-color);
  font-size: 26px;
}
.logo {
  color: var(--primary-color);
  font-size: 26px;
  animation-name: changeTextColor;
  animation-duration: 0.2s;
}
.logo[id="1"] {
  color: white;
  animation-name: changeTextColorAfter;
  animation-duration: 0.5s;
}
.underline-init {
  height: 2px;
  background-color: var(--primary-color);
}
.underline {
  height: 2px;
  background-color: var(--primary-color);
  animation-name: changeTextColor;
  animation-duration: 0.2s;
}
.underline[id="1"] {
  background-color: white;
  animation-name: changeTextColorAfter;
  animation-duration: 0.5s;
}

.space {
  margin-top: 80px;
}
@keyframes changeBackground {
  from {
    background-color: var(--appBar-color);
  }
  to {
    background-color: var(--appBar-color-white);
  }
}
@keyframes changeBackgroundAfter {
  from {
    background-color: var(--appBar-color-white);
  }
  to {
    background-color: var(--appBar-color);
  }
}
@keyframes changeTextColorAfter {
  from {
    color: var(--primary-color);
  }
  to {
    color: white;
  }
}
@keyframes changeTextColor {
  from {
    color: white;
  }
  to {
    color: var(--primary-color);
  }
}
</style>
