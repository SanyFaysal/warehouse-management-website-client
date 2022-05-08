import { useEffect, useState } from "react";

const useProducts = (getType) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://murmuring-anchorage-22849.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [products])
    return [products]
}
export default useProducts;