<template>
  <div class="container">
    <div class="top-bar">
      <!-- More button -->
      <button class="top-bar__more">
        <img src="@/assets/img/more.svg" alt="" class="top-bar__more-icon icon">
      </button>
      <!-- Logo -->
      <nuxt-link to="/home" class="logo">
        <img src="@/assets/img/logo.svg" alt="grocerymart" class="logo__img">
        <h1 class="logo__title">grocerymart</h1>
      </nuxt-link>
      <!-- Navbar -->
      <div class="navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <nuxt-link class="navbar__link">Departments
              <img src="@/assets/img/arrow-down.svg" alt="" class="navbar__arrow icon">
            </nuxt-link>
          </li>
          <li class="navbar__item">
            <nuxt-link class="navbar__link">Grocery
              <img src="@/assets/img/arrow-down.svg" alt="" class="navbar__arrow icon">
            </nuxt-link>
          </li>
          <li class="navbar__item">
            <nuxt-link class="navbar__link">Beauty
              <img src="@/assets/img/arrow-down.svg" alt="" class="navbar__arrow icon">
            </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- Actions -->
      <div class="top-act">
        <!-- Search action -->
        <div class="top-act__group" ref="searchInput" @blur="onBlur">
          <transition name="slide-fade">
            <input v-if="showSearchInput" type="text" class="top-act__input" placeholder="Enter your search...">
          </transition>
          <div class="top-act__group--single">
            <button class="top-act__btn" @click="" @mouseover="activeInput()">
              <img src="@/assets/img/search.svg" alt="" class="top-act__icon icon">
              <span class="top-act__title"></span>
            </button>
          </div>
        </div>
        <!-- Favourite & cart -->
        <div class="top-act__group">
          <button class="top-act__btn">
            <img src="@/assets/img/heart.svg" alt="" class="top-act__icon icon">
            <span class="top-act__title">03</span>
          </button>
          <div class="top-act__separate">
          </div>
          <button class="top-act__btn">
            <img src="@/assets/img/buy.svg" alt="" class="top-act__icon icon">
            <span class="top-act__title">$65.42</span>
          </button>
        </div>
        <!-- Profile action -->
        <div class="top-act__user">
          <img src="@/assets/img/avatar.jpg" alt="" class="top-act__avatar">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      showSearchInput: false,
    };
  },
  methods: {
    activeInput() {
      this.showSearchInput = true;
    },
    onSearch() {
      this.showSearchInput = true;
      console.log('Searching...');
    },
    onBlur(event) {
      // Check if the click occurred outside the input
      if (!this.$refs.searchInput.contains(event.relatedTarget)) {
        this.showSearchInput = false;
      }
    },
    onMouseDown() {
      // Prevent the input from losing focus
      this.$refs.searchInput.focus();
    },
  },
}
</script>
<style lang="scss">
@import "@/assets/scss/_mixins";
@import "@/assets/scss/main";

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(37px);
  opacity: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 14px;

  @include breakpoint(lg) {
    gap: 10px;
  }

  &__title {
    color: var(--text-color);
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 145.455%;

    @include breakpoint(lg) {
      font-size: 1.8rem;
    }
  }

  &__img {
    @include breakpoint(lg) {
      width: 24px;
      margin-left: 39px;
    }

    @include breakpoint(sm) {
      margin-left: 0;
    }
  }
}

%alignCenter {
  display: flex;
  align-items: center;
}

.header {
  background-color: var(--header-bg-color);
}

.top-bar {
  display: flex;
  align-items: center;
  padding: 30px 0;

  @include breakpoint(lg) {
    padding: 20px 0;
  }

  @include breakpoint(sm) {
    padding: 16px 0;
    justify-content: space-between;
  }

  &__more {
    display: none;

    @include breakpoint(lg) {
      display: block;
    }
  }
}

.navbar {
  margin-left: 144px;

  @include breakpoint(xl) {
    display: none;
    margin-left: 50px;
  }

  &__list {
    @extend %alignCenter;
    gap: 30px;
  }

  &__link {
    display: flex;
    gap: 6px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 146.667%;
  }

  &__arrow {
    margin-top: 4px;
  }

  &__link &__arrow {
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
  }

  &__link:hover &__arrow {
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -ms-transition: 0.4s;
    -o-transition: 0.4s;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}


.top-act {
  @extend %alignCenter;
  margin-left: auto;
  gap: 20px;

  @include breakpoint(sm) {
    margin-left: 0;
  }

  &__group {
    @extend %alignCenter;
    border-radius: 8px;
    background: var(--top-action-group-bg-color);
    min-width: 50px;
    height: 50px;
    box-shadow: 0px 20px 60px 10px var(--top-action-group-shadow-color);

    @include breakpoint(md) {
      margin-left: 20px;
    }

    @include breakpoint(sm) {
      display: none;
    }
  }

  &__group--single {
    @include breakpoint(md) {
      display: none;
    }
  }

  &__group--single &__btn {
    padding: 13px 13px;
    gap: 0;
  }

  // &__group--single:hover &__input {
  //   opacity: 1;
  // }

  &__input {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    outline: none;
    background: var(--top-action-group-bg-color);
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 146.667%;
    height: 100%;
    width: 240px;
    padding: 15px 0px 15px 20px;
    // margin-right: -27px;
  }

  &__btn {
    @extend %alignCenter;
    gap: 10px;
    padding: 13px 20px;
    cursor: pointer;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 146.667%;
  }

  &__separate {
    width: 1px;
    height: 30px;
    background: var(--top-action-group-seperate);
  }

  &__avatar {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
  }

}

.slide-fade {
  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  &-enter-from,
  &-leave-to {
    transform: translateX(37px);
    opacity: 0;
  }
}
</style>