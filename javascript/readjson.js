var request = new XMLHttpRequest();

// Get JSON Data
request.open('GET', 'scp.json', true);

request.onload = function (){
  const rootDiv = document.getElementById('root');

  //Parse JSON Data
  var data = JSON.parse(this.response);

  //Display JSON Data
  if(request.status >= 200 && request.status < 400){
    data.forEach(element => {
      const 
    }); 
  }
};