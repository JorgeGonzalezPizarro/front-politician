import React, {Component} from 'react';

import Header from './Header/Header';
import {connect} from 'react-redux';
import Menu from "./Functional components/MenuComponent";
import Footer from "./Footer/Footer";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import Home from "./Home/Home";
import {RenderPolitician} from "./Functional components/DishDetail/DishDetailRouter";
import Contact from "./Pages/Contact";

import {addPolitician , update} from '../redux/ActionCreators/Command/ActionCreators';
import {fetchPoliticians} from '../redux/ActionCreators/Fetch/ActionCreators';
import {Loading} from "./Functional components/LoadingComponent";
import {CreatePolitician} from "./Politician/Functional/CreatePolitician";
import {PaginationHandler} from "./Home/Pagination";


export const mapStateToProps = (state) => {
    return {politicians: state.politicians, updating: state.updating, pagination: state.politicians.pagination}
};


export const mapDispatchToProps = (dispatch) => ({
    addPolitician: (politician) => dispatch(addPolitician(politician)),
    update: (politician) => dispatch(update(politician)),
    fetchPolitician: () => {dispatch(fetchPoliticians())
    }
});


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state= {
            dishes: props.politicians,
            ...props
        }
    }

    componentDidMount() {
         this.props.fetchPolitician();
    }


    render() {
        const actions = {
            addPolitician: this.props.addPolitician,
            update: this.props.update,
        };

        const HomePage = () => {

            return (
                <div>
                <Home politicians={this.props.politicians} pagination={this.props.pagination}/>
                <PaginationHandler  numItems={this.props.politicians.length} pagination={this.props.pagination}/>
                   </div>);
        };
        const PoliticianRouter = ({match, actions}) => {
            if(this.props.politicians.isLoading)
            {
                return <Loading/>
            }
            return (
                <RenderPolitician  updating ={this.props.updating} politician={this.props.politicians.politicians.filter((politician, key) => politician.id === match.params.id)[0]} actions={actions}/>
            )
        };
        return (

            <div>
                <Header/>
                <Switch>
                    <Route  exact path={["/politicians", "/home" , '/']} component={HomePage}
                            politicians={this.props.politicians.politicians} pagination={this.props.pagination}/>
                    <Route exact path={"/politician/:id"}
                           component={({match}) => <PoliticianRouter match={match} actions={actions}/>}/>
                    <Route exact path={'/contactus'} component={Contact}/>} />
                    <Route exact path={'/create'} component={CreatePolitician}/>} />
                    <Redirect to={"/home"}/>
                </Switch>

                <Footer/>

            </div>
        );

    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

