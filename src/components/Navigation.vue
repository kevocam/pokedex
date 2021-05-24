<template>
  <div class="container">
    <div class="btns">
      <router-link to="/list">
        <Button icon="list" content="All" />
      </router-link>

      <router-link to="/favorite">
        <Button icon="favorite" content="Favorites" />
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../scss/globals.scss";

.container {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  background-color: white;
  
 box-shadow: 0px -17px 10px -6px rgba(0,0,0,0.1);
}
.btns {
  width: 100%;
  max-width: 540px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
  a {
    margin: 0 10px;
  }
}
</style>
<script>
import Button from "@/components/Button";

export default {
  name: "Navigation",
  components: {
    Button,
  },
};
</script>
