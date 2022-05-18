import { shallowMount } from "@vue/test-utils";
import AboutView from '@/views/AboutView'

describe('Pruebas en el About View',() => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( AboutView )
    })
    test('debe de renderizar el componente correctamente',() => {
    
        expect( wrapper.html() ).toMatchSnapshot()
    })
    
})