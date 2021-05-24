<template>
  <div class="loading">
    <img src="@/assets/loaderPokebola.svg" alt="" />
    <div class="lds-hourglass"></div>
  </div>
</template>
<style scoped lang="scss">
.loading {
  width: 100%;
  height: 100vh;
  background: #91919bd1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
}
.lds-hourglass {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid black;
  border-color: rgba(242, 37, 57, 1) transparent rgb(230, 222, 222) transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>
