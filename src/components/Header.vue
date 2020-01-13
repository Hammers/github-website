<template>
  <section class="container">
    <h1 class="display-1 text-center">Ryan Ayton</h1>
    <h4 class="text-center text-muted">games.developer/board.game.lover/bread.maker</h4>
    <ul class="nav justify-content-around my-5">
      <li class="nav-item">
        <a class="nav-link active" href="#" @click.prevent="$emit('navClicked','Work')"><h3>Work</h3></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="$emit('navClicked','Games')"><h3>Games</h3></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://twitter.com/ryan_ayton"><h3>Twitter</h3></a>
      </li>
    </ul>
  </section>
  
</template>

<script>
export default {
  name: 'Header',
}
</script>
