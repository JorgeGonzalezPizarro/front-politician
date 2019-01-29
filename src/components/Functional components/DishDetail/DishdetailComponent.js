import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from 'reactstrap';
import Link from "react-router-dom/es/Link";
import {GenderIcon} from "../../Politician/Presentational/RenderCardPolitician";
import {PoliticianForm} from "../../Politician/Form/PoliticianForm";
import {PoliticianModalForm} from "../../Politician/Form/PoliticianModalForm";

const PoliticianDetail = (props) => {
    const politicianKeysLength = Object.keys(props.politician).length;
    const firstListLength = politicianKeysLength / 2;
    const handleClick = (comment, e) => {
        e.preventDefault();
        return props.action.removeComment(props.id)
    }
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
                <PoliticianModalForm isOpen={false} addComment={props.actions.addPolitician}
                                politicianId={props.politician.id}
                                defaultValues={Object.values(props.politician)}/>
            </div>
    );
};

const RenderPoliticianPersonalData = (props) => {
    const {title, value} = {...props}

    console.log("personalData ", title);
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

