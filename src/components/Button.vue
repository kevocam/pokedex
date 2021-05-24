<template>
  <button class="btn btn-nav" v-if="icon === 'list'">
    <span>
      <img src="@/assets/iconList.svg" alt="list" />
    </span>
    {{ content }}
  </button>
  <button class="btn btn-nav" v-else-if="icon === 'favorite'">
    <span>
      <img src="@/assets/iconStar.svg" alt="favorite" />
    </span>
    <span></span>
    {{ content }}
  </button>
  <button class="btn btn-active" v-else>
    {{ content }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    content: String,
    icon: String,
  },
  data() {},
};
</script>

<style scoped lang="scss">
@import "../scss/globals.scss";
.router-link-active .btn {
  background: $red-ligth;
}
.btn-active {
  background: $red-ligth;
}
.btn-nav {
  background: $gray-ligth;
  max-width: 275px;
  @media (min-width: 700px) {
    width: 275px;
  }
}
.btn {
  font-family: "Lato";
  color: white;
  min-width: 150px;
  height: 44px;
  padding: 11px 20px;
  border-radius: 60px;
  font-weight: 700;
  font-size: 1.8rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  &:hover {
    background: $red;
    cursor: pointer;
  }
  span {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
}
</style>
