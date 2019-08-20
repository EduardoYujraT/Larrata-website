import React from 'react'
import './miembros.css';
import kev from '/home/eduardo/Documentos/git/Larrata-website/src/assets/kev.jpg';
import fran from '/home/eduardo/Documentos/git/Larrata-website/src/assets/fran.jpg';
import gonza from '/home/eduardo/Documentos/git/Larrata-website/src/assets/gonza.jpg';
import edu from '/home/eduardo/Documentos/git/Larrata-website/src/assets/edu.jpg';

export default function Miembros() {
    return (
        <div className="container">
            <br></br>
            <div className="row">
                <div class="col-sm-6">
                    <div className="card" >
                        <img src={gonza} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="card" >
                        <img src={kev} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="card" >
                        <img src={fran} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div className="card" >
                        <img src={edu} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
