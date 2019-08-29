import React from 'react'


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
            <div className="container">
                <br></br>
                {console.log(items)}
                <div className="body" dangerouslySetInnerHTML={{__html: items}}></div>    
            </div>
                
            
            
        )
    }
}

export default Reglamento;