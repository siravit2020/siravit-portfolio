<template>
  <div class="container">
    <div class="content">
      <img
        data-aos="fade-down"
        data-aos-duration="600"
        src="@/assets/images/siravit21.png"
        alt="Mai"
        style="object-fit: cover"
        class="image"
      />
      <div class="about">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          class="text-sm-h3 text-h4 name"
        >
          SIRAVIT PICHPHOL
        </div>
        <vue-typed-js
          :strings="['SOFTWARE ENGINEAR']"
          :loop="true"
          :typeSpeed="100"
          :startDelay="400"
          :fadeOut="true"
          :fadeOutClass="'fadeOutClass'"
          style="margin-bottom: 20px; height: 30px"
        >
          <div
            class="typing text-sm-h5 text-h6-regular career"
            data-aos="fade-down"
            data-aos-duration="800"
          ></div>
        </vue-typed-js>
        <div
          data-aos="fade-down"
          data-aos-duration="900"
          class="
            text-sm-subtitle-1 text-subtitle-2
            font-weight-regular
            description
          "
        >
          I am a software enginear specializing in mobile and frontend with
          strong problemsolving skills and I can work with best practices and
          best performance.
        </div>
        <div class="contacts">
          <v-btn
            icon
            color="#d49c6b"
            href="https://www.facebook.com/profile.php?id=100004074141039"
            target="_blank"
            class="button-icon"
          >
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              src="@/assets/icons/facebook.svg"
              class="icon"
            />
          </v-btn>
          <v-btn
            icon
            color="#d49c6b"
            href="https://line.me/ti/p/X1KcXqED80"
            target="_blank"
            class="button-icon"
          >
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="50"
              src="@/assets/icons/line.svg"
              class="icon"
            />
          </v-btn>
          <v-btn
            icon
            color="#d49c6b"
            href="https://github.com/siravit2020?tab=repositories"
            target="_blank"
            class="button-icon"
          >
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
              src="@/assets/icons/github.svg"
              class="icon"
            />
          </v-btn>
          <v-btn icon color="#d49c6b" href="tel:0851325654" class="button-icon">
            <img
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="150"
              src="@/assets/icons/phone.svg"
              class="icon"
            />
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    link() {},
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
  position: relative;
}

.image {
  height: 40vw;
  max-width: 250px;
  max-height: 250px;
  width: 40vw;
  margin: 0px;
  border-radius: 50%;
  background-color: #eff0f2;
}

.about {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 40px;
}
.content {
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.name {
  font-weight: 500;
  text-align: center;
  color: var(--primary-color);
}
.career {
  color: var(--accent-color);
}
.description {
  max-width: 800px;
  text-align: center;
  color: var(--secondary-color);
}
.contacts {
  // max-width: 300px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.icon {
  height: 24px;
  width: 24px;
}
.button-icon {
  margin: 0px 10px;
}
.icon:hover {
  height: 24px;
  width: 24px;
  filter: invert(67%) sepia(68%) saturate(275%) hue-rotate(344deg)
    brightness(86%) contrast(92%);
}
.phone {
  margin-top: 20px;
  display: flex;
}
</style>
