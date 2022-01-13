<template>
  <div class="containner">
    <div class="content">
      <div class="text-sm-h3 text-h4 topic">CONTRACT</div>
      <div class="d-flex flex-sm-row flex-column" style="width: 100%">
        <div class="detail">
          <div>
            <span
              class="text-sm-body-1 text-body-2 font-weight-bold"
              style="padding-right: 4px"
            >
              Cell:
            </span>
            <span class="text-sm-body-1 text-body-2" style="padding-right: 4px">
              085-132-5654
            </span>
          </div>
          <div>
            <span
              class="text-sm-body-1 text-body-2 font-weight-bold"
              style="padding-right: 4px"
            >
              Email:
            </span>
            <span class="text-sm-body-1 text-body-2">
              siravitpichphol@gmail.com
            </span>
          </div>
          <div>
            <span
              class="text-sm-body-1 text-body-2 font-weight-bold"
              style="padding-right: 4px"
            >
              GitHub:
            </span>
            <span class="text-sm-body-1 text-body-2">
              https://github.com/siravit2020
            </span>
          </div>
          <div>
            <span
              class="text-sm-body-1 text-body-2 font-weight-bold"
              style="padding-right: 4px"
            >
              Address:
            </span>
            <span class="text-sm-body-1 text-body-2">
              Rangsiya Village ramintra 74 Kahnna yao 10230 Bangkok Thailand
            </span>
          </div>
        </div>
        <form class="form" ref="form" @submit.prevent="sendEmail">
          <v-text-field
            type="text"
            label="name"
            name="name"
            required
            solo
            background-color="white"
          ></v-text-field>
          <v-text-field
            type="email"
            label="email"
            name="email"
            required
            solo
          ></v-text-field>
          <v-textarea
            label="message"
            name="message"
            rows="3"
            solo
            required
          ></v-textarea>
          <v-btn type="submit" color="success"> Send </v-btn>
        </form>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="340">
            <v-card>
              <v-card-title class="text-h5">
                Thank you for your email
              </v-card-title>
              <v-card-text
                >Your message is important to Me and I will respond as soon as
                possible.</v-card-text
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <!--   <form class="form" ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    sendEmail() {
      console.log(process.env.VUE_APP_EMAIL_USER_ID);
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAIL_SERVICE_ID,
          process.env.VUE_APP_EMAIL_TEMPLATE_ID,
          this.$refs.form,
          process.env.VUE_APP_EMAIL_USER_ID
        )
        .then(
          (result) => {
            this.dialog = true;
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  padding-right: 20px;
  // background-color: aqua;
}
.form {
  width: 50%;
}
.containner {
  color: white;
  background-color: var(--primary-color);
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 50px;
}
.content {
  max-width: 1024px;
}
.topic {
  width: 100%;
  margin: auto !important;
  padding-left: -1px;
  padding-top: 50px;
  padding-bottom: 20px !important;
}
@media only screen and (max-width: 600px) {
  .detail {
    width: 100%;
    margin-bottom: 40px;
    margin-right: 0px;
  }
  .form {
    width: 100%;
  }
}
</style>
