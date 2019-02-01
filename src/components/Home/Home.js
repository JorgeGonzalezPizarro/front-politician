import React from 'react'
import {Loading} from "../Functional components/LoadingComponent";
import {HomePresentational} from "./Presentational/HomePresentational";

const HomeComponent = ({politicians , pagination}) => {
    if(politicians.isLoading)
    {
        return <Loading/>
    }
    return(<HomePresentational politicians={politicians.politicians} pagination={pagination}/>
    );
};

export default HomeComponent;