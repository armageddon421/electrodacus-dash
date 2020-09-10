<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" >Home</router-link>
      <router-link to="/settings">Settings</router-link>
      <router-link to="/legacy">Legacy SBMS</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view style="width: 100%; height: 100%;"/>
  </div>
</template>

<style>
body  {
  margin: 0px;
  background-color: slategrey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: darkslategray;
  padding: 0.5em;
}

#nav a {
  font-weight: bold;
  color: #222;
  background-color: #477;
  padding: 0.6em;
  margin: 0.1em;
  text-decoration-line: none;
  -moz-text-decoration-line: none;
}

#nav a.router-link-exact-active {
  color: #fff;
  background-color: slategrey;
}

</style>
