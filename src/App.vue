<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Vue, Component, Prop, Provide } from "vue-property-decorator";

@Component()
class App extends Vue {
  @Provide()
  app = this;

  @Prop({ default: 1 })
  version;

  created() {
    
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
