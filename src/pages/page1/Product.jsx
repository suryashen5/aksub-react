import React from 'react'
import queryString from 'query-string';

const Product = props => {
    const query = queryString.parse(props.location.search);
    console.log(query.search);
    return <div>Product Page</div>
}

export default Product;