import { useEffect, useState } from "react";

const useProducts = (getType) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/${getType}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return [products]
}
export default useProducts;