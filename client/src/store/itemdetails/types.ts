export interface ItemDetailsState {
    data: ItemDetailsData;
    isLoading: boolean;
}

export interface ItemDetailsData {
    id: number;
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: string;
    image2: string;
    thumbnail: string;
    display: number;
    reviews: ItemReview[];
}

export interface ItemReview {

}