<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi DSW
                    <v-spacer></v-spacer>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText>
                    <p>Sistem Informasi Pengelolaan Laporan DSW (Digital Service dan Wifi). 
                        Sistem ini dibuat untuk pengelolaan laporan dan target dari 
                        kantor cabang PT. Telkom. Sistem ini dibuat pada bulan 
                        september 2021 hingga oktober 2021.</p>
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
                :src="require(`../assets/img/dsw/${item.image}`)"
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
                    {image : 'dashboardstaff.jpg'},
                    {image : 'dashboardadmin.jpg'},
                    {image : 'dashboardmanager.jpg'},
                    {image : 'datalaporanmanager.jpg'},
                    {image : 'kelolaakun.jpg'},
                    {image : 'keloladatalaporan.jpg'},
                    {image : 'keloladatatarget.jpg'},
                    {image : 'kelolanamaprodukstaff.jpg'},
                    {image : 'kelolaprodukstaff.jpg'},
                    {image : 'lihatlaporanmanager.jpg'},
                    {image : 'lihatlaporanstaff.jpg'},
                    {image : 'lihatprodukstaff.jpg'},
                    {image : 'viewreportlaporanstaff.jpg'},
                    {image : 'viewreportstaff.jpg'},
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Laravel 8'},
                    {create : 'MySQL'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Add, Edit, Delete akun'},
                    {text : 'Add, Edit, Delete Target'},
                    {text : 'Add, Edit, Delete Produk'},
                    {text : 'Add, Edit, Delete Nama Produk'},
                    {text : 'Print Excel Target'},
                    {text : 'Print Excel Produk'},
                    {text : 'Perankingan Otomaris'},
                    {text : 'Perhitungan Persen Otomatis'},
                ]
            }
        }
    }
</script>