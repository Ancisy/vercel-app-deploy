import React from 'react'

function BillInformation(props) {
    const {price,vat,total} = props;
    
    return (
        <div className="bill">
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Tạm tính:</span>
                <span className="text-primary" id="sub-total-money">{price}</span>
            </div>
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">VAT (10%):</span>
                <span className="text-primary" id="vat-money">{vat}</span>
            </div>
            <div className="border mb-2 p-3 fs-5 fw-normal d-flex justify-content-between align-items-center">
                <span className="text-black-50">Thành tiền:</span>
                <span className="text-primary" id="total-money">{total}</span>
            </div>
        </div>
    )
}

export default BillInformation