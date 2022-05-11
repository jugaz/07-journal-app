<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">11</span>
            <span class="mx-1 fs-5">Mayo</span>
            <span class="mx-2 fw-light">2022, miércoles</span>
        </div>
        <div class="entry-description">
            Aute incididunt sit irure anim deserunt ut nostrud esse incididunt anim duis. Ullamco ad nostrud ullamco exercitation ipsum eiusmod officia elit consequat dolore pariatur aliquip. Sit sit eiusmod velit Lorem ipsum. Irure cillum quis anim consequat velit nisi. Deserunt amet ea ipsum consectetur elit quis labore labore velit esse.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition:  0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition:  0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px
    }
}



</style>