<template>
  <v-app>
    <v-app-bar
      app
      color="green darken-3"
      dark
      class="d-flex flex-column"
    >
<v-spacer></v-spacer>
     
     <router-link tag="v-btn" to="/" >
      <v-btn text >
        <v-icon>mdi-home</v-icon>
        Home
      </v-btn>
     </router-link>
      <router-link  tag="v-btn" to="/projects">
        <v-btn text>
          <v-icon>mdi-briefcase</v-icon>
          Projects
        </v-btn> 
      </router-link>
    </v-app-bar>
    <v-main>
    <!-- <Home /> -->


    </v-main>
    <router-view/>
  </v-app>
</template>

<script>
// import Home from './views/Home.vue';
// import Projects from './views/Projects.vue';

export default {
  name: 'App',

  data: () => ({
      ec : 'ecommando',
      
  }),
  components: {
    // Home,
    // Projects
    },
};
</script>
