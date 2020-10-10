import React, { Component } from 'react';
import styled from 'styled-components';
import {Styled}from './App.js';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message: '',
            username: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <Styled color="white"><h1>이벤트 연습</h1></Styled>
                <input type="text" name="username" placeholder="당신의 이름" value={this.state.username} onChange={this.handleChange}></input>
                <input type="text" name="message" placeholder="암거나 입력" value={this.state.message} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;