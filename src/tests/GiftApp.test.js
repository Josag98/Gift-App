import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { GiftApp } from '../GiftApp';

describe("Pruebas del componente GiftApp.js", () => {
  test("El componente se debe de renderizar correctamente", () => {
    const wrapper = shallow(<GiftApp />);

    // expect(wrapper).toMatchSnapshot();
  });
});