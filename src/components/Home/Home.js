import React from 'react'
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "../Functional components/LoadingComponent";
import {HomePresentational} from "./Presentational/HomePresentational";

const HomeComponent = ({politicians , pagination}) => {
    if(politicians.isLoading)
    {
        return <Loading/>
    }

    return(

        <HomePresentational politicians={politicians.politicians} pagination={pagination}/>
    );
};
const RenderCard = ({item}) => {
    console.log(item);
return (
    <Card>
        <CardImg src={item.image} alt={item.image}/>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
            <CardText>{item.description}</CardText>

        </CardBody>
    </Card>


)



}

export default HomeComponent;