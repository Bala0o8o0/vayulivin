import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='1' />
                <SelectsImg bgImg={BoraBora2} text='2' />
                <SelectsImg bgImg={Maldives} text='3' />
                <SelectsImg bgImg={Maldives2} text='4' />
                <SelectsImg bgImg={Maldives3} text='5' />
               
                
                <SelectsImg bgImg={KeyWest} text='6' />
            </div>

        </div>
    )
}

export default Selects
