import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import { Link } from "react-router-dom"


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: [],
        }
    }

    componentDidMount() {
        axios.get('/api/people').then(response => {
            this.setState({
                characters: (response.data).results
            })
        })
    }

    render() {
        const { characters } = this.state

        return (
            <table className="table">
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    characters.map((row, index) => 
                    {
                        let url = row.url;
                        let URLArray = url.split('/');
                        let peopleId = URLArray[URLArray.length - 2];

                        return <tr key={index}>
                            <td>{row.name}</td>
                            <td>
                                <Link to={`/item/${peopleId}`} className="btn btn-primary">detail</Link>
                            </td>
                        </tr>;
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default List
