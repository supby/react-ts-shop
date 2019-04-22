import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react'
import ItemBox from './ItemBox'
import { Item, ItemsListState } from '../store/items/types';
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
        console.log(this.props)
        return (
            <Container text style={{ marginTop: '7em' }}>
                <Header as='h1'>Items</Header>
                <Grid container columns={3}>
                { 
                    this.props.items.map(item => (
                    <Grid.Column>
                        <ItemBox 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} />
                    </Grid.Column>))
                }
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => {
    console.log(state);
   return {
    items: state.itemsList.items,
    isLoading: false
  }};
  
export default connect(
    mapStateToProps,
    actionCreators
)(ItemsList);