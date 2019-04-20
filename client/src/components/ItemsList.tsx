import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react'
import Item from './Item'

export default class ItemsList extends Component {
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