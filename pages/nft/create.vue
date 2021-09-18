<template>
  <div>
      <v-container>
        <v-row>  
          <v-col
            cols="10"
          >
      <h2>Create new item</h2> <br> 
      <h3>Image, Video, Audio, or 3D Model</h3> <br>
      <p>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB</p> <br> <br>

              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="create()"
              >
          
                <v-file-input
                  v-model="form.image"
                  label="File image"
                  name="image"
                  filled
                  prepend-icon="mdi-camera"
                  show-size
                >
               <v-chip
                  small
                  label
                  color="primary"
                >
                  {{ text }}
                </v-chip>
              </v-file-input>
              <div>
                <label for="">Name : </label> <br>
                    <v-text-field
                      v-model="form.name"
                      :counter="10"
                      :rules="nameRules"
                      label="Name"
                      name="name"
                      required
                    ></v-text-field>
              </div> <br>

              <div>
                <label for="">Description : </label>  <br> <br>
                        <v-textarea
                        v-model="form.description"
                          label="desc.."
                          auto-grow
                          outlined
                          name="description"
                          rows="3"
                          row-height="25"
                          shaped
                        ></v-textarea>
              </div>

              <div>
                <label for="">Price : </label>  <br> <br>
                    <v-text-field
                      v-model="form.price"
                      label="Price"
                      name="price"
                      required
                    ></v-text-field>
                    <v-combobox
                      v-model="select"
                      :items="items"
                      label="Type"
                      disabled
                      filled
                      outlined
                    ></v-combobox>
                    </div> <br> <br>
                    <v-btn
                    elevation="3"
                    block
                    class="l"
                    type="submit"
                  >CREATE</v-btn>
                  </v-form>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
    data: () => ({
      form: {
        name: '',
        description: '',
        price: '',
        image: [],
      },
      select: ['ETH'],
      items: [
          'ETH',
          'POLYGON',
            'ETH',
          'POLYGON',
      ],
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 3) || 'Name must be less than 3 characters',
      ],
    }),
    methods: {
      async create() {
        let formdata = new FormData();
        Object.keys(this.form).forEach(element => {
          formdata.append(element, this.form[element])
        });
         await this.$axios.$post('http://nft-backend.test/api/nft', formdata)
          .then((response) => {
            console.log(response)
              this.$router.push('/')
          })
      }
    },
}
</script>

<style scoped>
.l{
  margin-bottom: 50px;
}
</style>