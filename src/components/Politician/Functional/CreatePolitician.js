import React  from 'react'
import {RenderForm} from "../Form/PoliticianForm";
import {PoliticianNormalForm} from "../Form/PoliticianNormalForm";

export const CreatePolitician = ({actions}) => {

    return <PoliticianNormalForm form={<RenderForm  actions={actions} defaultValues={Object} /> } />
};




