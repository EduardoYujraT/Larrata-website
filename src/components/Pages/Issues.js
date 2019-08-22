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
                <div class="row justify-content-center">
                    <iframe src="https://open.spotify.com/embed/playlist/7CiLbPwnGSBAwrl4x002ue" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                {/* <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    
                </ul> */}
            </div>
        )
    }
    
}

export default Issues;