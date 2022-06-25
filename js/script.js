$(document).ready(function() {
  // Get Movie Function When Open Page
  async function getMovies() {
    let response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=76780030766e96951b66f7598e7a0ef4");
    let finalResponsex = await response.json();
    let finalResponseLength = await finalResponsex.results.length;

    let temp = "";
    for(let i = 0; i < finalResponseLength; i++) {
      let finalResponse = await finalResponsex.results[i];
      let rate = await finalResponse.vote_average;
      let title = await finalResponse.title;
      let date = await finalResponse.release_date;
      let overview = await finalResponse.overview;
      let img = await `https://image.tmdb.org/t/p/w500/${finalResponse.poster_path}`;


      temp+= `
      <div class="col-md-4 col-sm-6 col-lg-3">
        <div class="movie my-2 rounded">
          <div class="inner-movie">
            <img src="${img}" class="img-fluid rounded" />
            <div class="layer-movie p-1">
              <div class="info">
                <h2 class="movie-title">${title}</h2>
                <p class="movie-details">${overview}</p>
                <p class="rate">${rate}</p>
                <p class="data">${date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    }
    document.querySelector(".container-Movies").innerHTML = temp;
  }
  // Call Get Movie Function
  getMovies();

  // Get NowPlaying or popular or top-rated or trending or Upcoming 
  async function getPopular(name) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${name}?api_key=76780030766e96951b66f7598e7a0ef4`);
    let finalResponsex = await response.json();
    let finalResponseLength = await finalResponsex.results.length;

    let temp = "";
    for(let i = 0; i < finalResponseLength; i++) {
      let finalResponse = await finalResponsex.results[i];
      let rate = await finalResponse.vote_average;
      let title = await finalResponse.title;
      let date = await finalResponse.release_date;
      let overview = await finalResponse.overview;
      let img = await `https://image.tmdb.org/t/p/w500/${finalResponse.poster_path}`;


      temp+= `
      <div class="col-md-4 col-sm-6 col-lg-3">
        <div class="movie my-2 rounded">
          <div class="inner-movie">
            <img src="${img}" class="img-fluid rounded" />
            <div class="layer-movie p-1">
              <div class="info">
                <h2 class="movie-title">${title}</h2>
                <p class="movie-details">${overview}</p>
                <p class="rate">${rate}</p>
                <p class="data">${date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    }
    document.querySelector(".container-Movies").innerHTML = temp;
  }
  // Make User Select Argment To Display Movies By This Argmunt  
  $(".side-a a").click(function() {
    if(this.id) {
      getPopular(this.id);
    }
    if(this.className == "trending") {
      getMovies();
    }
  })

  // Toggle Side-bar icon when clicked 
  $(".toggle-icon").click(function() {
    $(".toggle-icon i").toggleClass("fa-xmark");
    $(".toggle-icon i").toggleClass("fa-bars");
    $(".side-nav-open").toggleClass("active");
    $(".side-nav").toggleClass("active");

    $(".side-a a").slideDown(700);
  });

  // Search Function
  async function getSearch(name) {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=76780030766e96951b66f7598e7a0ef4&language=en-US&query=${name}&page=1&include_adult=false`);
    let finalResponsex = await response.json();
    let finalResponseLength = await finalResponsex.results.length;

    let temp = "";
    for(let i = 0; i < finalResponseLength; i++) {
      let finalResponse = await finalResponsex.results[i];
      let rate = await finalResponse.vote_average;
      let title = await finalResponse.title;
      let date = await finalResponse.release_date;
      let overview = await finalResponse.overview;
      let img = await `https://image.tmdb.org/t/p/w500/${finalResponse.poster_path}`;


      temp+= `
      <div class="col-md-4 col-sm-6 col-lg-3">
        <div class="movie my-2 rounded">
          <div class="inner-movie">
            <img src="${img}" class="img-fluid rounded" />
            <div class="layer-movie p-1">
              <div class="info">
                <h2 class="movie-title">${title}</h2>
                <p class="movie-details">${overview}</p>
                <p class="rate">${rate}</p>
                <p class="data">${date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    }
    document.querySelector(".container-Movies").innerHTML = temp;
  }
  $(".search-box input").keyup(function(e) {
    let value = $(".search-box input").val();
    if(value) {
      getSearch(value);
    } else {
      getMovies();
    }
  })

  // Validation Name
  let testValidName = false;
  validationName = $(".name input").keyup(function() {
    let regex = /^[a-zA-Z]{3,12}$/;
    let value = $(".name input").val();
    if(regex.test(value)) {
      $(".name input:focus").css({"border-bottom": "1px solid #198754"});
      $(".name .fa-circle-check").css({"display": "block"});
      $(".name .fa-circle-xmark").css({"display": "none"});
      testValidName = true;
    } else {
      $(".name input:focus").css({"border-bottom": "1px solid #dc3545"});
      $(".name .fa-circle-check").css({"display": "none"});
      $(".name .fa-circle-xmark").css({"display": "block"});
      testValidName = false;
    }
    console.log(testValidName);
  });

  // Validation Email
  let testValidEmail = false;
  validationEmail = $(".email input").keyup(function() {
    let regex = /^\w+\.?\w+@[a-z A-Z]+\.[a-z A-Z]{2,3}$/;
    let value = $(".email input").val();
    if(regex.test(value)) {
      $(".email input:focus").css({"border-bottom": "1px solid #198754"});
      $(".email .fa-circle-check").css({"display": "block"});
      $(".email .fa-circle-xmark").css({"display": "none"});
      testValidEmail = true;
    } else {
      $(".email input:focus").css({"border-bottom": "1px solid #dc3545"});
      $(".email .fa-circle-check").css({"display": "none"});
      $(".email .fa-circle-xmark").css({"display": "block"});
      testValidEmail = false;
    }
    console.log(testValidEmail);
  });

  // Validation Age
  let testValidAge = false;
  validationAge = $(".age input").keyup(function() {
    let regex = /^[1-9][0-9]$/;
    let value = $(".age input").val();
    if(regex.test(value)) {
      $(".age input:focus").css({"border-bottom": "1px solid #198754"});
      $(".age .fa-circle-check").css({"display": "block"});
      $(".age .fa-circle-xmark").css({"display": "none"});
      testValidAge = true;
    } else {
      $(".age input:focus").css({"border-bottom": "1px solid #dc3545"});
      $(".age .fa-circle-check").css({"display": "none"});
      $(".age .fa-circle-xmark").css({"display": "block"});
      testValidAge = false;
    }
    console.log(testValidAge);
  });

  // Validation Password
  let testValidPassword = false;
  validationPassword = $(".password input").keyup(function() {
    let regex = /^.{8,20}$/;
    let value = $(".password input").val();
    if(regex.test(value)) {
      $(".password input:focus").css({"border-bottom": "1px solid #198754"});
      $(".password .fa-circle-check").css({"display": "block"});
      $(".password .fa-circle-xmark").css({"display": "none"});
      testValidPassword = true;
    } else {
      $(".password input:focus").css({"border-bottom": "1px solid #dc3545"});
      $(".password .fa-circle-check").css({"display": "none"});
      $(".password .fa-circle-xmark").css({"display": "block"});
      testValidPassword = false;
    }
    console.log(testValidPassword);
  });

    // Submit Button
  $(".submit").click(function() {
    if(testValidName && testValidEmail && testValidAge && testValidPassword) {
      alert(`Sucsses Validation`);
    }
  })
})