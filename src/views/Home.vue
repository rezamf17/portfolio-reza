<template>
<v-container tile elevation="10" class="mt-5">
  <v-card id="home" class="mx-auto pt-10  d-flex flex-column" width="1500" height="550" color="green" elevation="10">
    <v-card-text class="pl-10">
      <p class="white--text pt-15">HELLO, </p>
      <p class="text-h4 white--text ">
        I AM REZA MUHAMAD FAUZI
      </p>
      <p class="white--text">JUNIOR WEB DEVELOPER</p>
      <v-btn text href="https://github.com/rezamf17">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-actions class="pb-15 pl-10">
      <v-btn color="green darken-4" class="white--text">DOWNLOAD CV</v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>

  export default {
    name: 'App',

  }
</script>
