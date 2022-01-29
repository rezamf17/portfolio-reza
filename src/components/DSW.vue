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
                    <p>Sistem Absensi ini merupakan sistem</p>   
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
                ]
            }
        }
    }
</script>