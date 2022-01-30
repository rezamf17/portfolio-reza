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
                    <p>Sistem Informasi Penerimaan Peserta Didik Baru 
                        merupakan tema penelitian skripsi saya. 
                        Sistem ini digunakan untuk pendaftaran siswa baru 
                        secara online dimasa pandemi. Sistem ini dibuat pada 
                        bulan Juli 2021 hingga Agustus 2021.</p> 
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
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Laravel 7'},
                    {create : 'MySQL'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Register'},
                    {text : 'Add, Edit, Delete akun'},
                    {text : 'Add, Edit, Delete Pengumuman'},
                    {text : 'Print Data Calon Siswa'},
                    {text : 'Konfirmasi Calon Siswa'},
                    {text : 'Print Formulir Calon Siswa'},
                    {text : 'Add, Edit Formulir'},
                    {text : 'Upload Dokumen'},
                ]
            }
        }
    }
</script>