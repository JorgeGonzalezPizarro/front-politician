import React  from 'react'
import PoliticianDetail from "./DishdetailComponent";

export const RenderPolitician = ({politician,actions}) => {
    console.log('from renderp' , politician);
    return <PoliticianDetail politician={politician} actions={actions} />
};


