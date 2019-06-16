<template>
  <div class="container">
    <Header/>
    <Intro/>
    <Form/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Intro from "./components/Intro.vue";

export default {
  name: "app",
  components: {
    Header,
    Form,
    Intro
  }
};
</script>

<style lang="scss">
.container {
  max-width: 1190px;
  margin: 0 auto;
}
</style>
