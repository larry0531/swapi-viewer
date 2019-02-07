import axios from 'axios'
import React, { Component } from 'react'

import { Link } from "react-router-dom"


class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: {},
        }
    }

    componentDidMount() {
        let { peopleId } = this.props.match.params;

        axios.get(`/api/people/${peopleId}`).then(response => {
            this.setState({
                people: (response.data),
            })
        })
    }

    render() {
        const { people } = this.state

        return (
            <table className="table">
                 <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>hair Color</th>
                        <th>Birth Year</th>
                        <th>Eye Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    <tr>
                        <td>{people.name}</td>
                        <td>{people.height}</td>
                        <td>{people.hair_color}</td>
                        <td>{people.birth_year}</td>
                        <td>{people.eye_color}</td>
                        <td>
                            <Link to="/">back</Link>
                        </td>
                    </tr>
                }
                </tbody>
            </table>
        )
    }
}

export default Item
