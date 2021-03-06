import React from 'react'
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




