<template>
  <div class="audio-panel">
    <h1>Audio</h1>
    <div v-for="(row, i) in rows" :key="i">
      <audio :src="row" type="audio/mpeg" controls></audio>
    </div>
  </div>
</template>

<script>
// import url from "url";
import { Vue, Component, Provide, Inject } from "vue-property-decorator";
import * as ifs from "@/invokers/filesystem";

@Component()
class AudioPanel extends Vue {
  @Inject()
  app;

  @Provide()
  panel = this;

  rows = [];

  async created() {
    this.rows = [];
    for (let path of await ifs.list("music")) {
      console.log(path);
      let blob = await ifs.load(path);
      let url = URL.createObjectURL(blob);
      this.rows.push(url);
    }
    console.log(this.rows);
  }
}

export default AudioPanel;
</script>

<style lang="scss" scoped>
.audio-panel {
  position: relative;
}
</style>