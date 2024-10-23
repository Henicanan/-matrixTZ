<template>
  <div class="wrapper">
    <div class="card">
      <div class="title-wrapper">
        <span class="title">Страница авторизации</span>
      </div>
      <div class="input-wrapper">
        <input class="input-login" placeholder="Введите логин" />
        <input class="input-password" placeholder="Введите пароль" />
        <button class="sigin-button">Вход</button>
      </div>
      <div class="recover-password-title">Востановить пароль</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0;
}

.card {
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  width: fit-content;
}

.title-wrapper {
  margin-left: 1rem;
}
.title {
  font-size: 25px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.input-wrapper {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}

.input-login {
  border-radius: 5px;
  height: 1.5rem;
  font-size: 20px;
  padding-left: 10px;
}

.input-password {
  margin-top: 10px;
  border-radius: 5px;
  height: 1.5rem;
  font-size: 20px;
  padding-left: 10px;
}

.sigin-button {
  margin-top: 20px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 6px;
  background-color: none;
}

.recover-password-title {
  margin-top: 10px;
  cursor: pointer;
}
</style>
