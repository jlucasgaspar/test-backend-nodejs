export const fakeProductRequest = {
    valid: {
        body: {
            categoryId: 'valid_categoryId',
            title: 'valid_title',
            description: 'valid_description',
            price: 10
        }
    },

    withoutCategoryId: {
        body: {
            categoryId: '',
            title: 'valid_title',
            description: 'valid_description',
            price: 10
        }
    },

    withoutTitle: {
        body: {
            categoryId: 'valid_categoryId',
            title: '',
            description: 'valid_description',
            price: 10
        }
    },

    withoutDescription: {
        body: {
            categoryId: 'valid_categoryId',
            title: 'valid_title',
            description: '',
            price: 10
        }
    },

    withoutPrice: {
        body: {
            categoryId: 'valid_categoryId',
            title: 'valid_title',
            description: 'valid_description'
            //price: 10
        }
    },

    priceIsZero: {
        body: {
            categoryId: 'valid_categoryId',
            title: 'valid_title',
            description: 'valid_description',
            price: 0
        }
    },

    priceIsString: {
        body: {
            categoryId: 'valid_categoryId',
            title: 'valid_title',
            description: 'valid_description',
            price: '10'
        }
    }
}