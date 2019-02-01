import React from 'react'
import PoliticianDetail from "./PoliticianDetail";
export const RenderPolitician = ({politician,actions,updating , form}) => {
    console.log('from renderp' , actions);
    console.log('from renderp' , form);
    return <PoliticianDetail  updating ={updating} politician={politician}  form={form} actions={actions} />
};


