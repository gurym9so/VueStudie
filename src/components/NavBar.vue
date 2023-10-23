<template>
  <div class="navbar">
    <div @click="$router.push('/')">vueStudies</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Страница с постами</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px"
        >О сайте</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
  padding-bottom: 15px;
}
</style>
