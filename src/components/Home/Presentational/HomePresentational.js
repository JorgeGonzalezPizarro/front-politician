import {Loading} from "../../Functional components/LoadingComponent";
import React from "react";
import {RenderCardPolitician} from "../../Politician/Presentational/RenderCardPolitician";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

export const HomePresentational = (politicians,onClick) => {
    return(

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Politicians</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Politicians</h3>
                        <hr />
                    </div>
                    {politicians.politicians.map((politician) => <RenderCardPolitician politician={politician} /> )}
                </div>
            </div>
    );
};