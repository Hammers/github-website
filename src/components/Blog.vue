<template>
    <div class="row d-flex justify-content-center">
        <div class="col-8">
            <div v-for="(post,index) in posts" :key="index">
                <div class="card m-5" @click="clickPost(post)">
                    <div class="row">
                        <div class="col-3 d-flex flex-column align-items-center justify-content-center">
                            <div><h1>{{postDate(post)}}</h1></div>
                            <div><h3>{{postMonthYear(post)}}</h3></div>
                        </div>
                        <div class="col-9 d-flex flex-column align-items-center justify-content-center">
                            <h1 class="display-5 text-center">{{post.title.value}}</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import deliveryClient from '../deliveryClient';
    import * as KontentDelivery from "@kentico/kontent-delivery";
    import moment from 'moment';
    
    export default {
        name: "",
        data() {
            return {
                posts: []
            }
        },
        created () {
            deliveryClient.items()
                .type('article')
                .orderParameter('elements.publish_date', KontentDelivery.SortOrder.desc)
                .limitParameter(5)
                .elementsParameter(['title','publish_date','header_image','url'])
                .toObservable()
                .subscribe(response => {
                    console.log(response)
                    this.posts = response.items;
                });
        },
        methods: {
            clickPost(post) {
                this.$router.push('/blog/' + post.url.value);
            },
            postDate(post) {
                return moment(post.publish_date.value).format("DD");
            },
            postMonthYear(post) {
                return moment(post.publish_date.value).format("MMM YYYY");
            }
        }
    }
</script>

<style scoped>

</style>