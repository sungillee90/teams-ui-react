import React, { useEffect, useState } from 'react';

export default class TeamsPage extends React.Component {
    // const [sid, setSid] = useState("");
    // const [teamId, setTeamId] = useState("");
    constructor(props) {
        super(props);
        this.state = {value: ''};
        // this.state = {
        //     sid: '', teamId: ''
        // };
        this.handleChangeSid = this.handleChangeSid.bind(this);
        this.handleSidSubmit = this.handleSidSubmit.bind(this);
        this.handleChangeTeamId = this.handleChangeTeamId.bind(this);
        this.handleTeamIdSubmit = this.handleTeamIdSubmit.bind(this);
    }

    handleChangeSid(event) {
        this.setState({value: event.target.value});
    }

    handleSidSubmit(event) {
        alert('A sid was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChangeTeamId(event) {
        this.setState({value: event.target.value});
    }

    handleTeamIdSubmit(event) {
        alert('A teamId was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSidSubmit}>
                    <label>
                        Search by SID:
                        <input type="text" value={this.setSid} onChange={this.handleChangeSid} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <form onSubmit={this.handleTeamIdSubmit}>
                    <label>
                        Search by Teams ID:
                        <input type="text" value={this.setTeamId} onChange={this.handleChangeTeamId} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        );
    }
}
