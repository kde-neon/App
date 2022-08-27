<template>
  <header>
    <div class="wrapper">

      <h3>Home</h3>
      <nav>
        <RouterLink to="/">Root</RouterLink>
        <RouterLink to="/projects">Home</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>
<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<style>
</style>
