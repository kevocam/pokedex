<template>
<div class="lost">
  <h2>Uh-oh!</h2>
  <p>You look lost on your journey!</p>
  <router-link to="/">
        <Button content="Go back home" />  
  </router-link>
</div>
</template>

<script>
import Button from "@/components/Button"
export default {
    name:"Lost",
    components:{
        Button
    }
}
</script>

<style lang="scss">
.lost{
    width:100%;
    max-width: 570px;
    text-align: center;
    p{
        margin:10px 0;
    }
}

</style>