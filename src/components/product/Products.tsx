import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../interface';

export default function Products() {
    // lấy về dữ liệu ở trong kho chứa render
    const products:any=useSelector(state=>state);
    const disPatch = useDispatch();

    // thêm sản phẩm vào giỏ hàng
    const handleAddToCart=(product:Product)=>{
        console.log(111111,product);
        disPatch({
            type:"ADD_TO_CART",
            payload: product
        })
    }
    return (
        <div className="container">
            <div className="page-header">
                <h1>Shopping Cart</h1>
            </div>
            <div className="row">
                <div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">List Products</h1>
                            </div>
                            <div className="panel-body" id="list-product">
                                {products.productReducer.map((product:Product)=>{
                                    return (<div key={product.id}>
                                        <div className="media product borderBottom">
                                            <div className="media-left">
                                                <a href="#">
                                                    <img
                                                        className="media-object imageRender"
                                                        src={product.image}
                                                        alt="pizza"
                                                    />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="media-heading">{product.name}</h4>
                                                <p>
                                                    {product.description}
                                                </p>
                                                <span className="price">{product.price} USD</span>
                                                <button className='buttonAddToCart' onClick={()=>handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}