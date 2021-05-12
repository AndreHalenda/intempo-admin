import Vue from "vue";
import Router from "vue-router";
import DownloadSong from './components/DownloadSong.vue'
import SongsList from './components/SongsList.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "download song",
      component: () => DownloadSong
    },
    {
      path: "/songs",
      name: "list of songs",
      component: () => SongsList
    }
  ]
});