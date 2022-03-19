import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas del componente AddCategory.js', () => { 

    const setCategories=()=>{}
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    test('Se debe de renderizar el componente correctamente ', () => { 

       

        expect(wrapper).toMatchSnapshot();
     })

     test('Debe de cambiar la caja de texto', () => { 

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
      })
 })