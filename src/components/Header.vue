<template>
  <section class="container">
    <h1 class="display-1 text-center">Ryan Ayton</h1>
    <h4 class="text-center text-muted">game.developer/board.game.lover/bread.maker/eurovision.nerd</h4>
    <ul class="nav justify-content-around my-5">
      <li class="nav-item">
        <router-link class="nav-link active" to="/work"><h3>Work</h3></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/games"><h3>Games</h3></router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="http://twitter.com/ryan_ayton"><h3>Twitter</h3></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://drive.google.com/open?id=1k7UFvzxgHJw2pNFkjwuX4qm80Nh7YFrv"><h3>CV</h3></a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/"><h3>Blog</h3></router-link>
      </li>
    </ul>
  </section>
  
</template>

<script>
export default {
  name: 'Header',
}
</script>
