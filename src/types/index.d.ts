export interface CartBoardItem {
    "productId": string,
    "productName": string,
    "productPrice": number,
    "productCount": number,
    "productImage": string,
    "checked":boolean
}

export interface AddressItem {
    "addressId": string,
      "userName": string,
      "streetName": string,
      "postCode": string,
      "tel": number,
      "isDefault": boolean
}