import React from 'react'
import './miembros.css';
import kev from '../../assets/kev.jpg';
import fran from '../../assets/fran.jpg';
import gonza from '../../assets/gonza.jpg';
import edu from '../../assets/edu.jpg';


export default function Miembros() {
    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div class="col-sm-6">
                    <div className="card" >
                        <img src={gonza} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Gonzalo</h5>
                            <p className="card-text">ma niga</p>
                            <a href="#" className="btn btn-primary">Go to the hell</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="card" >
                        <img src={kev} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Kevin</h5>
                            <p className="card-text">Graso's bitch</p>
                            <a href="#" className="btn btn-primary">Go to "maldito perro del infierno"</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="card" >
                        <img src={fran} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Franco</h5>
                            <p className="card-text">Bald</p>
                            <a href="#" className="btn btn-primary">Go Tio Nacho</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="card" >
                        <img src={edu} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Eduardo</h5>
                            <p className="card-text">Death</p>
                            <a href="#" className="btn btn-primary">KILL</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
