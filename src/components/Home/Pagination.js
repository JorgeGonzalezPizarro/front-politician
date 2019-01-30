import React from 'react'
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";
import {Loading} from "../Functional components/LoadingComponent";
import {HomePresentational} from "./Presentational/HomePresentational";
import {PaginationPresentational} from "./Presentational/PaginationPresentational";

export const PaginationHandler = ({numItems,pagination,onClick}) => {
    if(!pagination || numItems<pagination.itemsPerPage)
    {
        return <div/>
    }


    return(

        <PaginationPresentational onClick ={onClick} page={pagination.page} itemsPerPage={pagination.itemsPerPage} totalPages={pagination.totalPages} totalItems={pagination.totalItems} pagination={pagination}/>
    );
};




