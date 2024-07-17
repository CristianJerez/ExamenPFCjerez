<template>
  <div id="nav">
    <header>
      <h1>Examen Programación Front End</h1>
      <nav>
        <router-link to="/promedioNotas">Cálculo de Calificaciones</router-link>
        <router-link to="/registro">Formulario de Registro</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
#nav {
  font-family: 'Arial', sans-serif;
}

header {
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

header h1 {
  margin: 0;
  font-size: 2em;
}

nav {
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #3e8e41;
  border-radius: 5px;
}

nav a:hover {
  background-color: #5c3db2;
}
</style>