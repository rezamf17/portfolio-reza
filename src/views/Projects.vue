<style>
 .image{
     width: -webkit-fill-available;
 }
</style>
<template>
<v-container>
    <v-app id="myProjects">
        <p class="text-center text-h4 pt-5">PROJECTS</p>
        <v-divider></v-divider>
        <VRow>
            <VCol md="4" class="pa-3 d-flex flex-column"
                v-for="item in projects" :key="item.id">
                <VCard color="green darken-1" elevation="10">
                    <v-img height="250" :src="require(`../assets/${item.img}`)" alt=""></v-img>
                    <p class="text-h6 pa-2 white--text ">{{item.judul}}</p>
                    <router-link  tag="v-btn" :to="item.url">
                        <v-btn class="white--text ma-2" color="green darken-4">
                        <v-icon>mdi-eye</v-icon>
                        Lihat
                        </v-btn> 
                    </router-link>
                </VCard>
            </VCol>
        </VRow>
    </v-app>
</v-container>
</template>
<script>
import dataProjects from '../data/projects.json'
    export default{
        data(){
            return{
                projects: dataProjects
            }
        }
    }
</script>