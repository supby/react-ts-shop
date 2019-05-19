import React, { Component } from 'react';
import ItemsList from './ItemsList'
import { RouteProps, match } from 'react-router';

interface HomeRouteParams {
  page: string;
}

interface DetailParams {
  page: string;
}

interface DetailsProps {
  match?: match<DetailParams>;
}
export default class Home extends Component<DetailsProps> {
  render() {
    const page = this.props.match ? this.props.match.params.page : 0;
    return (
      <ItemsList page={+page} />
    );
  }
}