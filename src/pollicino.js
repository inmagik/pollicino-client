import * as qwest from "qwest";
import { default as Uri } from "jsuri";


class Pollicino {

  constructor(baseUrl, appId, clientSecret) {
    this.baseUrl = new Uri(baseUrl);
    this.appId = appId;
    this.clientSecret = clientSecret;
    this.token = null;
    
    this.requestOptions = {
      headers : { 'Cache-Control' : ''},
      dataType : 'json',
      responseType : 'json'
    };
  
  }

  
  /*
    Makes a post to our url to confirm client.
    should get a token to be used to next requests
  */
  init() {
    this.token = "123";
    const authEndpoint = this.baseUrl.setPath("api/auth-client/");
    return qwest.post(
      authEndpoint.toString(),
      {
        app_id : this.appId,
        client_secret : this.clientSecret
      },
      this.requestOptions
    ).then((data) => {
      this.token = data.response.token;
    //this.requestOptions.headers.Authentication = 'Token ' + this.token;
      this.requestOptions.headers.Authorization = 'Token ' + this.token; 
      return data;
    });
  }

  registerDevice(deviceToken, platform, appVersion='') {
    console.log(3, this.requestOptions.headers)
    const authEndpoint = this.baseUrl.setPath("api/register-installation/");
    return qwest.post(authEndpoint.toString(), {
        app_version : appVersion,
        device_token : deviceToken,
        platform : platform
      },
      this.requestOptions
    );

  }

  /*

  */
  notifyInstallation(deviceId, platform, appVersion=null){

  }

}



export { Pollicino }  ;