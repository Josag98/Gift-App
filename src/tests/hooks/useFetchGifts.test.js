import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifts } from "../../hooks/useFetchGifts"

describe('Pruebas del hook useFetchGifts,.js', () => { 

    test('Debe de retornar el estado inicial', async () => { 

        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifts('One Punch Man'));
        const {data,loading}=result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
     })

     test('Debe de retornar un arreglo de imagenes y el loading en false', async() => { 

        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifts('One Punch Man'));
        await waitForNextUpdate();
        const {data,loading}=result.current;

        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
      })
 })