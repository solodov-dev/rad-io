<template>
  <div class="equalizer">
  <div class="column column1"></div>
  <div class="column column2"></div>
  <div class="column column3"></div>
  <div class="column column4"></div>
  <div class="column column5"></div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.equalizer {
  margin-left: 1em;
  display: flex;
  justify-content: justify;
  align-items: flex-end;
  width: 50px;
  height: 40px;
  background-color: #ad1052;
}

.column {
  height: 0%;
  width: 5px;
  margin: 2px;
  background-color: #ffaa10;
}

.column1 {
  animation: play .3s infinite alternate;  
}

.column2 {
  animation: play .34s infinite alternate;
}

.column3 {
  animation: play .32s infinite alternate;
}

.column4 {
  animation: play .33s infinite alternate;
}

.column5 {
  animation: play .29s infinite alternate;
}
@keyframes play {
  from {
    height: 30%;
  } to {
    height: 70%;
  }
}
</style>