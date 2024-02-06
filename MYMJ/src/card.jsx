import React from "react";
import './App.css'

function Card(){

    return(

    <>
        <section className="card">
            <div className="card-conatiner">
                <img src='https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                <div className="card-content">
                    <h3>Lorem Ipsum is simply dummy </h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</p>
                    <div className="btn">
                        <button className="btn-read">Read more <i class="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <hr />
                    <div className="card-footer">
                        <div className="time"><i className="fa-regular fa-clock"></i>30 min ago</div>
                        <div className="mfa"><i class="fa-solid fa-truck-ramp-box"></i>MFA</div>
                        <div className="share"><i class="fa-regular fa-share-from-square"></i>share</div>
                    </div>
                </div>
            </div>
            <div className="card-conatiner">
                <img src='https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                <div className="card-content">
                    <h3>Lorem Ipsum is simply dummy </h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</p>
                    <div className="btn">
                        <button className="btn-read">Read more <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <hr />
                    <div className="card-footer">
                        <div className="time"><i className="fa-regular fa-clock"></i>30 min ago</div>
                        <div className="mfa"><i className="fa-solid fa-truck-ramp-box"></i>MFA</div>
                        <div className="share"><i className="fa-regular fa-share-from-square"></i>share</div>
                    </div>
                </div>
            </div>
            <div className="card-conatiner">
                <img src='https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                <div className="card-content">
                    <h3>Lorem Ipsum is simply dummy </h3>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</p>
                    <div className="btn">
                        <button className="btn-read">Read more <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <hr />
                    <div className="card-footer">
                        <div className="time"><i className="fa-regular fa-clock"></i>30 min ago</div>
                        <div className="mfa"><i className="fa-solid fa-truck-ramp-box"></i>MFA</div>
                        <div className="share"><i className="fa-regular fa-share-from-square"></i>share</div>
                    </div>
                </div>
            </div>
        </section>
    </>

    )
}

export default Card;