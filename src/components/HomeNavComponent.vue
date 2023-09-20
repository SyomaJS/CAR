<template>
  <div class="navbar_page">
    <div class="navbar_wrapper">
      <div class="nav_direction">
        <img src="../assets/BMW_logo.png" alt="" />

        <div class="models">
          <ul>
            <li><a href="#">M Power</a></li>
            <li><a href="#">X Series</a></li>
            <li><a href="#">I Series</a></li>
            <li><a href="#">I Alpina</a></li>
          </ul>
        </div>

        <ul>
          <li><router-link to="login">Login</router-link></li>
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" height="2" fill="none">
        <path d="M0 1H1253" stroke="#C9D6DF" />
      </svg>
    </div>
    <hr style="background: red" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.navbar_page {
  position: relative;
  width: 100% !important;
  height: 0;
  padding-top: 44%;
  background: url(../assets/i4\_1.jpg), lightgray 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-size: 100%;

  max-width: 1600px;
}

svg {
  position: absolute;
  width: 90%;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: white;
}

.navbar_wrapper {
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
}

.nav_direction {
  position: absolute;
  width: 90%;
  top: 30px;
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 20px;
    li {
      padding: 10px 20px;
      transition: all 0.3s linear;

      border: 1px solid transparent;
      border-radius: 10px;
      &:hover {
        border: 1px solid #c9d6df;
      }

      a {
        color: #c9d6df;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}

hr {
  position: absolute;
  top: 50px;
  stroke-width: 1px;
}
.login_direciton {
  background-color: red;
}
</style>
