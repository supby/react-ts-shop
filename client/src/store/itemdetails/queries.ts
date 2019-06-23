import gql from "graphql-tag";

export const GET_PRODUCT_DETAILS = gql`
  query ProductDetails($id: Int) {
    product(where: {id: $id}) {
      id
      name
      description
      price
      discountedPrice
      image
      image2
      thumbnail
      display
    }
    reviews(where: {product: {id: $id} }) {
      product {
        id
      }
      rating
      review
      created_On
    }
  }
`;
