<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi Gudang
                    <v-spacer></v-spacer>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText>
                    <p>Sistem Informasi Gudang merupakan implementasi 
                        studi kasus saya dalam mempelajari framework laravel. 
                        Sistem ini digunakan untuk pengelolaan data barang 
                        yang masuk dan keluar pada suatu gudang. Sistem ini 
                        dibuat pada bulan Oktober 2020 hingga November 2020.</p> 
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
                :src="require(`../assets/img/gudang/${item.image}`)"
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
                    {image : 'logingudang.jpg'},
                    {image : 'databarangkeluar.jpg'},
                    {image : 'databarangmasuk.jpg'},
                    {image : 'databarang.jpg'},
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Laravel 7'},
                    {create : 'MySQL'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Add, Edit, Delete Nama Barang'},
                    {text : 'Add, Edit, Delete Barang Masuk'},
                    {text : 'Add, Edit, Delete Barang Keluar'},
                ]
            }
        }
    }
</script>