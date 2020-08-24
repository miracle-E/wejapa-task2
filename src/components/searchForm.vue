<template>
 <form class="form-inline ml-5 mr-5 pt-5 pb-5 my-lg-0 justify-content-md-center search-form">
    <input :disabled="loading" class="form-control mr-sm-2 round-20" :class="error ? 'error': ''" v-model="link.url" id="search-input" type="search" placeholder="Shorten a link here..." aria-label="Search">
    <button :disabled="loading" @click.prevent="postShortlink" class="btn btn-outline-success my-2 my-sm-0 ml-3 round-1 btn-teal" id="search-btn" type="submit">Shorten it!</button>
    <div v-if="error" class="col-md-12 text-left ml-2 text-danger">{{ error ? error : ''}}</div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      error: null,
      link: {},
      linkList: [],
      loading: false,
      linkCopy: ''
    }
  },
  methods: {
    async loadList () {
      this.$store.dispatch('links/setAllLinks').then(res => {
        this.linkList = res
      }).catch(error => {
        console.error('cannot load link list', error)
      })
    },

    async postShortlink () {
      if(!this.link.url) {
        this.error = 'Please add a link'
        setTimeout(() => {
          this.error = null
        }, 3000);
        return
      }
      this.loading = true
      this.$axios.post('/links/', this.link).then(r => {
        this.loading = false
        this.link = r
        this.saveLink()
        this.saveLinkList()
      }).catch(error => {
        this.error = 'connection error'
        this.loading = false
        console.log(error)
        setTimeout(() => {
          this.error = null
        }, 3000);
      })
    },
    async getShortlink (hashId) {
      return new Promise((resolve, reject) => {
        if (!hashId) return reject()
        this.$axios.get(`/links/${hashId}`).then(r => {
          return resolve(r)
        }).catch(error => {
          return reject(error)
        })
      })
    },
    async saveLink () {
      if(!this.link) return
      this.linkList.push(this.link)
    },
    async saveLinkList () {
      if (!this.linkList) return
      this.$store.dispatch('links/setAllLinks', this.linkList)
    }
  },
  mounted() {
    this.loadList()
  },
}
</script>