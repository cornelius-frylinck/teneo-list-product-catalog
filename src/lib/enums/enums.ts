
enum ProductSortOptions {
    created_at = "created_at",
    negative_created_at = "-created_at",
    price = "price",
    negative_price = "-price",
    rating = "rating",
    negative_rating = "-rating",
}

enum ProductSortOpposites {
    created_at = "negative_created_at",
    negative_created_at = "created_at",
    price = "negative_price",
    negative_price = "price",
    rating = "negative_rating",
    negative_rating = "rating",
}

export {
    ProductSortOptions,
    ProductSortOpposites
}