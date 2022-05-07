import React, { Component } from 'react';

class addFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: ""
        }
    }

    addFilmaddFilm = () => {
        const { addFilmaddFilm } = this.props;
        addFilmaddFilm(this.state);
    }

    onChange = (event) => {
        var value = event.target.value;
        var name = event.target.id;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" id="name" placeholder="Write name... " onChange={this.onChange} />
                    <input type="text" id="lastname" placeholder="Write lastname... " onChange={this.onChange} />
                    <button onClick={this.addFilmaddFilm}>Add</button>
                </div>
            </div>
        )
    }
}

export default addFilm;


