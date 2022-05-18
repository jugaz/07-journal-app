import { shallowMount } from "@vue/test-utils";
import FabComponent from '@/modules/daybook/components/FabComponent'

describe('Pruebas en el FAB component',() => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( FabComponent )
  
    })

    test('debe de mostrar el icono por defecto',() => {

        expect( wrapper.find( 'i' ).classes('fa-plus') ).toBeTruthy()

    })

    test('debe de mostrar el icono por argumento: fa-circle',() => {

        const wrapper = shallowMount( FabComponent, {
            props: {
                icon: 'fa-circle'
            }
        } )

        expect( wrapper.find( 'i' ).classes('fa-circle') ).toBeTruthy()

    })

    test('debe de emitir el evento on:click cuando se hace click',() => {
    
        wrapper.find('button').trigger('click')
        
        expect(wrapper.emitted('on:click')).toHaveLength(1)

    })
    

})