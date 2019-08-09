import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

import santy from '../assets/santy.jpg';
import noti from '../assets/noti.jpg';
/*
import alba from '../assets/alba';
import kev from '../assets/kev';
import gab from '../assets/gab';
import gonza from '../assets/gonza';
import fran from '../assets/fran';
import gian from '../assets/gian';
import judio from '../assets/judio';
import july from '../assets/july';
import ferrer from '../assets/f';
import lucas from '../assets/lucas';
import dani from '../assets/dani';
import edu from '../assets/edu';
import raba from '../assets/raba';
import nico from '../assets/nico';*/

export default function Miembros() {
    return (
        <CardDeck className="miembros">
            <Card>
                <Card.Img variant="top" src={santy}></Card.Img>
                <Card.Body>
                    <Card.Title>Administrador</Card.Title>
                    <Card.Text>
                        Santiago Vera
                    </Card.Text>
                    <Button variant="primary">Datos</Button>
                </Card.Body>
            </Card>

            <Card >
                <Card.Img variant="top" src={noti}></Card.Img>
                <Card.Body>
                    <Card.Title>Administrador</Card.Title>
                    <Card.Text>
                        Matias Notario
                    </Card.Text>
                    <Button variant="primary">Datos</Button>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}
