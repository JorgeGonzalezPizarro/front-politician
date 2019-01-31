import React, {Component} from 'react';
import {Alert, Breadcrumb, BreadcrumbItem, Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from 'reactstrap';
import Link from "react-router-dom/es/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {Control, Errors, LocalForm} from "react-redux-form";
import {GenderIcon} from "../../Politician/Presentational/RenderCardPolitician";
import {RenderForm} from "./PoliticianForm";
import {Loading} from "../../Functional components/LoadingComponent";



export class PoliticianModalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
        }
    }
    toggleModal = () => {
        return this.setState({
            ...this.state, isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
                <>
                    <button onClick={this.toggleModal}>
                        <FontAwesomeIcon icon={faPencilAlt}/>
                        <p>Update data</p>
                    </button>
                    <Modal isOpen={this.state.isOpen} className="modal-lg">
                        <ModalHeader toggle={this.toggleModal}>Update Politician</ModalHeader>
                        <RenderForm  form={this.props.form} handleOnClick={this.props.update}  updating={this.props.updating} politicianId={this.props.politicianId}
                                    defaultValues={this.props.defaultValues}/>
                        <ModalBody>
                        </ModalBody>
                    </Modal>
                </>
        );
    };

}


