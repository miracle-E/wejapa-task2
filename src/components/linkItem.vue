<template>
    <div class="media text-muted pb-2 pt-2 pl-4 pr-4 ml-5 mr-5 link-item round-5 mb-2 link-item" v-if="link">
      <div class="media-body  mb-0 small lh-125">
        <div class="d-flex justify-content-between align-items-center w-100">
          <strong class="text-gray-dark">{{ link.url ? link.url : '' }}</strong>
          <p class="pull-right mt-3 ml-0 d-none d-sm-block short-link">{{ `https://www.rel.ink/${link.hashid}` }}</p>
          <button @click.prevent="copyLink(link)" class="btn btn-primary btn-teal btn-sm" :id="'btn-' + link.hashid">Copy</button>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    props: {
      link: {
        type: Object,
        required: true,
        default: () => null
      }
    },
    methods: {
      async copyLink (link) {
        if (!link) return false
        if (navigator && navigator.clipboard) {
          let shortLink = `https://www.rel.ink/${link.hashid}`
          navigator.clipboard.writeText(shortLink).then(function() {
            let btn = document.getElementById('btn-' + link.hashid)
            if(btn) {
              btn.innerHTML = 'Copied!'
              btn.style.backgroundColor = 'hsl(257, 27%, 26%) !important'
              setTimeout(() => {
                btn.innerHTML = 'Copy'
                btn.style.backgroundColor = 'hsl(180, 66%, 49%) !important'
              }, 2000);
            }
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
        }
        
      }
    },
  }
</script>
<style lang="css">
  .link-item {
    background-color: white;
  }
</style>