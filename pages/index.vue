<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="md:w-1/3 p-2 md:flex md:justify-center">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8">
        <AuthorIntro></AuthorIntro>
        <!-- <Expertise></Expertise> -->
        <h1 class="font-bold">我可以帮助你</h1>
        <div class="cards">
          <div class="card red" @click="isModalOpen = true">
            <p class="tip">网页设计开发</p>
            <p class="second-text">Web</p>
          </div>
          <div class="card blue" @click="isModalOpen = true">
            <p class="tip">App或</p>
            <p class="tip">小程序开发</p>
          </div>
          <div class="card green" @click="isModalOpen = true">
            <p class="tip">毕业设计</p>
            <p class="second-text">Graduation Project</p>
          </div>
        </div>
        <Modal v-model="isModalOpen" title="提示">
          <p>很高兴与你合作</p>
          <img style="width: 150px" src="https://www.ljjk.love/static/articlePicture/ljjk11735372983312255.jpg" alt="">
        </Modal>


        <TimeLine></TimeLine>
      </div>
    </div>
  </div>
</template>

<script setup>
import siteMetaInfo from "@/data/sitemetainfo";
const isModalOpen = ref(false);
const isCollapsed = ref(false);
useSeoMeta({
  title: siteMetaInfo.title,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: siteMetaInfo.description,
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<style scoped>
.cards {
  margin-top: 20px;
  display: flex;
  gap: 15px;
}

.cards .red {
  background-color: #f43f5e;
}

.cards .blue {
  background-color: #3b82f6;
}

.cards .green {
  background-color: #22c55e;
}

.cards .card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 250px;

  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 400ms;
}

.cards .card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.cards .card p.second-text {
  font-size: .7em;
}

.cards .card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover>.card:not(:hover) {
  filter: blur(10px);
  transform: scale(0.9, 0.9);
}
</style>
