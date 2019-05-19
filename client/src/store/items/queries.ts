import gql from "graphql-tag";

export const GET_PRODUCTS_QUERY = gql`
  query Products($filter: String) {
    products(where: { name_contains: $filter }) {
      id
      name
      description
      price
      image
    },
    reviews {
      product {
        id
      }
      rating
    }
  }
`;
