import React, { useEffect, useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [displayName, setDisplayName] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        toast.success("Успешная авторизация", {
          position: "top-center",
        })
        setEmail(user.email);
        setDisplayName(user.displayName);
        setImage(user.photoURL);
      }
      else{
        navigate("/auth");
      }
    })

    return unsubscribe;
  }, []);

  
  const handleClick = () => {
    signOut(auth).then(val=>{
        navigate("/auth");
    })
}
  
  return (
    <div id="page-wrap">
      <ToastContainer/>
      <section className="profile">
        <div className="container">
            <div className="profile__inner">

              <div className="profile__inner-header">
                <img className="avatar__image" src={image} alt="" />
                <div className="header__bio">
                  <p className="header__name">{displayName}</p>
                  <p className="header__email">{email}</p>
                  <button><img className="header__edit" src="/public/Profile/edit.svg" alt=""/></button>
                </div>
              </div>

              <div className="profile__inner-details">
                <h3 className="details__title">Мои заказы</h3>
                <div className="details__nav">
                  <a href="" className="nav__item">В доставке</a>
                  <a href="" className="nav__item">Получены</a>
                  <a href="" className="nav__item">Возвращены</a>
                </div>
                <div className="details__body">

                  <div className="body__item">
                    <p className="item__name">Костюм</p>
                    <p className="item__price">1х24 999</p>
                  </div>

                  <div className="body__item">
                    <p className="item__name">Костюм</p>
                    <p className="item__price">1х24 999</p>
                  </div>
                  
                  <div className="body__item">
                    <p className="item__name">Костюм</p>
                    <p className="item__price">1х24 999</p>
                  </div>

                </div>
              </div>

              <div className="profile__inner-desc">
                <div className="desc__summ">
                  <h3 className="summ__title">Общая сумма выкупа</h3>
                  <h3 className="summ__body">74 997</h3>
                </div>
                <button onClick={handleClick} className="desc__exit">Выйти из аккаунта</button>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}
