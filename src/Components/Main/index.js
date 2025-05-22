import React from 'react';
import ProductList from './ProductList';
import { MainApp, TitleMain } from './styles';

const Main = () => {
    return (
        <MainApp>
            <TitleMain>Productos Disponibles</TitleMain>
            <ProductList />
        </MainApp>
    );
};

export default Main;
