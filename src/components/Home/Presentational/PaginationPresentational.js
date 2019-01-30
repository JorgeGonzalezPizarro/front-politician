import {Loading} from "../../Functional components/LoadingComponent";
import React from "react";
import {RenderCardPolitician} from "../../Politician/Presentational/RenderCardPolitician";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {parse} from "@fortawesome/fontawesome-svg-core";

export const PaginationPresentational = ({page,itemsPerPage,totalPages,totalItems,onClick}) => {
    console.log(page);
    console.log(totalPages);
    return(
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-10 m-1">
        <Pagination aria-label="Page navigation example" className="pagination justify-content-center">
            <PaginationItem disabled={page === 1}>
                <PaginationLink previous  />
            </PaginationItem>
            <RenderPagination totalPages={totalPages} activePage={page} numPage={page} onClick={onClick}/>

            <PaginationItem  disabled={page === totalPages}>
                <PaginationLink next href="#"/>
            </PaginationItem>
        </Pagination>
            </div>
            </div></div>

    );
};

const RenderPagination=({totalPages , activePage,numPage , onClick})=> {
    return Array.from(Array(totalPages).keys()).map((page) => {
        const currentPage = parseInt(page+1);
        return (
            <PaginationItem active={currentPage===activePage} >
                <PaginationLink  onClick={ (e) => onClick(e,currentPage)}>
                    { currentPage}
                </PaginationLink>
            </PaginationItem>
        )
    });

}