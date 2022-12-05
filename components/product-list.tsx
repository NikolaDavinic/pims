import Product from "./product";
import { ProductDto } from "../models/product-dto";
export default function ProductList(products: ProductDto[]){
    return(
        <ul>
            <li><Product /></li>
            <li><Product /></li>
            <li><Product /></li>
        </ul>
    )
}