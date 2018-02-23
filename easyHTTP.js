function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

EasyHTTP.prototype.get = function (url, callBack) {
  this.http.open("GET", url, true);

  let that = this.http;
  this.http.onload = function () {
    if (that.status === 200) {
      callBack(null, that.responseText);
    } else {
      callBack("Error: " + that.status);
    }
  }

  this.http.send();
}