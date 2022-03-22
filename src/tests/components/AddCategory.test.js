import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';



describe('Pruebas del componente AddCategory.js', () => { 

    const setCategories= jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    beforeEach(()=>{

      jest.clearAllMocks();
     wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test("Se debe de renderizar el componente correctamente ", () => {
      expect(wrapper).toMatchSnapshot();
    });

     test('Debe de cambiar la caja de texto', () => { 

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
      })
      test('No debe de postear la informacion con submit', () => { 

        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
       })

       test('Debe de llamar el setCategories y limpiar la caja de texto', () => { 


        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

        wrapper.find('form').simulate('submit',{preventDefault(){}})

       
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toBeCalledTimes(1);
        expect(setCategories).toBeCalledWith(expect.any(Function));



        expect(input.text().trim()).toBe('');

        })
 })