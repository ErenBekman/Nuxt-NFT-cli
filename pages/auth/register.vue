<template>
      <v-container>
        <v-row>
             <v-form ref="registerForm" v-model="valid" lazy-validation >
                  <h2 class="x">REGISTER</h2>
                <v-row>
                    <v-col cols="12">
                        <v-text-field 
                        v-model="form.name" 
                        :rules="[rules.required]" 
                        label="Name" 
                        maxlength="20" 
                        required>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                         v-model="form.email" 
                         :rules="emailRules" 
                         label="E-mail" 
                         required>
                         </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                         v-model="form.password" 
                         :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                         :rules="[rules.required, rules.min]" 
                         :type="show1 ? 'text' : 'password'" 
                         name="input-10-1" 
                         label="Password" 
                         hint="At least 6 characters" 
                         counter @click:append="show1 = !show1">
                         </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                         block 
                         v-model="form.password_confirmation"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                          :rules="[rules.required, passwordMatch]" 
                          :type="show1 ? 'text' : 'password'" 
                          name="input-10-1" 
                          label="Confirm Password" 
                          counter 
                          @click:append="show1 = !show1">
                          </v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                        <v-btn 
                        x-large block 
                        :disabled="!valid"
                         @click.prevent="register" 
                         class="btn"
                         >
                         Register
                         </v-btn>
                    </v-col>
                        <span class="text-red-200 italic" v-if="errors">{{ errors[0]}}</span>
                </v-row>
            </v-form>
        </v-row>
      </v-container>
</template>

<script>
export default {
    
  // middleware: ['guest'],
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  data: () => ({
    valid: true, 
    form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    },
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 6) || "Min 6 characters"
    },
    errors: [],
  }),
    methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    async register() {
      try {
        // await this.$axios.$get('http://nft-backend.test/sanctum/csrf-cookie')
        await this.$axios.$post('http://nft-backend.test/api/register', this.form)
          .then((response) => {
              console.log(response)
              // this.$auth.setUser(response.user)
              // localStorage.setItem("token", response.token)
              this.$auth.setUserToken(response.token)
              // this.$router.push('/auth/login')
          })
          .catch((err) => {
              this.errors = err.response.data.errors
          })
      } catch (error) {}
    }

  },
}
</script>

<style>
.x{
  margin-top: 30px;
}
.btn {
  margin-bottom: 40px;
}
</style>







