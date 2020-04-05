<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>{{version}}</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop, Provide } from "vue-property-decorator";

@Component()
class App extends Vue {
  @Provide()
  app = this;

  @Prop({ default: 1 })
  version;

  created() {
    console.log(this.app);
  }
}

export default App;
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
