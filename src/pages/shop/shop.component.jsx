import React from 'react'

import SHOP_DATA from './shopData'

class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections : SHOP_DATA,
        }
    }

    render() {
        return (
            <h1>Shop Page</h1>
        )
    }
}

export default ShopPage;