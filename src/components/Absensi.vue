<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi Absensi
                    <v-spacer></v-spacer>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText>
                    <p>Sistem Informasi Absensi Di SMK Cellular Hauro'49 Rancaekek 
                        sistem yang saya buat bersama teman saya saat magang yang 
                        dibuat pada bulan September hingga Oktober 2020. Sebagai 
                        implementasi pengetahuan yang diperoleh selama melaksanakan 
                        magang.</p>
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
                :src="require(`../assets/img/absensi/${item.image}`)"
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
                    {image : 'absensiswa.jpg'},
                    {image : 'dashboardadmin.jpg'},
                    {image : 'dashboardguru.jpg'},
                    {image : 'datasiswaadmin.jpg'},
                    {image : 'kelolaakunadmin.jpg'},
                    {image : 'rekapabsensiguru.jpg'},
                    {image : 'rekapabsensiswa.jpg'},
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Codeigniter 3'},
                    {create : 'MySQL'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Add, Edit, Delete akun'},
                    {text : 'Absen Siswa'},
                    {text : 'Konfirmasi Absen Siswa Guru'},
                    {text : 'Cetak Data Rekap Absen'},
                ]
            }
        }
    }
</script>