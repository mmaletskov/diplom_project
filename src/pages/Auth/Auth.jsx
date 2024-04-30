import React from 'react'
import FormAuth from '../../components/FormAuth/FormAuth'
import './Auth.css'

export default function Auth() {
  return (
    <div>
         <section className="auth">
            <div className="container">
                <div className="auth__inner">
                    <img src="/public/Form/form-image.png" alt="" />
                    <div className="auth__inner-form">
                    <FormAuth/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
