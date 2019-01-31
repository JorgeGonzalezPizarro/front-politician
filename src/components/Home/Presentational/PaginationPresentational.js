import React from "react";

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const PaginationPresentational = ({page,itemsPerPage,totalPages,totalIetms}) => {

    return(
        <div className="container">
            <div className="row">
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            <RenderPagination totalPages={totalPages} activePage={page} numPage={page}/>

            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
        </Pagination>
            </div></div>

    );
};

const RenderPagination=({totalPages , activePage,numPage})=> {
    console.log(totalPages)
    return Array.from(Array(totalPages).keys()).map((page) => {
        console.log(page);
        return (
            <PaginationItem>
                <PaginationLink href="#">
                    {page+1}
                </PaginationLink>
            </PaginationItem>
        )
    });

}