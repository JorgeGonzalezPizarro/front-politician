import React from 'react'
import {RenderForm} from "../Form/PoliticianForm";
import {PoliticianNormalForm} from "../Form/PoliticianNormalForm";

export const CreatePolitician = ({actions, form, defaultValues}) => {
    console.log(form);
    return <PoliticianNormalForm
            form={<RenderForm form={form} handleOnClick={actions.addPolitician} defaultValues={defaultValues}/>}/>
};




