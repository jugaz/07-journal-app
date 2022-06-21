import 'setimmediate'
import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'dea7hrlwi',
    api_key: '191179519777353',
    api_secret: 'UmAR52YIxYZ9rqd_4-2-M8JKP7c'
})


describe('Pruebas en el uploadImage ', () => {
    
    test('debe de cargar un archivo y retornar el url', async( done ) => {
        
        const { data } = await axios.get('https://res.cloudinary.com/dea7hrlwi/image/upload/v1652733409/cld-sample.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')


        // Tomar el ID
        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done()
        })

        
    })
    

})