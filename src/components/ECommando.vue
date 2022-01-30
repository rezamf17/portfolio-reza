<template>
    <VApp>
        <vContainer>
            <VCard color="green" elevation="10">
                <VCardTitle class="white--text">Sistem Informasi Monitoring
                    <v-spacer></v-spacer>
                        <router-link to="/projects" tag="v-btn">
                        <v-btn color="secondary">
                            <v-icon>mdi-undo</v-icon>
                            Back
                        </v-btn>
                        </router-link>
                </VCardTitle>
                <VCardText class="white--text">
                    <p>Sistem Informasi Monitoring Berbasis Web ini merupakan 
                        sistem yang saya buat bersama teman saya saat magang
                         di PT. Biofarma pada bulan Februari 2020 sampai Mei 2020. 
                         Sebagai implementasi pengetahuan yang diperoleh selama 
                         melaksanakan magang.</p>   
                    <p>
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
                    </p>
                </VCardText>
            </VCard>
            <v-carousel>
                <v-carousel-item
                v-for="(item, i) in src"
                :key="i"
                :src="require(`../assets/img/ecommando/${item.image}`)"
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
                    {image : 'LoginBiofarma.jpg'},
                    {image : 'RegisterBiofarma.jpg'},
                    {image : 'AddCommandoBiofarma.jpg'},
                    {image : 'CommandoDetailBiofarma.jpg'},
                    {image : 'CommandoDetail2Biofarma.jpg'},
                    {image : 'CommandoListBiofarma.jpg'},
                    {image : 'DashboardBiofarma.jpg'},
                    {image : 'TodoListBiofarma.jpg'},
                ],
                data : [
                    {create : 'C#'},
                    {create : 'ASP.NET'},
                    {create : 'Ms. SQL Server'},
                ],
                fitur : [
                    {text : 'Login'},
                    {text : 'Register'},
                    {text : 'Todo List'},
                    {text : 'Add Commando'},
                    {text : 'Commando List'},
                    {text : 'Commando Detail'},
                ]
            }
        }
    }
</script>