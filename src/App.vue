<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: "Lato", sans-serif;
  font-size: 62.5%;
}

$yellow: rgba(236, 165, 57, 1);

$red: rgba(192, 14, 32, 1);
$red-ligth: rgba(242, 37, 57, 1);

$gray: rgba(94, 94, 94, 1);
$gray-ligth: rgba(191, 191, 191, 1);
$gray-dark: rgba(53, 53, 53, 1);

$white: rgba(245, 245, 245, 1);
$white-ligth: rgba(249, 249, 249, 1);
$white-dark: rgba(249, 249, 249, 1);
$fontSecundary: "Montserrat";
body {
  font-size: 1.6rem;
  background: $white-dark;
}
a {
  text-decoration: none;
}
</style>
