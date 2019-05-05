import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Item } from '../store/items/types';

export default class ItemBox extends Component<Item> {
    render() {
        return (
            <Card>
                <Image src='' />
                <Card.Content>
                    <Card.Header>{this.props.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>sale...</span>
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