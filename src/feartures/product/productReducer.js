import {
    GET_LIST_PRODUCT,
    ADD_NEW_PRODUCT,
}
    from "./constant";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "OMO-MATIC",
            image: "https://meta.vn/Data/image/2021/12/22/nuoc-giat-omo-matic-cho-may-giat-cua-tren-2-2kg.jpg",
            price: 175000,
            tax: 17500
        },
        {
            id: 2,
            name: "Sữa Tắm Cottage",
            image: "https://cdn.cocolux.com/2021/10/images/products/1634871256626-sua-tam-cottage.png",
            price: 165000,
            tax: 16500
        },
        {
            id: 3,
            name: "Sunlight Lau sàn",
            image: "https://www.cleanipedia.com/images/5iwkm8ckyw6v/5UW71Mebr89zHRjfsainlp/a4246918e83ba5d4141170b79e26ebc5/UGluay5qcGc/720w-720h/slfc-hoa-lily-m%E1%BB%9Bi.jpg",
            price: 89000,
            tax: 8900
        },
        {
            id: 4,
            name: "Sữa Rửa Mặt Simple",
            image: "https://media.hasaki.vn/catalog/product/g/o/google-shopping-sua-rua-mat-simple-giup-da-sach-thoang-150ml-1652952400_img_380x380_64adc6_fit_center.jpg",
            price: 120000,
            tax: 1200
        },
        {
            id: 5,
            name: "Dầu gội Clear Men",
            image: "https://media.hasaki.vn/catalog/product/g/o/google-shopping-dau-goi-clear-men-sach-gau-deep-cleanse-sach-sau-630g-1.jpg",
            price: 176000,
            tax: 17600
        }
    ]

}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_LIST_PRODUCT:
            return {
                ...state,
            };

        case ADD_NEW_PRODUCT:
            const { data = {} } = action;
            const { product } = data;
            let response = [...state.products]
            response.unshift(product)

            return {
                ...state,
                products: response,
            };
        default:
            return state;
    }
}

export default productReducer;