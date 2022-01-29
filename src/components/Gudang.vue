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
                    <p>Sistem Informasi Gudang ini merupakan sistem</p>   
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
                ]
            }
        }
    }
</script>