import React  from 'react'
import PoliticianDetail from "./DishdetailComponent";

export const RenderPolitician = ({politician,actions,updating}) => {
    console.log('from renderp' , actions);
    return <PoliticianDetail  updating ={updating} politician={politician} actions={actions} />
};


