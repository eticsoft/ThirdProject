import axios from 'axios';


class apiClient {
    constructor(token, username, password, deviceId, api_end_url) {
        this.token = token;
        this.username = username;
        this.password = password;
        this.deviceId = deviceId;
        this.api_end_url = api_end_url;
        // 'https://emlakkatilim.com/pos/merchantapi/

    }

    // callTransactionList() {
    //     if (!this.token || (typeof this.token === 'undefined')) {
    //         return false;
    //     }
    //     this.response = this.callApi([], 'listtransactions');
    // }


    // callLogin(username, password) {
    //     this.username = username;
    //     this.password = password;
    //     let login_array = [
    //         'username' = this.username,
    //         'password' = this.password,
    //         'deviceid' = this.deviceId,
    //     ];
    //     this.response = this.callApi(login_array, 'getLoginToken');
    //     if (1 == 1) {
    //         this.token = this.response.data.token;
    //     }

    // }

    // callApi(params = [], uri) {
    //     axios.post(this.api_end_url + '?action=' + uri, {
    //         username: this.username,
    //         password: this.password,
    //         deviceid: this.deviceId
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    conSol(test){
        console.log(test)
    }
};

export default apiClient