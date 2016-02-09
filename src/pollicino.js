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
      dataType : 'json'
    };
  
  }



  /*
    Makes a post to our url to confirm client.
    should get a token to be used to next requests
  */
  async init() {
    console.log("init", self.baseUrl);
    this.token = "123";
    const authEndpoint = this.baseUrl.setPath("api/auth-client/");
    console.log("111", authEndpoint.toString());
    let data = await qwest.post(authEndpoint.toString(), {
        app_id : this.appId,
        client_secret : this.clientSecret
      },
      this.requestOptions
    );
    this.token = data.token;
    this.requestOptions.headers.Authentication = 'Token ' + this.token;

  }

  registerDevice() {


  }

  /*

  */
  notifyInstallation(deviceId, platform, appVersion=null){

  }

}



export { Pollicino }  ;