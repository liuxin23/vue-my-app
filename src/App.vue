<template>
  <div id="app">
    <Header msg="hellomsg"/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/header';
import Footer from './components/common/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
