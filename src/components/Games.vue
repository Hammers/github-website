<template>
    <div class="container-fluid px-0">
        <div class="row align-items-center content">
            <div class="col-md-7 order-2 order-md-1">
                <img src="../assets/photonix.jpeg" alt="Photonix" class="img-fluid">
            </div>
            <div class="col-md-5 order-1 order-md-2 mb-5 mb-md-0 ">
                <div class="row text-center justify-content-center">
                    <div class="col-10 col-lg-8">
                        <h2>Photonix</h2>
                            <div>
                                <p>
                                    Photonix is a small puzzle game I released on Android in early 2019. Guide lasers through as many blocks as possible to create
                                massive chains.</p>
                            </div>
                        <div class="my-3"><a href="https://play.google.com/store/apps/details?id=com.RyanAyton.PhotonixAds" class="lead">Play on Android</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center content">
            <div class="col-md-5 mb-5 mb-md-0">
                <div class="row text-center justify-content-center">
                    <div class="col-10 col-lg-8 blurb">
                        <h2>Game Jams / Prototypes</h2>
                            <div>
                                <p>
                                    I frequently take part in game jams, particularly Ludum Dare, a worldwide 48h jam which happens a few times a year.
                                You can check out all my jam entries as well as a bunch of other prototypes at my itch.io page</p>
                            </div>
                        <div class="my-3"><a href="https://hammers.itch.io" class="lead">Visit my Itch.io page</a></div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <img src="../assets/itch.png" alt="Prototypes" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                showingPhotonix : false,
                showingItch : false
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