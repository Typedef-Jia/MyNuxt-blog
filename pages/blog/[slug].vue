<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10">

    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article?.title }}
    </h1>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <nuxt-img
        :src="author.author_image"
        loading="lazy"
        alt=""
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ author.name }}
        </div>
<!--        <a-->
<!--          target="_blank"-->
<!--          :href="`https://twitter.com/${author.socials.twitter}`"-->
<!--          class="text-sky-500 hover:text-sky-600 dark:text-sky-400"-->
<!--        >-->
<!--          @{{ author.socials.twitter }}-->
<!--        </a>-->
      </div>
    </div>
<!--    <img-->
<!--      class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"-->
<!--      :src="article?.image"-->
<!--    />-->
    <ContentRenderer class="prose min-w-full p-10 mx-auto" :value="article">
      <template #empty>
        <p>未找到任何内容.</p>
      </template>
    </ContentRenderer>
    <p class="text-right font-bold my-5 text-indigo-500">
      {{ formatDate(article?.date) }}
    </p>
    <div class="flex justify-center"><nuxt-link to="/blog" class="text-indigo-500">

      <svg t="1735278210471" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2765" width="32" height="32"><path d="M137.195012 473.012753l343.015525-236.983218-0.308863 468.654345z" p-id="2766" fill="#374151"></path><path d="M480.667511 706.240841l-1.146949-0.774868L135.66695 473.021784 480.978181 234.452705v1.578636l-0.31067 470.2095zM138.723073 473.003722L479.135837 703.125112l0.308863-465.518748L138.723073 473.003722z" p-id="2767" fill="#374151"></path><path d="M807.983377 647.341831s-7.347701-39.173288-31.538398-63.073184c-18.555293-18.331321-30.10426-28.670122-57.340243-34.404868-70.879664-14.921179-394.378989 0.050574-394.378989 0.050574V413.73263s214.893154-3.375824 285.431443 11.417113c20.932277 4.389113 57.967001 10.044386 83.143895 22.935375 27.143866 13.900665 53.628462 34.040012 67.375598 50.173164 46.838883 54.974096 47.306694 149.083548 47.306694 149.083549z" p-id="2768" fill="#374151"></path></svg>
    </nuxt-link></div>
  </div>
</template>
<script setup>
// import Prism from "@/plugins/prism";
import siteMetaInfo from "@/data/sitemetainfo";
import author from "@/data/author.js";

const route = useRoute();

const {data: article} = await useAsyncData('home', () => queryContent("/articles")
    .where({
      slug: route.params.slug
    })
    .findOne()
);

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("zh", options);
};

useSeoMeta({
  title: article?.value?.title ?? "",
  meta: [
    {
      hid: "description",
      name: "description",
      content: article?.value?.description,
    },
  ],
});
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
</style>
