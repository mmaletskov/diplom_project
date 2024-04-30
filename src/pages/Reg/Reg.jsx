import React from 'react'
import FormReg from '../../components/FormReg/FormReg'
import './Reg.css'

export default function Reg() {
  return (
    <div id="page-wrap">
         <section className="reg">
            <div className="container">
                <div className="reg__inner">
                    <img src="/public/Form/form-image.png" alt="" />
                    <div className="reg__inner-form">
                    <FormReg/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
