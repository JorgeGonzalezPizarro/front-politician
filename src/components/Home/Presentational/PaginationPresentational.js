import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const PaginationPresentational = ({page,itemsPerPage,totalPages,totalItems,onClick}) => {
    return(
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-10 m-1">
        <Pagination aria-label="Page navigation example" className="pagination justify-content-center">
            <PaginationItem disabled={page === 1} onClick={ (e) => onClick(e,page-1)}>
                <PaginationLink previous  />
            </PaginationItem>
            <RenderPagination totalPages={totalPages} activePage={page} numPage={page} onClick={onClick}/>
            <PaginationItem  disabled={page === totalPages}>
                <PaginationLink next onClick={ (e) => onClick(e,page+1)}/>
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