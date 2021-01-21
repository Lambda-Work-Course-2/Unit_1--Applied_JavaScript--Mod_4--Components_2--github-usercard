import axios from 'axios'; // you have to import it to use it

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
	 <img src={image url of user} />
	 <div class="card-info">
	   <h3 class="name">{users name}</h3>
	   <p class="username">{users user name}</p>
	   <p>Location: {users location}</p>
	   <p>Profile:
		<a href={address to users github page}>{address to users github page}</a>
	   </p>
	   <p>Followers: {users followers count}</p>
	   <p>Following: {users following count}</p>
	   <p>Bio: {users bio}</p>
	 </div>
    </div>
*/

function cardMaker(obj){
//create dom elements
     const mainCardDiv = document.createElement('div'); //<div class="card"> 
     const cardImg = document.createElement('img'); //<img src={image url of user} />
     const infoDiv = document.createElement('div'); //<div class="card-info">
     const cardH3 = document.createElement('h3'); //<h3 class="name">{users name}</h3>
     const cardNamePara = document.createElement('p'); //<p class="username">{users user name}</p>
     const cardLocationPara = document.createElement('p'); //<p>Location: {users location}</p>
     const cardProfilePara = document.createElement('p'); //<p>Profile:
     const cardLink = document.createElement('a'); //<a href={address to users github page}>{address to users github page}</a>
     const cardFollowersPara = document.createElement('p'); //<p>Followers: {users followers count}</p>
     const cardFollowingPara = document.createElement('p'); //<p>Following: {users following count}</p>
     const cardBioPara = document.createElement('p'); //<p>Bio: {users bio}</p>
//add style (all the things need to be cute)
     mainCardDiv.classList.add('card');
     infoDiv.classList.add('card-info');
     cardH3.classList.add('name');
     cardNamePara.classList.add('username')
//add text / data
     cardImg.src =obj.avatar_url;
     cardH3.textContent = obj.login;
     cardLocationPara.textContent = `Location: ${obj.location}`;
     cardProfilePara.textContent = 'Profile:';
     cardLink.href = obj.html_url;
     cardLink.textContent = obj.html_url;
     cardFollowersPara.textContent = `Followers: ${obj.followers}`;
     cardFollowingPara.textContent = `Following: ${obj.following}`;
     cardBioPara.textContent = `Bio: ${obj.bio}`;
//reunited and it feels so good (also known as giving things a parent so we can put them nicely on the dom)
     mainCardDiv.appendChild(cardImg);
     mainCardDiv.appendChild(infoDiv);
     infoDiv.appendChild(cardH3);
     infoDiv.appendChild(cardNamePara);
     infoDiv.appendChild(cardLocationPara);
     infoDiv.appendChild(cardProfilePara);
     cardProfilePara.appendChild(cardLink);
     infoDiv.appendChild(cardFollowersPara);
     infoDiv.appendChild(cardBioPara);
//returning main div
     return(mainCardDiv);

}
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/imcatherinenoel')
.then(returnedData => { //then give the returned data a name so we can do things with it. 
console.log('file: index.js ~  returnedData', returnedData)	//console log so to see what is returned
document.querySelector('.cards').append(cardMaker(returnedData.data));

})
.catch(error =>{
console.log('file: index.js ~ error', error);
})

.finally(()=>{
console.log("Done")     
});






/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const arr = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

arr.forEach(person => {
console.log('file: index.js ~ line 102 ~ person', person);
     
axios.get(`https://api.github.com/users/${person}`)
.then(returnedData => { //then give the returned data a name so we can do things with it. 
     
document.querySelector('.cards').append(cardMaker(returnedData.data));

})
.catch(error =>{
console.log('file: index.js ~ error', error);
})

.finally(()=>{
console.log("Done")     
});
});

