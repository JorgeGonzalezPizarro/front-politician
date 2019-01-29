import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Col, Label, Modal, ModalBody, ModalHeader, Row} from 'reactstrap';
import Link from "react-router-dom/es/Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {Control, Errors, LocalForm} from "react-redux-form";
import {GenderIcon} from "../../Politician/Presentational/RenderCardPolitician";





export const RenderForm = ({defaultValues, politicianId, addPolitician}) => {
    const [id, titular, partido, partidoParaFiltro, genero, cargo, cargoParaFiltro, institucion, ccaa, sueldoBase, complementosSueldo, pagasExtrasSueldo, otrasDietas, trieniosSueldo, retribucionAnual, retribucionMensual, observaciones] = Object.values(defaultValues) || null;

    const required = val => val && val.length;
    const handleSubmit = values => addPolitician(politicianId, values.rating, values.author, values.comment);

    return (
            <>
                <div className="col-12 col-md-12">
                    <LocalForm initialState={{
                        id,
                        titular,
                        partido,
                        partidoParaFiltro,
                        genero,
                        cargo,
                        cargoParaFiltro,
                        institucion,
                        ccaa,
                        sueldoBase,
                        complementosSueldo,
                        pagasExtrasSueldo,
                        otrasDietas,
                        trieniosSueldo,
                        retribucionAnual,
                        retribucionMensual,
                        observaciones
                    }} onSubmit={(values) => handleSubmit.bind(this, values)}>
                        <Row className="form-group">
                            <Label htmlFor="titular" md={3}>Titular</Label>
                            <Col md={9}>
                                <Control.text model=".titular" id="titular" name="titular"
                                              placeholder="Titular" min="1"
                                              className="form-control"
                                              validators={required}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".titular"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="partido" md={3}>Partido</Label>
                            <Col md={9}>
                                <Control.text model=".partido" id="partido" name="partido"
                                              placeholder="Partido"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".partido"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="genero" md={3}>Genero</Label>
                            <Col md={9}>
                                <Control.text model=".genero" id="genero" name="genero"
                                              placeholder="Genero"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".cargo"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="institucion" md={3}>Institucion</Label>
                            <Col md={9}>
                                <Control.text model=".institucion" id="institucion" name="institucion"
                                              placeholder="Institucion"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".institucion"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="ccaa" md={3}>Comunidad Autonoma</Label>
                            <Col md={9}>
                                <Control.text model=".ccaa" id="ccaa" name="ccaa"
                                              placeholder="Comunidad Autonoma"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".ccaa"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="sueldoBase" md={3}>Sueldo base</Label>
                            <Col md={9}>
                                <Control.text type="number" model=".sueldoBase" id="sueldoBase" name="sueldoBase"
                                              placeholder="Sueldo base"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".sueldoBase"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="complementosSueldo" md={3}>Complementos sueldo</Label>
                            <Col md={9}>
                                <Control.text type="number" model=".complementosSueldo" id="complementosSueldo"
                                              name="complementosSueldo"
                                              placeholder="Complementos sueldo "
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".complementosSueldo"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="pagasExtrasSueldo" md={3}>Pagas Extra </Label>
                            <Col md={9}>
                                <Control.text type="number" model=".pagasExtrasSueldo" id="pagasExtrasSueldo"
                                              name="pagasExtrasSueldo"
                                              placeholder="Pagas extra"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".pagasExtrasSueldo"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="otrasDietas" md={3}>Dietas</Label>
                            <Col md={9}>
                                <Control.text type="number" model=".otrasDietas" id="otrasDietas" name="otrasDietas"
                                              placeholder="Dietas "
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".otrasDietas"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="trieniosSueldo" md={3}>Trienios </Label>
                            <Col md={9}>
                                <Control.text type="trieniosSueldo" model=".trieniosSueldo" id="trieniosSueldo"
                                              name="trieniosSueldo"
                                              placeholder="Trienios "
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".trieniosSueldo"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="retribucionAnual" md={3}>Retribucion anual</Label>
                            <Col md={3}>
                                <Control.text type="number" model=".retribucionAnual" id="retribucionAnual"
                                              name="retribucionAnual"
                                              placeholder="Retribucion mensual"
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".retribucionAnual"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="retribucionMensual" md={3}>Retribucion mensual</Label>
                            <Col md={9}>
                                <Control.text type="number" model=".retribucionMensual" id="retribucionMensual"
                                              name="retribucionMensual"
                                              placeholder="Retribucion mensual" value={retribucionMensual}
                                              className="form-control"
                                              validators={{
                                                  required
                                              }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".retribucionMensual"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="observaciones" md={3}>Observaciones</Label>
                            <Col md={9}>
                                <Control.textarea type="number" model=".observaciones" id="observaciones"
                                                  name="observaciones"
                                                  placeholder="Observaciones base" value={observaciones}
                                                  className="form-control"
                                                  validators={{
                                                      required
                                                  }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".retribucionAnual"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }}
                                />
                            </Col>
                        </Row>
                        <Button className="bg-primary">
                            Confirmar
                        </Button>
                    </LocalForm>

                </div>
            </>


    )

}
