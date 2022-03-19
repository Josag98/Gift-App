import React from 'react';
import {shallow} from "enzyme"
import "@testing-library/jest-dom";
import { GiftGridItem } from '../../components/GiftGridItem';

describe('Pruebas del componentes GiftGridItem.js', () => {
  const url = "Esto es una url";
  const title = "Esto es un titulo";

  const wrapper = shallow(<GiftGridItem url={url} title={title} />);

  test("Se debe de renderizar GiftGridItem correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("El prop title debe de estar dentro de un parrafo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("La url y el title de la imagen deben de ser los de los props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test('El div debe de tener la clase animate__swing', () => { 

    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animate__swing')).toBe(true);
   })
})