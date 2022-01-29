<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi BLKM
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
                :src="require(`../assets/img/blkm/${item.image}`)"
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
                    {image : 'web utama.jpg'},
                    {image : 'dashboard.jpg'},
                    {image : 'dashboardadmin.jpg'},
                    {image : 'datauser.jpg'},
                    {image : 'formulir.jpg'},
                    {image : 'hasilseleksi.jpg'},
                    {image : 'hasilsurvey1.jpg'},
                    {image : 'hasilsurvey2.jpg'},
                    {image : 'kelolaakun.jpg'},
                    {image : 'laporan.jpg'},
                    {image : 'lihatuser.jpg'},
                    {image : 'laporan.jpg'},
                    {image : 'pengumuman.jpg'},
                    {image : 'seleksidata.jpg'},
                    {image : 'semuahasilsurvey.jpg'},
                    {image : 'survey.jpg'},
                ]
            }
        }
    }
</script>