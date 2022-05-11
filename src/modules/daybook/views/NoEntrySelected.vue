<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center"> No hay nada seleccionado</h1>
  </div>
  <FabComponent icon="fa-plus"/>
</template>


<style lang="scss" scoped>
    div {
        height: 100%;
    }
</style>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        FabComponent: defineAsyncComponent(() => import('@/modules/daybook/components/FabComponent.vue'))
    }
    
}
</script>