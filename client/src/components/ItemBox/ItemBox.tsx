import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Item } from '../../store/items/types';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default class ItemBox extends Component<Item> {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Meta>
                        <Rater total={5} rating={this.props.rating} />
                    </Card.Meta>
                    <Card.Description>
                        <Image src={`/product_images/${this.props.image}`} />
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='dollar sign' />{this.props.price}
                </Card.Content>
            </Card>
        );
    }
}