<template>
  <div id="app">
    
    <div class="cover-container d-flex h-100  mx-auto flex-column">
      <header class="masthead mb-auto mb-5">
        <div class="inner">
          <Navbar />
        </div>
      </header>

      <Banner></Banner>

      <section class="jumbotron text-center grey-container">

        <SearchForm></SearchForm>

        <LinkList class="mb-5" :list="linkList"></LinkList>

        <div class="container mt-5">
          <h1 class="jumbotron-heading">Advanced Statistics</h1>
          <p class="lead text-muted">Track how your links are performing accross the web with<br> our advanced
            statistics dashboard</p>
        </div>

        <Services></Services>
      </section>


    </div>

    <ActionCall></ActionCall>

    <Footer></Footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import Navbar from './components/layout/_navbar'
  import Banner from './components/layout/_banner'
  import ActionCall from './components/layout/_callAction'
  import Services from './components/layout/_services'
  import Footer from './components/layout/_footer'
  import SearchForm from './components/searchForm'
  import LinkList from './components/linkList'

  Vue.use(Vuex)

  export default {
    name: 'App',
    meta: {
      title: 'Wejapa task 2',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }
      ]
    },
    components: {
      Navbar,
      Banner,
      SearchForm,
      LinkList,
      Services,
      Footer,
      ActionCall
    },
    data() {
      return {
        
      }
    },
    computed: {
      linkList () {
        return this.$store.state.links.allLinks || []
      }
    },
    mounted() {
      this.$store.dispatch('links/setAllLinks', this.linkList)
    },
  }
</script>

<style>
  @import './assets/css/style.css';
  @import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    /* color: #2c3e50; */
    /* margin-top: 60px; */
    margin: 0px;
  }

  .grey-container,
  .cover-container {
    margin-bottom: 0px !important;
    border-radius: 0px !important;
  }



  @media only screen and (min-width: 768px) {

    .grey-container .ml-5,
    .mx-5 {
      margin-left: 14rem !important;
    }

    .grey-container .mr-5,
    .mx-5 {
      margin-right: 14rem !important;
    }

    /* For desktop: */
    #app {
      margin-top: 0px;
      /* margin-left: 10%; */
      /* margin-right: 10%; */
    }

  }
</style>