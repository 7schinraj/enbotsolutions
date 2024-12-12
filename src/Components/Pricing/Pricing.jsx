import React from 'react'
import './Pricing.css';
import tag from "../../Assets/icon-info-grey.svg"
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaLessThan } from "react-icons/fa6";
function Pricing() {
  return (
    <>
    <h1 className='sec-headers extra-top-space'>Pricing</h1>
     <div className='pricing-main'>
      <div className='pricing-inner'>
        <div className='pricing-table'>
          <div className='pricing-row3'>
            {/* <h3>Downloaded Response per Month</h3> */}
          </div>
         <div className='pricing-column'>
         <div  className='pricing-row1'>
            <h2>Basics</h2>
            
          </div>
          <div  className='pricing-row1'>
            <h2>Standard</h2>
          
          </div>
          <div  className='pricing-row1'>
            <h2>Premimum</h2>
           
          </div>
         </div>
        </div>
        <div className='pricing-head'>
        <div className='pricing-table-row'>
           <div className='pricing-row2'>
           <h3 className='table-left-header'>Downloaded Response per Month</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <h5>&lt; 2TB</h5>
           </div>
           <div  className='pricing-row'>
           <h5>&lt; 3TB</h5>
           </div>
           <div className='pricing-row'>
           <h5>&lt; 5TB</h5>
          </div>
        </div>
        <div className='pricing-table-row'>
           <div className='pricing-row2'>
           <h3 className='pricing-values'>Pricing</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <h5>Per GB 10.75$</h5>
           </div>
           <div  className='pricing-row'>
           <h5>Per GB 9.75$</h5>
           </div>
           <div className='pricing-row'>
           <h5>Custom</h5>
          </div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3 className='pricing-values'>JavaScript rendering</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark className='tick-icon'/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3 className='pricing-values'>Rotating & Premium Proxies</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark className='tick-icon'/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3 className='pricing-values'>Geotargeting</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark className='tick-icon'/></div>
        </div>
        <div className='pricing-table-row'>
           <div className='pricing-row2'>
           <h3 className='pricing-values'>Priority Email Support</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <RxCross2 className='close-icon'/>
           </div>
           <div  className='pricing-row'>
           <IoMdCheckmark className='tick-icon'/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark className='tick-icon'/></div>
        </div>
        <div className='pricing-table-row'>
           <div  className='pricing-row2'>
           <h3 className='pricing-values'>Dedicated Manager</h3>
           {/* <img src={tag} alt="" /> */}
           </div>
           <div  className='pricing-row'>
           <RxCross2 className='close-icon'/>
           </div>
           <div  className='pricing-row'>
           <RxCross2 className='close-icon'/>
           </div>
           <div  className='pricing-row'> <IoMdCheckmark className='tick-icon'/></div>
        </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Pricing
