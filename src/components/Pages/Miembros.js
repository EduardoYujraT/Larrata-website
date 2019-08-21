import React from 'react'
import './miembros.css';

import noti from '../../assets/noti.jpg';
import santy from '../../assets/santy.jpg';
import alba from '../../assets/alba.jpg';
import kev from '../../assets/kev.jpg';
import gab from '../../assets/gab.jpg';
import gonza from '../../assets/gonza.jpg';
import fran from '../../assets/fran.jpg';
import gian from '../../assets/gian.jpg';
import judio from '../../assets/judio.jpg';
import july from '../../assets/july.jpg';
import ferrer from '../../assets/f.jpg';
import lucas from '../../assets/lucas.jpg';
import dani from '../../assets/dani.jpg';
import edu from '../../assets/edu.jpg';
import raba from '../../assets/raba.jpg';
import nico from '../../assets/nico.jpg';


export default function Miembros() {
    return (
        <div className="container">
            
        <br></br>
        
        <div className="row justify-content-center align-self-center">
            <div className="col-12 col-md-3 col-sm-6 area" align="center"> 
                <div className="card text-center h-100 ">
                    <img src={noti} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Notario, Matias Nicolás</h5>
                        <p className="card-text">Administrador</p>
                        <a href="#" className="btn btn-primary">Info</a>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6 area" align="center">
                <div className="card text-center h-100">
                    <img src={santy} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Vera, Santiago Raúl</h5>
                        <p className="card-text">Administrador</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6 area" align="center">
                <div className="card text-center h-100">
                    <img src={alba} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Albacetii Mandrillo, Matías Nicolás</h5>
                        <p className="card-text">Consultor</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6 area" align="center">
                <div className="card text-center h-100">
                    <img src={kev} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">García Gómez, Kevin</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
        </div>
        
        <br></br>

        <div className="row justify-content-center align-self-center">
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={gab} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Gatica, Gabriel</h5>
                        <p className="card-text">Comisario</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={gonza} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Méndez, Gonzalo Manuel</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={fran} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Méndez, Franco Martín</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={gian} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Scapusio, Gianfranco</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
        </div>
            
        <br></br>

        <div className="row justify-content-center align-self-center">
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={judio} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Simunovich, Lucas Martin</h5>
                        <p className="card-text">Agente judio</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={july} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Corsi, Julián</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={ferrer} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Ferrero Vilas, Matias Gabriel</h5>
                        <p className="card-text">Agente, ex-Administrador</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={lucas} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Addesi, Lucas Nahuel</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
        </div>
            
        <br></br>

        <div className="row justify-content-center align-self-center">
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={dani} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Cuomo, Daniel Hernán</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={edu} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Yujra Tambo, Eduardo Braian</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={nico} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Ramis, Nicolás Martin</h5>
                        <p className="card-text">Agente</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-6" align="center">
                <div className="card text-center h-100">
                    <img src={raba} className="card-img-top" alt="..."></img>
                    <div className="card-block">
                        <h5 className="card-title">Rabahia, Sergio Mathias</h5>
                        <p className="card-text">Agente ex-Administrador</p>
                        <a href="#" className="btn btn-primary">Info</a>
                    </div>
                </div>
            </div>
        </div>
          
        <br></br>
        
        
    </div>
    )
}
