<template>
  <div class="inline-block pr-175">
    <h1 class="font-text text-46px pt-20">Hello, my name is</h1>
    <h1 class="font-text text-72px py-3">MARTIN ČERNOCH</h1>
    <h1 class="font-text text-46px">FrontEnd developer</h1>
  </div>
  <div class="rectangle w-178 h-99 text-36px font-text text-left bg-white">
    <p class="pt-15 pl-4">const data = [
    <p class="pl-8">{</p>
    <p class="pl-11">userName: ‘Martin Černoch’,
      userBDay: ‘27th December 2004’,
      userLikes: ‘Computer-oriented stuff’</p>
    <p class="pl-8">{</p>
    <p class="pl-4">]</p>
    </p>
  </div>
  <h2 class="font-header text-48px pt-30">Things I'm interested in</h2>
  <div class="flex justify-center gap-25 pt-12">
    <div class="rectangle w-92 h-114">
      <div class="circle bg-primary h-63 w-63 mt-8 mx-auto"><img src="../assets/images/frontend.png" width="150"
          class="m-auto mt-10" />
      </div>
      <h2 class="font-text text-36px pt-10">FrontEnd development</h2>
    </div>
    <div class="rectangle w-92 h-114">
      <div class="circle bg-primary h-63 w-63 mt-8 mx-auto"><img src="../assets/images/game.png" width="150"
          class="m-auto mt-10" /></div>
      <h2 class="font-text text-36px pt-10">Game development</h2>
    </div>
    <div class="rectangle w-92 h-114">
      <div class="circle bg-primary h-63 w-63 mt-8 mx-auto"><img src="../assets/images/graphic.png" width="150"
          class="m-auto mt-10" /></div>
      <h2 class="font-text text-36px pt-10">Graphic<br>design</h2>
    </div>
  </div>
  <h2 class="font-header text-48px text-right pt-37 pr-39">About me</h2>
  <div class="rectangle w-450 h-125 mt-5">
    <div class="circle h-85 w-85 my-16 ml-20"><img src="../assets/images/michi.png" width="350" /></div>
  </div>
  <h2 class="font-header text-48px pt-80">Tools I'm using</h2>
  <div class="rectangle h-205 w-430 mt-5">
    <div class="flex justify-center mt-18 gap-90">
      <img src="../assets/images/vue.png" width="200" />
      <img src="../assets/images/windi.png" width="200" />
      <img src="../assets/images/vite.png" width="200" />
    </div>
    <div class="flex justify-center gap-107 mt-6">
      <h2 class="font-text text-36px">Vue 3</h2>
      <h2 class="font-text text-36px">WindiCSS</h2>
      <h2 class="font-text text-36px">Vite</h2>
    </div>
    <div class="flex justify-center mt-10 gap-53">
      <div class="rectangle h-87 w-87 bg-primary"></div>
      <div class="rectangle h-87 w-87 bg-primary"></div>
      <div class="rectangle h-87 w-87 bg-primary"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.rectangle {
  border-width: 8px;
  border-radius: 1.5rem;
  border-color: #42B883;
}

.circle {
  border-width: 8px;
  border-radius: 9999px;
  border-color: #42B883;
}

.svgOne {
  background-image: url("../assets/images/svg-one.svg");
  background-repeat: no-repeat;
  background-position: right;
}
</style>