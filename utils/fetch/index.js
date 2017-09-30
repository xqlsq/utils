window.onload = function(){
    document.addEventListener('click', function(){
        fetch('http://localhost:3000/put',{
      method: 'PUT',
	  headers:{
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'X-Request-With': null
        'X-Request-With': 'XHR'
      },
      body:'topic_id=54d2de4cfbf1e531447acc95&accesstoken=4f215614-a0e2-42bd-b015-656d3eca19dd'
    })
    .then(function(res) {
        return res.json()
    }).then(data=>console.log(data))
    })
}