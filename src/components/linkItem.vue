<template>
    <div class="media text-muted pb-2 pt-2 pl-4 pr-4 ml-5 mr-5 link-item round-5 mb-2" v-if="link">
      <div class="media-body  mb-0 small lh-125">
        <div class="d-flex justify-content-between align-items-center w-100">
          <strong class="text-gray-dark">{{ link.url ? link.url : '' }}</strong>
          <button class="btn btn-primary btn-teal btn-sm">Copy</button>
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
    }
  }
</script>
<style lang="css">
  .link-item {
    background-color: white;
  }
</style>