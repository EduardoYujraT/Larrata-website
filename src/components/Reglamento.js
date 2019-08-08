import React from 'react'
import Container from 'react-bootstrap/Container'

class Reglamento extends React.Component{

    constructor(){
        super();
        this.state={
            items: []
        };
    }

    componentDidMount(){
        fetch("https://api.github.com/repos/matiasalbacetti/LarrataFiles/contents/Reglamento.md")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: decodeURIComponent(escape(window.atob(result.content)))

                });
            }
            
        )
    }

    render(){
        const{items} = this.state;
        return(
            <Container>
                <br></br>
                <div className="body" dangerouslySetInnerHTML={{__html: items}}></div>    
            </Container>
            
        )
    }
}

export default Reglamento;