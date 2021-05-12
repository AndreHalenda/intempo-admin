<template>
  <div id="app">
    <input type="file" ref="file" v-on:change="handleUploadFile()"/>
    <input type="text" placeholder="Title" v-model="title"/>
    <input type="text" placeholder="Author" v-model="author"/>
    <input type="text" placeholder="Duration (seconds)" v-model="duration"/>
    <input type="text" placeholder="BPM (numbers)" v-model="bpm"/>
    <button v-on:click="uploadFile()">Upload</button> <br>
    <div>{{message}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
          file: '',
          title: '',
          author: '',
          duration: '',
          bpm: '',
          songData: {
              title: '',
              author: '',
              url: '',
              bpm: '',
              duration: ''
          },
          message: '',
        }
    },
    methods: {
        handleUploadFile() {
            this.file = this.$refs.file.files[0]
        },
        uploadFile() {
            const formData = new FormData()
            formData.append("file", this.$refs.file.files[0])
            formData.append("title", this.title)
            formData.append("author", this.author)
            formData.append("duration", this.duration)
            formData.append("bpm", this.bpm)
            axios.post('http://localhost:3000/songs/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                this.message = 'Song uploaded successfully! Congraz :)'
                this.songData = response.data
                this.songData.title = response.data.title
                this.songData.author = response.data.author
                this.songData.url = response.data.url
                this.songData.bpm = response.data.bpm
                this.songData.duration = response.data.duration
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