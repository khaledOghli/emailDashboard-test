<script setup lang="ts">
import { computed } from 'vue'
import menuData from '@/data/menu'
import { useEmailStore } from '@stores/emailStore'
import { useRoute } from 'vue-router'
const $route = useRoute()
const emailStore = useEmailStore()
</script>

<template>
  <ul class="emailApp__sidebar__content__list">
    <li
      v-for="item in menuData"
      :key="item.id"
      :class="{ 'emailApp__sidebar__content__list__item-active': $route.path === item.route }"
      class="emailApp__sidebar__content__list__item"
    >
      <router-link class="emailApp__sidebar__content__list__item__link" :to="item.route">
        <span class="emailApp__sidebar__content__list__item__link__icon">
          <component :is="item.icon" />
        </span>
        <span class="emailApp__sidebar__content__list__item__link__label">{{ item.name }}</span>
        <span class="emailApp__sidebar__content__list__item__link__count">
          {{ emailStore.getEmailsByFolder(item.type).length }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.active {
  background-color: var(--sidebar-hover-bg);
  color: var(--sidebar-hover-color);
}
.emailApp__sidebar__content__list {
  list-style: none;
  padding: 0;
  margin: 0;
  &__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    margin-bottom: 12px;
    min-width: 240px;
    min-height: 48px;
    border-radius: 54px;
    transition-property: background, color;
    transition-duration: var(--main-transition);
    transition-timing-function: var(--main-transition-easing);
    color: var(--light-800);
    &__link {
      all: unset;
      cursor: pointer;
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      &__icon {
        display: flex;
        align-items: center;
        margin-inline-end: 1rem;
      }
      &__label {
        font-size: 1.2rem;
        font-weight: 500;
      }
      &__count {
        display: flex;
        align-items: center;
        position: absolute;
        inset-inline-end: 0;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
    &:hover {
      color: var(--primary-700);
      svg::v-deep(path) {
        stroke: var(--primary-700);
      }
    }
    &-active {
      background-color: var(--sidebar-bg-hover);
      color: var(--light-1000);
    }
  }
}
</style>
