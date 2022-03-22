import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts');

describe('Pruebas del componente GiftGrid.js', () => { 

    const category = "One Punch Man";

    // test('El componente se debe de renderizar correctamente', () => { 
    //     useFetchGifts.mockReturnValue({
    //         data:[],
    //         loading:true
    //     })
    //     const wrapper = shallow(<GiftGrid category={category}/>)

        
    //     expect(wrapper).toMatchSnapshot();
    // })

    test('Debe de mostrar iamgenes cuando se estan cargando con el useFetchGifts', () => { 

        const gifts = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/madre.jpg',
            title: 'Cualquier madre'
        }]

        useFetchGifts.mockReturnValue({
            data:gifts,
            loading:false
        })
        const wrapper = shallow(<GiftGrid category={category}/>)
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GiftGridItem').length).toBe(gifts.length);


     })
 })