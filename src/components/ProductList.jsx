import React from 'react'
import {useState} from 'react'

function ProductList(props) {
  
    const {products,onDelete,onAdd,onMinus} = props;
   
    return (
        <div className="product-list">
            {
                products.map((p)=>(
                    <div className="product-item d-flex border mb-4" key={p.id}>
                        <div className="image">
                            <img src={p.image} />
                        </div>
                        <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="text-dark fs-5 fw-normal">
                                        {p?.name}
                                    </h2>
                                    <h2 className="text-danger fs-5 fw-normal">
                                        {p?.price}
                                    </h2>
                                </div>
                                <div className="text-black-50">
                                    <div className="d-inline-block me-3">
                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                        onClick={(e)=>onMinus(p.id)}
                                        >-</button>
                                        <span className="py-2 px-3 d-inline-block fw-bold" >{p?.count}</span>
                                        <button className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                        onClick={(e)=>onAdd(p.id)}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className="text-primary border-0 bg-transparent fw-light"
                                    onClick={(e)=>onDelete(p.id)}
                                >
                                    <span><i className="fa-solid fa-trash-can"></i></span>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList