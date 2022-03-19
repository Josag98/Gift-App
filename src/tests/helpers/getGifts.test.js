import { getGifts } from "../../helpers/getGifts"

describe('Pruebas del archivo getGifts.js', () => { 
    test('Debe de retornar una arreglo con 10 imagenes', async () => { 

        const gifts = await getGifts('Goku');

        expect(gifts.length).toBe(10);
     })

 })