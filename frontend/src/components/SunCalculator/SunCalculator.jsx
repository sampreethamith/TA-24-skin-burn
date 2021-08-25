import React from 'react'
import CalcCard from '../Common/CalcCard'

const SunCalculator = ({data}) => {
    return (
        <div>
            <h2 className="primary-text">{data.header}</h2>

            <h3 className="primary-text">{data.QueOne}</h3>
            <div className="data-information">
                <CalcCard />
            </div>

            <h3 className="primary-text">{data.QueTwo}</h3>
        </div>
    )
}

export default SunCalculator
