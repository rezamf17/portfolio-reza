<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi BPRS
                    <v-spacer></v-spacer>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText>
                    <p>Sistem Informasi Pembukaan Rekening Di BPRS Al-Masoem 
                        merupakan sebuah sistem pembukaan rekening 
                        secara online melalui website. Sistem ini dibuat pada 
                        bulan Desember 2021 hingga Februari 2022.</p>  
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
                :src="require(`../assets/img/bprs/${item.image}`)"
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
                    {image : 'dashboardsuperadmin.jpg'},
                    {image : 'datarekeningdeposito.jpg'},
                    {image : 'datarekeningtabungan.jpg'},
                    {image : 'kelolaakunsuperadmin.jpg'},
                    {image : 'form1.jpg'},
                    {image : 'form2.jpg'},
                    {image : 'deposito1.jpg'},
                    {image : 'deposito2.jpg'},
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Laravel 8'},
                    {create : 'MySQL'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Isi, Edit Formulir'},
                    {text : 'Add, Edit, Delete akun'},
                    {text : 'Print Formulir'},
                ]
            }
        }
    }
</script>