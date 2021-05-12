<template>
  <div id="app">
    <DownloadSong/>
    <SongsList/>
  </div>
</template>

<script>
import DownloadSong from './components/DownloadSong.vue'
import SongsList from './components/SongsList.vue'

export default {
  name: 'App',
  components: {
    DownloadSong,
    SongsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
