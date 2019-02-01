import React, {Component} from 'react';
import Header from './Header/Header';
import {connect} from 'react-redux';
import Footer from "./Footer/Footer";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Home from "./Home/Home";
import {RenderPolitician} from "./Functional components/PoliticianDetail/PoliticianDetailRouter";
import {create, update} from '../redux/ActionCreators/Command/ActionCreators';
import {fetchPoliticians} from '../redux/ActionCreators/Fetch/ActionCreators';
import {Loading} from "./Functional components/LoadingComponent";
import {CreatePolitician} from "./Politician/Functional/CreatePolitician";
import {PaginationHandler} from "./Home/Pagination";


export const mapStateToProps = (state) => {
    return {form: state.politicians.form , politicians: state.politicians, updating: state.updating, pagination: state.politicians.pagination}
};

export const mapDispatchToProps = (dispatch) => ({
    create: (politician) => dispatch(create(politician)),
    update: (politician) => dispatch(update(politician)),
    fetchPolitician: (page) => {dispatch(fetchPoliticians(page))

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
    handleClickPagination = (e,page)=> {
        e.preventDefault();
        if(page !== this.props.pagination.page)
        {
            return this.props.fetchPolitician(page);
        }
    }
    componentDidMount() {
         this.props.fetchPolitician();
    }

    render() {
        const defaultValues = () => {
            const defaultValues = {};
            Object.keys(this.props.form).map((keys) => {
                return defaultValues[keys] = '';
            });
            return defaultValues;
        };
        const actions = {
            addPolitician: this.props.create,
            update: this.props.update,
        };


        const HomePage = () => {
            return (
                <div>
                <Home politicians={this.props.politicians} pagination={this.props.pagination}/>
                <PaginationHandler onClick={this.handleClickPagination} numItems={this.props.politicians.length} pagination={this.props.pagination}/>
                   </div>);
        };
        const PoliticianRouter = ({match, actions}) => {
            if(this.props.politicians.isLoading)
            {
                return <Loading/>
            }
            return (
                    <RenderPolitician form={this.props.form} updating={this.props.updating}
                                      politician={this.props.politicians.politicians.filter((politician, key) => politician.id === match.params.id)[0]}
                                      actions={actions}/>
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
                    <Route exact path={'/create'}  component={() => {
                        if(this.props.politicians.isLoading)
                        {
                            return <Loading/>
                        }
                        return <CreatePolitician defaultValues={defaultValues()} form={this.props.form}
                                                 actions={actions}/>
                    }
                    } />
                    <Redirect to={"/home"}/>
                </Switch>

                <Footer/>

            </div>
        );

    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

