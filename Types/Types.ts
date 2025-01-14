type reviews = [
    {
    id: string,
    rating: number,
    comment: string,
    name: string,
    image: string,
    userId: string,
    status: boolean,
    productId: string,
    createdAt: string,
    updatedAt: string
    },
    {
    id: string,
    rating: number,
    comment: string,
    name: string,
    image: string,
    userId: string,
    status: boolean,
    productId: string,
    createdAt: string,
    updatedAt: string
    }
    ]


type subCategory = {
    id: string,
    title: string,
    slug: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string
    }


export type product = {
    id: string,
    name: string,
    slug: string,
    productCode: string,
    stockQty: number,
    productCost: number,
    productPrice: number,
    supplierPrice: number,
    alertQty: number,
    productTax: number,
    taxMethod: string,
    productImages: string[],
    status: boolean,
    productThumbnail: string,
    productDetails: string,
    content: string,
    batchNumber: string,
    expiryDate: string,
    isFeatured: boolean,
    createdAt: string,
    updatedAt: string,
    subCategoryId: string,
    brandId: string,
    unitId: string,
    supplierId: string,
    subCategory: subCategory,
    reviews: reviews[]
    }