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
                    <p>Sistem Absensi ini merupakan sistem</p>   
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
                ]
            }
        }
    }
</script>