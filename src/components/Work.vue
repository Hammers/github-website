<template>
    <div class="container-fluid px-0">
        <div class="row align-items-center content">
            <div class="col-md-7 order-2 order-md-1">
                <img src="../assets/ricknmorty.jpg" alt="Rick and Morty" class="img-fluid">
            </div>
            <div class="col-md-5 order-1 order-md-2 mb-5 mb-md-0 ">
                <div class="row text-center justify-content-center">
                    <div class="col-10">
                        <h2>Big Pixel Studios</h2>
                        <transition name="slide" mode="out-in" appear v-if="showingBigPixel">
                            <div>
                                <p>
                                    I am currently working as a frontend developer on an upcoming Rick & Morty mobile game. Hopefully I'll be able to tell you much more very soon!</p>
                            </div>
                        </transition>
                        <div v-else><a href="#" class="lead" v-on:click.prevent="showingBigPixel=true">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-5 mb-5 mb-md-0">
                <div class="row text-center justify-content-center">
                    <div class="col-10 blurb my-3">
                        <h2>Chronicle: RuneScape Legends</h2>
                        <transition name="slide" mode="out-in" appear v-if="showingChronicle">
                            <div>
                        <p>
                            Working at Jagex, I was a developer on Chronicle: RuneScape Legends, a unique digital CCG for PC
                        built in Unity, in which you play cards to create quests for legends from the RuneScape world, in an effort to
                        improve your legend and eventually defeat your rival. It was launched on Steam in 2016.</p>
                        <p>I helped take the game from an idea in a meeting room to 2D prototyping with just a designer, 
                            artist and I, all the way through to working with a team of over 20 for its final release. I covered many 
                            aspects of development including designing and prototyping gameplay, building robust core systems in C#, 
                            working on server infrastructure, balancing cards and running live ops.</p>
                        <p>
                            It saw critical success (<a href="https://www.metacritic.com/game/pc/chronicle-runescape-legends">76% Metacritic</a>, constantly Very Positive (>80%)
                            user reviews on Steam) and I am incredibly proud of what we achieved.
                        </p>
                            </div>
                        </transition>
                        <div v-else><a href="#" class="lead" v-on:click.prevent="showingChronicle=true">Read More</a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="text-center justify-content-center" v-if="showingChronicle">
                    <transition name="slide" mode="out-in" appear>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/NZ_S1_vVNwE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </transition>
                </div>
                <img src="../assets/chronicle.png" alt="Chronicle" class="img-fluid" v-else>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-7 order-2 order-md-1">
                <div class="text-center justify-content-center" v-if="showingRunescape">
                    <transition name="slide" mode="out-in" appear>
                        <iframe class="my-3" width="560" height="315" src="https://www.youtube.com/embed/nGQFGw7hUPE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </transition>
                </div>
                <img src="../assets/runescape.png" alt="Runescape" class="img-fluid" v-else>
            </div>
            <div class="col-md-5 order-1 order-md-2 mb-5 mb-md-0 ">
                <div class="row text-center justify-content-center">
                    <div class="col-10 my-3">
                        <h2>RuneScape</h2>
                        <transition name="slide" mode="out-in" appear v-if="showingRunescape">
                            <div>
                                <p>
                                    I spent a brief period of time between projects helping out with content development for Runescape. 
                                    As with all of my roles, I had ownership of most of the work, handling both design and implementation 
                                    of new content features for RuneScape. These were written in our in-house scripting language, 
                                    and included more systems based content such as improving world map and utilities for players to 
                                    track live events in game, such as the “D&D Tracker” update shown in the video here.
                                </p>
                            </div>
                        </transition>
                        <div v-else><a href="#" class="lead" v-on:click.prevent="showingRunescape=true">Read More</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-5 mb-5 mb-md-0">
                <div class="row text-center justify-content-center">
                    <div class="col-10 blurb my-3">
                        <h2>Transformers Universe</h2>
                        <transition name="slide" mode="out-in" appear v-if="showingTransformers">
                            <div>
                                <p>
                                    Again, at Jagex, I was a content developer on Transformers Universe, a third-person MOBA-like
                                    for PC which launched in beta in 2014. My role as content developer involved designing and building
                                    core gameplay systems. I designed and implemented combat abilities, quests, gameplay modes and
                                    vehicle styles among other things. While the launched game was built in Unity, my work was done
                                    on a previous version of the game built on an in-house platform, and the majority of this work was done in Lua.
                                </p>
                            </div>
                        </transition>
                        <div v-else><a href="#" class="lead" v-on:click.prevent="showingTransformers=true">Read More</a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="text-center justify-content-center" v-if="showingTransformers">
                    <transition name="slide" mode="out-in" appear>
                        <iframe class="my-3" width="560" height="315" src="https://www.youtube.com/embed/uaHS0FICq60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </transition>
                </div>
                <img src="../assets/transformers.jpg" alt="Transformers Universe" class="img-fluid" v-else>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                showingChronicle : false,
                showingRunescape : false,
                showingTransformers : false,
                showingBigPixel: false
            }
        }
    }
</script>

<style scoped>
    .slide-enter {
        opacity: 0;
        /*transform: translateY(20px);*/
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>