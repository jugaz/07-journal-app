<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-sucess fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Mayo</span>
            <span class="mx-2 fs-4 fw-light">2022, miércoles</span>
        </div>

        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
            placeholder="¿Qué sucedió hoy?"
        ></textarea>
    </div>

    <FabComponent icon="fa-save"/>

    <img src="https://jugaz.github.io/series-tv-api/images/big-bang-theory/0.png" 
        alt="entry-picture"
        class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components: {
        FabComponent: defineAsyncComponent(() => import('@/modules/daybook/components/FabComponent.vue'))
    }
    
}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focues {
            outline: none;
        }
    }

    img {
        bottom: 91px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
        position: fixed;
        right: 20px;
        width: 200px;
    }
</style>