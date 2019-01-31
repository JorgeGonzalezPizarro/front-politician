import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Link from "react-router-dom/es/Link";


export const PoliticianNormalForm = ({form}) => {

    console.log(form);
    return (
            <div className="container">
                <div className="row">

                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Create </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Create Politician </h3>
                        <hr/>
                    </div>
                </div>

                <div>
                    {form}

                </div>
            </div>
    );
}


