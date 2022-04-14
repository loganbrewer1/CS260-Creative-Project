<template>
<body>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="/css/styles.css" />
  <title>Home Match Utah</title>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- <a class="navbar-brand" href="#">
      <img src="images/CaromellowShots-black-low-res.PNG" alt="..." height="50">
    </a> -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/"><a class="nav-item nav-link">Home <span class="sr-only"></span></a> </router-link> 
        <router-link to="/about"><a class="nav-item nav-link">About</a> </router-link>
        <router-link to="/reviews"> <a class="nav-item nav-link">Reviews</a> </router-link> 
        <router-link to="/contact"> <a class="nav-item nav-link">Contact</a> </router-link>
      </div>  
    </div>
  </nav>

  <router-view></router-view>

  <footer class="text-center text-black" style="background-color: #f1f1f1;">
    <div class="container pt-4">
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-home"></i> Home Match Utah
              </h6>
              <p>
                Monday - Saturday <br> 10 AM - 6 PM 
              </p>
            </div>
  
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-envelope me-3"></i> Contact
              </h6>
              <p>
                jimmydoors2@gmail.com
              </p>
              <p>
                (801) 472-7088
              </p>
            </div>
          </div>  
        </div>
      </section>
  
      <section class="mb-4 border-top" >
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          role="button"
          href="https://www.facebook.com/jamescarrie.puertas"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-facebook-f"></i>
        </a>
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://www.instagram.com/cdoors11/"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-instagram"></i
        ></a>
        <a
          class="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://github.com/loganbrewer1/Creative-Project"
          role="button"
          data-mdb-ripple-color="dark"
          ><i class="fab fa-github"></i>
        </a>
      </section>
    </div>
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      2022 &#169; Logan Brewer
    </div>
  </footer>
</body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

div {
    display: block;
}

.masonry { /* Masonry container */
    column-count: 3;
    column-gap: 3em;
}
  
.item { /* Masonry bricks or child elements */
    background-color: white;
    display: inline-block;
    margin: 0 0 3em;
    width: 100%;
}

.results {
    display: grid;
    justify-content: center;
    margin-top: 60px;
    gap: 30px 58px;
    padding-left: 45px;
    font-size: larger;
}

.houseImage {
    padding-left: 26px;
    padding-right: 26px;
}
</style>
