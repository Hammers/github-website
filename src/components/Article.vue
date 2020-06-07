<template>
    <div class="row d-flex justify-content-center">
        <div v-if="article !== {}" class="col-8">
            <h1 class="display-5 text-center">{{article.title.value}}</h1>
            <p v-html="article.body.value"></p>
        </div>
    </div>
</template>

<script>
    import deliveryClient from '../deliveryClient';
    
    export default {
        name: "",
        data() {
            return {
                article : {}
            }
        },
        created () {
            deliveryClient.items()
                .type('article')
                .equalsFilter('elements.url', this.$route.params.id)
                .toObservable()
                .subscribe(response => {
                    console.log(response);
                    this.article = response.firstItem;
                });
        },
    }
</script>

<style scoped>

</style>