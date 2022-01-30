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
                    <p>Sistem Informasi Pendaftaran Pelatihan Balai Kerja Mandiri 
                        merupakan sebuah sistem yang digunakan untuk pendaftaran 
                        online pelatihan kerja dan juga pengelolaan data peserta pelatihan. 
                        Sistem ini dibuat pada bulan November 2021 hingga Desember 2021.
                    </p>
                    <VList dense class="rounded" color="green lighten-5">
                            <VSubheader>Dibuat dengan </VSubheader>
                            <v-list-item v-for="(item, i) in data" :key="i">
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.create"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </VList>
                        <VList dense class="rounded mt-3" color="green lighten-5">
                            <VSubheader>Fitur</VSubheader>
                            <v-list-item v-for="(item, i) in fitur" :key="i">
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </VList>   
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
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Laravel 8'},
                    {create : 'MySQL'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Register'},
                    {text : 'Add, Edit, Delete akun'},
                    {text : 'Add, Edit, Delete Pengumuman'},
                    {text : 'Seleksi dan Print data laporan'},
                    {text : 'Survey dan lihat hasil survey'},
                    {text : '14 data laporan'},
                    {text : 'Isi dan Edit Formulir'},
                ]
            }
        }
    }
</script>