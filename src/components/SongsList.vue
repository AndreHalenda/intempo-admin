<template>
  <div>
    <ul>
        <li v-for="item in items" :key="item._id">
            <div>Title - {{ item.title }}</div>
            <div>Author -{{ item.author }}</div>
            <div>Url - {{ item.url }}</div>
            <div>BPM - {{ item.bpm }}</div>
            <div>Duration - {{ item.duration }}</div>
            <br>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            items: []
        }
    },
    computed: {
        getSongs: () => {
            axios.get('http://localhost:3000/songs', {
            }).then(response => {
                return this.items = response.data
            }).catch(error => {
                this.message = 'Something went wrong.... Sorry :('
                console.log(error)
            })
        }
    }

}
</script>

<style>

</style>