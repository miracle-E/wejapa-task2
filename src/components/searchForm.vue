<template>
 <form class="form-inline ml-5 mr-5 pt-5 pb-5 my-lg-0 justify-content-md-center search-form">
    <input class="form-control mr-sm-2 round-20" v-model="link.url" id="search-input" type="search" placeholder="Shorten a link here..." aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0 ml-3 round-1 btn-teal" id="search-btn" type="submit">Shorten it!</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      error: null,
      link: {},
      loading: false
    }
  },
  methods: {
    async shortenURL () {
      if(!this.link.url) {
        this.error = 'Please add a link'
        return
      }

      // Submit form and shorten url
    }
  },
}
</script>