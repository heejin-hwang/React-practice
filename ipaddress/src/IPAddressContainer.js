import React, { Component } from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
        // componentDidMount 가 호출되면 HTTP  요청이 만들어져 ipinfo.io라는 웹 서비스에 전송된다.
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json?token=6e299102c88a22", true);
        xhr.send();
        // ipinfo 서비스의 응답이 왔다면 processRequest 함수를 호출해 결과를 처리한다.
        xhr.addEventListener("readystatechange", this.processRequest, false);

    }

    processRequest() {
        console.log('status: ' + xhr.status);
        if(xhr.readyState === 4 && xhr.status === 200) {

            var response = JSON.parse(xhr.responseText);
            console.log(response);
            this.setState({
                ip_address: response.ip
            });


        }
    }

    render() {
        return (
            // <div>{ this.state.ip_address }</div>
            <IPAddress ip={this.state.ip_address} />
        );
    }
}

export default IPAddressContainer;