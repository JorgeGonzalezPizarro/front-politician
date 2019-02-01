import React, {Component} from 'react';
import {Button, Col, Form, FormFeedback, FormGroup, Input, Label,} from 'reactstrap';


//export const RenderForm = ({defaultValues, politicianId, addPolitician}) => {
export class RenderForm extends Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            ...this.props.defaultValues ,

        }
}


    componentDidMount() {
        const errors = {};
        Object.keys(this.state).map((key) => {
            if (this.props.form[key] !== undefined) {
                if (this.state[key] !== undefined) {
                    if (this.state[key].length > 0) {
                        errors[key] = ''
                    }
                }
                if (this.props.form[key].required === true && this.state[key].length === 0) {
                    errors[key] = 'Required'
                }
                errors[key] = '';
            }
        });

        this.setState({...this.state, errors: errors})
    }

    render() {

//        const handleValid  = (event) => {
//            event.preventDefault();
//            const target = event.target;
//            const field = target.name;
//            if (this.state.form[field] !== undefined ) {
//                if(this.state.form[field].required ===true){
//                    return errors[field] = "required"
//
//                }
//
//            }
//            return errors;
//        }


        const handleSubmit = (event) => {
            event.preventDefault();
            return this.props.handleOnClick(this.state);
        }
      const handleInputChange =(event) =>{
          event.preventDefault();

            const target = event.target;
          const value = target.type === 'number' ? parseInt(target.value,10) : target.value;
            handleValid(event);
            const name = target.name;
            this.setState({
                [name]: value
            });

        }
      const handleValid =(event) =>{
            const target = event.target;
            const name = target.name;
            const length =target.value.length;
          if (this.state.errors[name] !== undefined)
            {
                return false;
            }
            return true;
        }



        return (
                <div className="col-12 col-md-12">
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>Form</h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <Form onSubmit={handleSubmit}>
                                {Object.entries(this.props.form).map(([input,value])=> {
                                  return( <FormGroup row key={input}>
                                        <Label htmlFor={` ${input}`} md={2}>{` ${value.label}`}</Label>
                                        <Col md={10}>
                                            <Input type={`${value.type}`} id={`${this.state[input]}`} name={`${input}`}
                                                   placeholder={` ${value.label}`}
                                                   value={`${this.state[input] === undefined ? '' : this.state[input]}`}
                                                   onChange={handleInputChange.bind(this)}/>
                                            <FormFeedback> </FormFeedback>

                                        </Col>
                                    </FormGroup>
                                  )})}

                                <Button>Confirmar</Button>

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
