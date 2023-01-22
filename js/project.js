
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bda1317ca1mshbd0366a7f236949p1c8021jsne81384f8d8e1',
// 		'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
// 	}
// };

// fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=kishor%20kumar', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

debugger
const form = document.getElementById('myForm');


const handelform = (e) => {

  e.preventDefault()

  const music = document.forms['myForm']['music'].value

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bda1317ca1mshbd0366a7f236949p1c8021jsne81384f8d8e1',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
  };

  fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${music}`, options)
    .then(response => response.json())
    .then(response => {

      response.result.songs.map((cval) => {

        document.getElementById('result1').innerHTML += `
              
          
          <div class="col-md-4 text-center">
          
          
          <div class="card bg-dark text-white" style="width: 18rem;">
  <img src="${cval.thumbnail}" >
  <div class="card-body">
    <h5 class="card-title"> Song Name :- ${cval.title}</h5>
    <h5> Album Id :- ${cval.id}</h5>
    <p class="card-text">Singer Name:- ${cval.name}</p>
    
  </div>
</div>
          
          
          
          
          </div>
          
          `

      })


    })
    .catch(err => console.error(err));




}






form.addEventListener('submit', handelform)




/* <h1>${cval.name}</h1> */
