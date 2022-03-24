<template lang="">
    <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Resto Lumen (Latihan Demo)
                    <v-spacer></v-spacer>
                    <v-btn class="yellow mr-5" href="https://restolumen-demo.web.app/">Demo</v-btn>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText>
                    <p>Sistem Website Resto Lumen merupakan project latihan saya untuk mengembangkan
                        skill di bidang fullstack developer.</p>  
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
                :src="require(`../assets/img/restolumen/${item.image}`)"
                reverse-transition="fade-transition"
                transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
        </vContainer>
</template>
<script>
export default {
     data(){
            return {
                src : [
                    {image : 'categorytable.jpg'},
                    {image : 'dashboard.jpg'},
                    {image : 'detailorder.jpg'},
                    {image : 'menutable.jpg'},
                    {image : 'ordertable.jpg'},
                ],
                data : [
                    {create : 'PHP'},
                    {create : 'Laravel Lumen'},
                    {create : 'MySQL'},
                    {create : 'Vue JS'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Register'},
                    {text : 'Membuat Pesanan'},
                    {text : 'Add, Edit, Delete Menu'},
                    {text : 'Add, Edit, Delete Category'},
                    {text : 'Add, Edit, Delete akun'},
                    {text : 'Print Data Order And Customer'},
                ]
            }
        }
}
</script>
<style lang="">
    
</style>