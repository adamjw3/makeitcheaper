<template>
  <div class="c-header">
    <a href="/" class="c-header__logo">
      <img src="../assets/makeitcheaper-logo-black.png" alt="Make it cheaper">
    </a>
    <span href="/" class="c-header__phone">0800 999 9999</span>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.c-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.c-header__logo {
  margin-right: auto;
}

.c-header__phone {
  font-size: 2rem;
  margin-left: auto;
}
</style>