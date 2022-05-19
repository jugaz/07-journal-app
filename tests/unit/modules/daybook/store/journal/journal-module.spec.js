import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'

const createVuexStore = ( initialState ) => createStore()

describe('Vuex - Pruebas en el Journal Module', () => {

    // Basicas ==================
    test('este es el estado inicial, debe de tener este state', () => {

    })

    // Mutations ==================
    test('mutation: setEntrie', () => {
        
    })

    test('mutation: updateEntry', () => {
        
    })

    test('mutation: addEntry deleteEntry', () => {

    })

    // Getters ==================
    test('getters: getEntriesByTerm getEntryById', () => {

    })

    // Actions ==================
    test('actions: loadEntries', async() => {

    })

    test('actions: updateEntry', async() => {

    })

    test('actions: createEntry deleteEntry', async() => {

    })
})