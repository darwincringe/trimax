<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky ">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="Logo" width="50">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Watch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Play</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Read</a>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  