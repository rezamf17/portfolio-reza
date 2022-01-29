<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi PPDB
                    <v-spacer></v-spacer>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText>
                    <p>Sistem Absensi ini merupakan sistem</p>   
                </VCardText>
            </VCard>
            <v-carousel>
                <v-carousel-item
                v-for="(item, i) in src"
                :key="i"
                :src="require(`../assets/img/ppdb/${item.image}`)"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
        </vContainer>
    </VApp>
</template>
<script>
    export default {
        data(){
            return {
                src : [
                    {image : 'login.jpg'},
                    {image : 'daftar.jpg'},
                    {image : 'home.jpg'},
                    {image : 'dashboardadmin.jpg'},
                    {image : 'dashboardpanitia.jpg'},
                    {image : 'dashboardcalonsiswa.jpg'},
                    {image : 'dataakun.jpg'},
                    {image : 'datacalonsiswa.jpg'},
                    {image : 'detail.jpg'},
                    {image : 'formulir.jpg'},
                    {image : 'gantiformulir.jpg'},
                    {image : 'detail.jpg'},
                    {image : 'formulir.jpg'},
                    {image : 'uploadfile.jpg'},
                    {image : 'pengumuman.jpg'},
                    {image : 'tambahpengumuman.jpg'},
                ]
            }
        }
    }
</script>