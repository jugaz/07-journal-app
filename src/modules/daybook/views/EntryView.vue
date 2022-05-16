<template>
    <template v-if="entry" >
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-sucess fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
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
                v-model="entry.text"
                placeholder="¿Qué sucedió hoy?"
            ></textarea>
        </div>

        

        <img src="https://jugaz.github.io/series-tv-api/images/big-bang-theory/0.png" 
            alt="entry-picture"
            class="img-thumbnail">
    </template>

    <FabComponent icon="fa-save"/>
    
</template>

<script>
import { defineAsyncComponent } from "vue"
import { mapGetters } from 'vuex'

import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear'

export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            entry:null
        }
    },

    computed: {
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date)
            return yearDay
        }
    },
    components: {
        FabComponent: defineAsyncComponent(() => import('@/modules/daybook/components/FabComponent.vue'))
    },


    methods: {
        loadEntry() {
            const entry = this.getEntryById( this.id )
            if( !entry ) return  this.$router.push({ name: 'no-entry'})

            this.entry = entry
            console.log('entry',entry)
        }

    },
    created() {

        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
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