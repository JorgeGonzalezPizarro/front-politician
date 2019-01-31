import React, {Component} from 'react';
import {
    Button,
    Col,
    FormGroup,
    Label, Form,
    Row,
    Input, FormFeedback, Alert,
} from 'reactstrap';
import {Control, Errors, LocalForm} from "react-redux-form";
import {Loading} from "../../Functional components/LoadingComponent";



//export const RenderForm = ({defaultValues, politicianId, addPolitician}) => {
export class RenderForm extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            ...this.props.defaultValues ,
            form : this.props.form
        }
}



    render() {


        const handleSubmit = (event) => {
            event.preventDefault();
            return this.props.handleOnClick(this.state);
        }
      const handleInputChange =(event) =>{
            const target = event.target;
          const value = target.type === 'number' ? parseInt(target.value,10) : target.value;

            const name = target.name;
            this.setState({
                [name]: value
            });

        }



        return (
                <div className="col-12 col-md-12">
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Update</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="titular" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="titular" name="titular"
                                               placeholder="titular"
                                               value={this.state.titular}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="partido" md={2}>partido</Label>
                                    <Col md={10}>
                                        <Input type="text" id="partido" name="partido"
                                               placeholder="partido"
                                               value={this.state.partido}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="genero" md={2}>genero</Label>
                                    <Col md={10}>
                                        <Input type="text" id="genero" name="genero"
                                               placeholder="genero"
                                               value={this.state.genero}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="cargo" md={2}>cargo</Label>
                                    <Col md={10}>
                                        <Input type="text" id="cargo" name="cargo"
                                               placeholder="cargo"
                                               value={this.state.cargo}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="institucion" md={2}>institucion</Label>
                                    <Col md={10}>
                                        <Input type="text" id="institucion" name="institucion"
                                               placeholder="institucion"
                                               value={this.state.institucion}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="ccaa" md={2}>ccaae</Label>
                                    <Col md={10}>
                                        <Input type="ccaa" id="ccaa" name="ccaa"
                                               placeholder="ccaa"
                                               value={this.state.ccaa}
                                               onChange={this.handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="sueldoBase" md={2}>Sueldo Base</Label>
                                    <Col md={10}>
                                        <Input type="number" id="sueldoBase" name="sueldoBase"
                                               placeholder="Sueldo base"
                                               value={this.state.sueldoBase}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="complementosSueldo" md={2}>Complementos sueldo</Label>
                                    <Col md={10}>
                                        <Input type="text" id="complementosSueldo" name="complementosSueldo"
                                               placeholder="Complementos sueldos"
                                               value={this.state.complementosSueldo}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="pagasExtrasSueldo" md={2}>Pagas extra sueldo</Label>
                                    <Col md={10}>
                                        <Input type="number" id="pagasExtrasSueldo" name="pagasExtrasSueldo"
                                               placeholder="Pagas extra sueldo "
                                               value={this.state.pagasExtrasSueldo}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="otrasDietas" md={2}>Otras dietas </Label>
                                    <Col md={10}>
                                        <Input type="number" id="otrasDietas" name="otrasDietas"
                                               placeholder="Otras dietas"
                                               value={this.state.otrasDietas}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="trieniosSueldo" md={2}>Trienios sueldo</Label>
                                    <Col md={10}>
                                        <Input type="number" id="trieniosSueldo" name="trieniosSueldo"
                                               placeholder="Complementos sueldos"
                                               value={this.state.trieniosSueldo}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="retribucionAnual" md={2}>Complementos sueldo</Label>
                                    <Col md={10}>
                                        <Input type="number" id="retribucionAnual" name="retribucionAnual"
                                               placeholder="Retribucion anual"
                                               value={this.state.retribucionAnual}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="retribucionMensual" md={2}>Retribucion mensual </Label>
                                    <Col md={10}>
                                        <Input type="number" id="retribucionMensual" name="retribucionMensual"
                                               placeholder="Retribucion mensual"
                                               value={this.state.retribucionMensual}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="observaciones" md={2}>Observaciones</Label>
                                    <Col md={10}>
                                        <Input type="text" id="observaciones" name="observaciones"
                                               placeholder="Observaciones"
                                               value={this.state.observaciones}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Confirm
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>


//    {/*<LocalForm onSubmit={(values) => handleSubmit(values)}*/}
//    {/*initialState={{*/}
//    {/*id,*/}
//    {/*titular,*/}
//    {/*partido,*/}
//    {/*partidoParaFiltro,*/}
//    {/*genero,*/}
//    {/*cargo,*/}
//    {/*cargoParaFiltro,*/}
//    {/*institucion,*/}
//    {/*ccaa,*/}
//    {/*sueldoBase,*/}
//    {/*complementosSueldo,*/}
//    {/*pagasExtrasSueldo,*/}
//    {/*otrasDietas,*/}
//    {/*trieniosSueldo,*/}
//    {/*retribucionAnual,*/}
//    {/*retribucionMensual,*/}
//    {/*observaciones*/}
//    {/*}}>*/}
//    {/*/!*<LocalForm initialState={{*!/*/}
//    {/*/!*id,*!/*/}
//    {/*/!*titular,*!/*/}
//    {/*/!*partido,*!/*/}
//    {/*/!*partidoParaFiltro,*!/*/}
//    {/*/!*genero,*!/*/}
//    {/*/!*cargo,*!/*/}
//    {/*/!*cargoParaFiltro,*!/*/}
//    {/*/!*institucion,*!/*/}
//    {/*/!*ccaa,*!/*/}
//    {/*/!*sueldoBase,*!/*/}
//    {/*/!*complementosSueldo,*!/*/}
//    {/*/!*pagasExtrasSueldo,*!/*/}
//    {/*/!*otrasDietas,*!/*/}
//    {/*/!*trieniosSueldo,*!/*/}
//    {/*/!*retribucionAnual,*!/*/}
//    {/*/!*retribucionMensual,*!/*/}
//    {/*/!*observaciones*!/*/}
//    {/*/!*}} onSubmit={(values) => handleSubmit.bind(this, values)}>*!/*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="titular" md={3}>Titular</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text model=".titular" id="titular" name="titular"*/}
//    {/*placeholder="Titular" min="1"*/}
//    {/*className="form-control"*/}
//    {/*validators={required}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".titular"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required',*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="partido" md={3}>Partido</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text model=".partido" id="partido" name="partido"*/}
//    {/*placeholder="Partido"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".partido"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required',*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="genero" md={3}>Genero</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text model=".genero" id="genero" name="genero"*/}
//    {/*placeholder="Genero"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".cargo"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required',*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="institucion" md={3}>Institucion</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text model=".institucion" id="institucion" name="institucion"*/}
//    {/*placeholder="Institucion"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".institucion"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required',*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="ccaa" md={3}>Comunidad Autonoma</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text model=".ccaa" id="ccaa" name="ccaa"*/}
//    {/*placeholder="Comunidad Autonoma"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".ccaa"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required',*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="sueldoBase" md={3}>Sueldo base</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text type="number" model=".sueldoBase" id="sueldoBase" name="sueldoBase"   placeholder="Sueldo base"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".sueldoBase"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="complementosSueldo" md={3}>Complementos sueldo</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text type="number" model=".complementosSueldo" id="complementosSueldo"*/}
//    {/*name="complementosSueldo"*/}
//    {/*placeholder="Complementos sueldo "*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".complementosSueldo"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="pagasExtrasSueldo" md={3}>Pagas Extra </Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text type="number" model=".pagasExtrasSueldo" id="pagasExtrasSueldo"*/}
//    {/*name="pagasExtrasSueldo"*/}
//    {/*placeholder="Pagas extra"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".pagasExtrasSueldo"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="otrasDietas" md={3}>Dietas</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text type="number" model=".otrasDietas" id="otrasDietas" name="otrasDietas"*/}
//    {/*placeholder="Dietas "*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".otrasDietas"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="trieniosSueldo" md={3}>Trienios </Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text type="trieniosSueldo" model=".trieniosSueldo" id="trieniosSueldo"*/}
//    {/*name="trieniosSueldo"*/}
//    {/*placeholder="Trienios "*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".trieniosSueldo"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="retribucionAnual" md={3}>Retribucion anual</Label>*/}
//    {/*<Col md={3}>*/}
//    {/*<Control.text type="number" model=".retribucionAnual" id="retribucionAnual"*/}
//    {/*name="retribucionAnual"*/}
//    {/*placeholder="Retribucion mensual"*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".retribucionAnual"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="retribucionMensual" md={3}>Retribucion mensual</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.text type="number" model=".retribucionMensual" id="retribucionMensual"*/}
//    {/*name="retribucionMensual"*/}
//    {/*placeholder="Retribucion mensual" value={retribucionMensual}*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*required*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".retribucionMensual"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Label htmlFor="observaciones" md={3}>Observaciones</Label>*/}
//    {/*<Col md={9}>*/}
//    {/*<Control.textarea type="number" model=".observaciones" id="observaciones"*/}
//    {/*name="observaciones"*/}
//    {/*placeholder="Observaciones base" value={observaciones}*/}
//    {/*className="form-control"*/}
//    {/*validators={{*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*<Errors*/}
//    {/*className="text-danger"*/}
//    {/*model=".retribucionAnual"*/}
//    {/*show="touched"*/}
//    {/*messages={{*/}
//    {/*required: 'Required'*/}
//    {/*}}*/}
//    {/*/>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*<Row className="form-group">*/}
//    {/*<Col >*/}
//    {/*<Button type="submit" color="primary">*/}
//    {/*Confirm*/}
//    {/*</Button>*/}
//    {/*</Col>*/}
//    {/*</Row>*/}
//    {/*</LocalForm>*/};


        );
    }

}
