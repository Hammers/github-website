<template>
  <div id="app">
    <Header @navClicked="bodyComponent = $event"></Header>
    <transition name="slide" mode="out-in" appear>
      <component :is="bodyComponent"></component>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";
import Games from "./components/Games";
import Work from "./components/Work";

export default {
  name: 'app',
  data() {
    return {
      bodyComponent: "Work"
    }
  },
  components: {
    Header,
    Work,
    Games
  }
}
</script>

<style>
#app {
  font-family: 'Alata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

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
