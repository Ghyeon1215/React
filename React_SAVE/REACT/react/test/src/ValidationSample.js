import React, { Component } from 'react';
import styled from 'styled-components';

class ValidationSample extends Component {

    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <Background>
                <input ref={(ref) => this.input=ref} type="password" value={this.state.password} onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}>
                </input>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </Background>
        );
    }
}

const Background = styled.div`
.success {
    background-color: lightgreen;
}
.failure {
    background-color: lightcoral;
}`

export default ValidationSample;