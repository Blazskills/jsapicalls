// const postList = document.querySelector('.posts-list');
// const addPostForm = document.querySelector('.add-post-form');
// const searchValue = document.getElementById('search');
// const btnsubmit = document.querySelector('.btnsub')

// let output = '';
// const url = 'https://reqres.in/api/users';
// const url1 = 'https://nispp.herokuapp.com/contact';



// fetch(`${url}/${2}`)
//   .then(data => { return data.json() })
//   .then(res => { console.log(res) })
//   .catch(error => console.log(error))



// document.getElementById('add-post-form2').addEventListener('submit', function (e) {
//   e.preventDefault();
//   if (searchValue.value === "") {
//     console.log('empty search')
//   }
//   else {
//     let ids = searchValue.value
//     fetch(`${url}/${ids}`)
//       .then(res => {
//         if (res.ok) {
//           console.log('SUCCESS')
//         } else {
//           console.log('NOT SUCCESSFUL')
//         }
//         res.json()
//       })

//       .then(res => res.json())
//       .then(data => {
//           data.forEach(post => {
//               output += `
//               <div class="col-sm-6 col-md-6">
//               <div class="card">
//                 <div class="card-body" data-id=${post.id}>
//                   <h5 class="card-title">${post.companyname}</h5>
//                   <p class="card-text">${post.today}</p>
//                   <p class="fname-card">${post.fname}</p>
//                   <p class="lname-card">${post.lname}</p>
//                   <p class="card-text">${post.devid}</p>
//                   <p class="card-text">${post.email}</p>

//                   <a href="#" class="btn btn-primary" id="edit-post">Edit</a>
//                   <a href="#" class="btn btn-primary" id="delete-post">Delete</a>
//                 </div>
//               </div>
//             </div>
//               `;
//           });
//           console.log(data)
//           postList.innerHTML = output;
//       })
//       .catch(error => console.log('ERROR'))

//     console.log(`${ids} seen`)

//   }
//   searchValue.value = ''
// });

















//Get -  Read the posts
//Method : Get

// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(post => {
//       output += `
//             <div class="col-sm-6 col-md-6 mb-3">
//             <div class="card">
//               <div class="card-body" data-id=${post.id}>
//                 <h5 class="card-title">${post.companyname}</h5>
//                 <p class="card-text">${post.today}</p>
//                 <p class="fname-card">${post.fname}</p>
//                 <p class="lname-card">${post.lname}</p>
//                 <p class="card-text">${post.devid}</p>
//                 <p class="card-text">${post.email}</p>

//                 <a href="#" class="btn btn-primary" id="edit-post">Edit</a>
//                 <a href="#" class="btn btn-primary" id="delete-post">Delete</a>
//               </div>
//             </div>
//           </div>
//             `;
//     });
//     console.log(data)
//     postList.innerHTML = output;
//   })







let url = 'https://reqres.in/api/users/';

const url1 = 'https://nispp.herokuapp.com/contact/';

$(document).ready(function () {
  $("#add-post-form2").submit(function (event) {
    event.preventDefault()

    let searchvalue = $("#search").val()

    const searchValue = document.getElementById('search');

    if (searchValue.value === "") {
      console.log('empty search')
    }

    // var header=btoa(searchvalue)

    fetch(`${url1}${searchvalue}`)
      .then(function (data) {
        return data.json()
      })
      .then(function (data) {
        console.log(data)

        $("#search").val("")



        if (data.Message == "Id not Found") {
          alert("Wrong id input")
        }

        else {
          data.forEach(datapush => {
            // console.log("Right input")
            var output = `<div class="card mb-5"  style="width: 18rem;">
            <img class="card-img-top" src="https://theplantain.sfo2.digitaloceanspaces.com/wp-content/uploads/sites/2/2018/11/46d6841643f705c809553633544ed160-750x350.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${datapush.companyname}</h5>
              <p class="card-text">${datapush.email}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`


            $("#outputpost").html(output)
            // console.log(`${datapush.email}`)
          })

        }



      })
  })
})






const postList = document.querySelector('.posts-list');
let output = '';
const urlnew = 'http://nispp.herokuapp.com/contact';
let urlnew2 = 'https://reqres.in/api/users/';

fetch(urlnew)
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      document.querySelector('#spinner').setAttribute('hidden', '')
      output += `
            <div class="card mb-5 mr-4"  style="width: 18rem;">
            <img class="card-img-top" src="https://theplantain.sfo2.digitaloceanspaces.com/wp-content/uploads/sites/2/2018/11/46d6841643f705c809553633544ed160-750x350.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${post.companyname}</h5>
              <p class="card-text">${post.email}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            `;
    });
    console.log(data)
    postList.innerHTML = output;
  })










