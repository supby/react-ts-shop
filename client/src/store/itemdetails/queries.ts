import gql from "graphql-tag";

export const GET_PRODUCT_DETAILS = gql`
  query Products($id: Int) {
    products(where: { id: $id }) {
      id
      name
      description
      price
      image
    }
    reviews {
      product {
        id
      }
      rating
    }
  }
`;
