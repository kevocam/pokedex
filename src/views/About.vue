<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Welcome />
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from "@/views/Welcome";

export default {
  name: "About",
  components: {
    Welcome,
  },
};
</script>
