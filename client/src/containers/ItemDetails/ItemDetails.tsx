import React, { PureComponent } from 'react';
import { ApplicationState } from "../../store";
import { connect } from 'react-redux';
import { actionCreators } from '../../store/itemdetails/actions';
import Loading from "../../components/Loading/Loading";
import { Header, Grid, Image, Segment } from 'semantic-ui-react';
import { ItemDetailsData } from '../../store/itemdetails/types';
import { RouteComponentProps } from 'react-router';

interface ItemDetailsProps {
  isLoading: boolean;
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: string;
  image2: string;
  thumbnail: string;
  display: number;
  requestItemDetails: (id: number) => any;
}

interface ItemDetailsRouteProps {
  id: string;
}

class ItemDetails extends PureComponent<ItemDetailsProps & RouteComponentProps<ItemDetailsRouteProps>> {
  id = +(this.props.match.params.id);

  componentDidMount() {
    this.props.requestItemDetails(this.id);
  }

  render() {
    return (
      <Loading isLoading={this.props.isLoading}>
        <Header as='h1'>{this.props.name}</Header>
        <Grid centered columns={2} >
          <Grid.Row>
            <Grid.Column>
              <Image src={`/product_images/${this.props.image}`} size='medium' />
            </Grid.Column>
            <Grid.Column>
              Buy options, suze, colors, add to basket, price
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
        {this.props.description}
        </Segment>
        <Segment>
        Reviews
        </Segment>
        
      </Loading>)
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return { ...state.itemDetails.data, isLoading: state.itemDetails.isLoading }
};

export default connect(
  mapStateToProps,
  actionCreators
)(ItemDetails);