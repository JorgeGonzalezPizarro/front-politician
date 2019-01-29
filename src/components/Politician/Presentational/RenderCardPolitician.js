import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardHeader,
    CardFooter,
    CardSubtitle
} from "reactstrap";
import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFemale} from "@fortawesome/free-solid-svg-icons/faFemale";
import {faMale} from "@fortawesome/free-solid-svg-icons/faMale";

export  const RenderCardPolitician = ({politician}) => {


    return (
            <div className="col-12 col-md-5 m-1" >
                <Card>
                    <CardHeader>{politician.ccaa}</CardHeader>
                    <CardBody>
                        <CardTitle  tag="h4">{politician.titular} <GenderIcon gender={politician.genero}/></CardTitle>
                        <CardText>{politician.institucion}</CardText>
                        <CardSubtitle>{politician.partido}</CardSubtitle>
                    </CardBody>
                    <Link to={`/politician/${politician.id}`}>
                    <CardFooter>More</CardFooter>
                    </Link>

                </Card>
            </div>
    );

};
export const GenderIcon = ({gender}) => {
    switch (gender) {
        case "Mujer" : return <FontAwesomeIcon icon={faFemale}/>
        case "Hombre" : return <FontAwesomeIcon icon={faMale}/>;
        default : return <FontAwesomeIcon icon={faFemale}/>
    }
}