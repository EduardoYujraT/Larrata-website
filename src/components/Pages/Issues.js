import React from 'react'

class Issues extends React.Component {

    constructor(){
        super();
        this.state={
            items: {}
        };
    }

    componentDidMount(){
        fetch("https://api.github.com/repos/matiasalbacetti/LarrataFiles/issues")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result
                })
                
            }
        )

    }


    render(){
        const{items} = this.state;
        console.log(items);
        return (
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    
                </ul>
            </div>
        )
    }
    
}

export default Issues;