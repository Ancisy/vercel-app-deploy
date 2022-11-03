import React from 'react'
import BillInformation from './BillInformation'
import ProductList from './ProductList'
import './ShoppingCart.css'
import { useState } from 'react'
import { cartItems } from '../data/products';

function ShoppingCart() {
    let sum=0;
    let vat=0;
    let total=0;
    const [products, setProducts] = useState(cartItems);
    const [show, setShow] = useState(false);
    

    const handleAdd = (id) => {
        let newList = products.map((p) => {
            if (p.id === id) {
                return { ...p, count: p.count+1 }
            }
            return p;
        })
        setProducts(newList);
    }

    const handleMinus = (id) =>{
        let newList = products.map((p) => {
            if (p.id === id) {
                if(p.count>1)
                return { ...p, count: p.count-1 }
            }
            return p;
        })
        setProducts(newList);
    }

    const handleDelete = (id) => {
        if (window.confirm("Do you really want to delete")) {
            let newList = products.filter((p) => p.id !== id);
            setProducts(newList);
            if (products.length === 1) {
                setShow(true);
            }
        }
    }

  
    products.forEach(myFunction)

    function myFunction(p){
        sum+=p.price*(p.count);
    }
    vat = sum/100*10;
    total=sum + vat;
    
    

    return (
        <div className="shopping-cart-container mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-4">
                            <h2>Shopping Cart</h2>
                        </div>
                    </div>
                </div>
                {show ? <p className="fst-italic message">Không có sản phẩm trong giỏ hàng</p> : null}
                <div className="row shopping-cart">
                    <div className="col-md-8">
                        <ProductList
                            products={products}
                            onDelete={handleDelete}
                            onAdd={handleAdd}
                            onMinus={handleMinus}
                        />
                    </div>
                    <div className="col-md-4">
                        <BillInformation 
                            price={sum}
                            vat = {vat}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart