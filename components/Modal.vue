<template>
  <teleport to="body">
    <transition name="scale-fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center z-50">
        <!-- 遮罩层 -->
        <div @click="close" class="fixed inset-0 bg-black opacity-50"></div>

        <!-- 弹窗内容 -->
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative z-10">
          <!-- 关闭按钮 -->
          <button @click="close" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>

          <!-- 弹窗标题 -->
          <h2 class="text-xl font-semibold mb-4">{{ title }}</h2>

          <!-- 弹窗内容 -->
          <slot></slot>

          <!-- 操作按钮 -->
          <div class="mt-6 flex justify-end space-x-4">
            <button @click="close"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none">取消</button>
            <button @click="confirm"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">确认</button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '提示'
  },
  modelValue: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['update:modelValue', 'confirm']);

const close = () => {
  emit('update:modelValue', false);
};

const confirm = () => {
  emit('confirm');
  close();
};

// 过渡钩子函数
const beforeEnter = (el) => {
  el.style.transform = 'scale(0)';
  el.style.opacity = 0;
};

const enter = (el, done) => {
  el.offsetHeight; // trigger reflow
  el.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
  el.style.transform = 'scale(1)';
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.transition = 'transform 0.3s ease-in, opacity 0.3s ease-in';
  el.style.transform = 'scale(0)';
  el.style.opacity = 0;
  done();
};
</script>

<style scoped>
/* 过渡效果 */
.scale-fade-enter-active,
.scale-fade-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.scale-fade-enter,
.scale-fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
