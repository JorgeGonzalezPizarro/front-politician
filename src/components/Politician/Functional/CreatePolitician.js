import React  from 'react'
import {RenderForm} from "../Form/PoliticianForm";
import {PoliticianNormalForm} from "../Form/PoliticianNormalForm";
import {Route} from "react-router-dom";

export const CreatePolitician = ({actions , form}) => {
    return <PoliticianNormalForm form={<RenderForm  form={form}  handleOnClick={actions.addPolitician} defaultValues={Object} /> } />
};




