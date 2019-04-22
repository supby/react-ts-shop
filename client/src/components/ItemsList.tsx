import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react'
import ItemBox from './ItemBox'
import { Item } from '../store/items/types'
import { actionCreators } from '../store/items/actions'
import { ApplicationState } from '../store'

interface ItemsListProps {
    items: Item[];
    isLoading: boolean;
    requestItems: any;
}

class ItemsList extends Component<ItemsListProps> {
    componentDidMount() {
        this.props.requestItems();
    }

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

const mapStateToProps = (state: ApplicationState) => ({
    items: state.itemList.items,
    isLoading: state.itemList.isLoading
  });
  
  export default connect(
    mapStateToProps,
    actionCreators
  )(ItemsList);