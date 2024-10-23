<script setup>
import image from "../img/image.webp";
import { useRouter } from "vue-router";

const router = useRouter();

const goToSignIn = () => {
  router.push({ name: "signin" });
};

const showAlert = () => {
  alert("Кнопка нажата!");
};
</script>

<template>
  <header class="header">
    <h1 class="title">Главное</h1>
    <h1 class="title" @click="goToSignIn">Вход</h1>
    <button class="alert-button" @click="showAlert">Покажи алерт</button>
  </header>
  <div class="content">
    <div class="desription-car">
      <p>
        Маши́на (лат. machina «устройство, конструкция» ← др.-греч. μηχανή
        «приспособление, способ») — техническое устройство, выполняющее
        механические движения (см. уточнение ниже) для преобразования энергии,
        материалов и информации[1]. В более расширенном современном определении,
        появившемся с развитием электроники, машиной является технический
        объект, состоящий из взаимосвязанных функциональных частей (деталей,
        узлов, устройств, механизмов и др.), использующий энергию для выполнения
        возложенных на него функций[2]. В этом понимании машина может и не
        содержать механически движущихся частей. Примером таких устройств служат
        электронно-вычислительная машина (компьютер), электрический
        трансформатор[1], ускоритель заряженных частиц, гейзерная кофеварка.
      </p>
      <img :src="image" alt="Описание изображение" />
    </div>
    <ul class="type-car-list">
      Типы кузовов машин:
      <li>Универсал</li>
      <li>Седан</li>
      <li>Пикап</li>
      <li>Купе</li>
    </ul>
    <ul class="famous-car-list">
      Популярные машины:
      <li>Toyota</li>
      <li>Reno</li>
      <li>Bmw</li>
      <li>Audi</li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  margin-left: 20rem;
}

.title {
  margin-left: 20px;
  cursor: pointer;
  color: red;
  font-size: 24px;
}

.title:hover {
  color: #898989;
}

.alert-button {
  width: fit-content;
  height: fit-content;
  border: 2px solid black;
  cursor: pointer;
  background-color: aquamarine;
  margin-top: 20px;
  margin-left: 30px;
  font-size: 17px;
}

.desription-car {
  display: flex;
}

.type-car-list {
  list-style: none;
}

.famous-car-list {
  list-style-type: decimal;
}
</style>
