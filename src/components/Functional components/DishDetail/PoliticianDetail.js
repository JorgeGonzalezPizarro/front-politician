import React from 'react';
import {Alert, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Link from "react-router-dom/es/Link";
import {GenderIcon} from "../../Politician/Presentational/RenderCardPolitician";
import {PoliticianModalForm} from "../../Politician/Form/PoliticianModalForm";
import {Loading} from "../LoadingComponent";

const PoliticianDetail = (props) => {
    console.log(props);
    if(props.updating.isLoading === true)
    {
        return <Loading/>
    }
    if(props.updating.error !== undefined)
    {
        return <Alert color="danger">{props.updating.error}</Alert>
    }

    const politicianKeysLength = Object.keys(props.politician).length;
    const firstListLength = politicianKeysLength / 2;
    return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.politician.titular}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.politician.titular}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 m-1">
                        {Object.entries(props.politician).slice(0, firstListLength).map(
                                ([key, value]) => {

                                    return (<RenderPoliticianPersonalData key={key} title={key} value={value}
                                                                          actions={props.actions}
                                                                          politicianId={props.politician}/>
                                    )
                                })}

                    </div>
                    <div className="col-12 col-md-3 m-1">
                        {Object.entries(props.politician).slice(-firstListLength).map(
                                ([key, value]) => {
                                    return (<RenderPoliticianPersonalData key={key} title={key} value={value}
                                                                          actions={props.actions}
                                                                          politicianId={props.politician}/>
                                    )
                                })}
                    </div>
                </div>
                <div className="row">

                </div>
                <PoliticianModalForm form = {props.form} handleOnClick={props.update} updating={props.updating} isOpen={false} update={props.actions.update}
                                politicianId={props.politician.id}
                                defaultValues={props.politician}/>
            </div>
    );
};

const RenderPoliticianPersonalData = (props) => {
    const {title, value} = {...props};

    switch (title) {
        case "id" :
            return <div/>
        case "genero" :
            return (
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span><b> {title} </b> {value} </span>
                                <GenderIcon gender={value}/>
                            </li>
                        </ul>
                    </div>
            );
        default :
            return (
                    <div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span><b> {title} </b> {value}</span>
                            </li>
                        </ul>
                    </div>
            );
    }
    ;
}


export default PoliticianDetail;

