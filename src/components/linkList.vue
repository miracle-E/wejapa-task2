<template>
  <div class="link-list">
    <template v-if="list.length" >
      <Link v-for="(link, index) in list" :key="index" :link="link"/>
    </template>
  </div>
</template>
<script>
import Link from "./linkItem";
export default {
  components: {
    Link
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style lang="css">
  .link-list {
    margin-top: -90px;
  }
</style>