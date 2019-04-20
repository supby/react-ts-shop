import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react'
import Item from './Item'
import { actionCreators, ItemsListState } from '../store/ItemsList'
import { ApplicationState } from '../store'

type ItemsListProps =
    ItemsListState
    & typeof actionCreators;

class ItemsList extends Component<ItemsListProps> {
    render() {
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Items</Header>
                <Grid container columns={3}>
                    
                </Grid>
            </Container>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.itemList,
    actionCreators
)(ItemsList) as typeof ItemsList;