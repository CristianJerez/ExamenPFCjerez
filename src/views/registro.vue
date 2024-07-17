<template>
    <div class="form-container">
      <form @submit.prevent="submitForm" class="container">
        <h1>Formulario de Registro</h1>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="form.nombre" @input="validateName" class="form-control" required/>
          <p v-if="errors.nombre" class="error-message">{{ errors.nombre }}</p>
        </div>
  
        <div class="form-group">
          <label for="email">Correo:</label>
          <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control" required/>
          <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
        </div>
        
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="form.password" @input="validatePassword" class="form-control" required/>
          <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
        </div>
        
        <div class="form-group">
          <label for="repeatPassword">Repetir contraseña:</label>
          <input type="password" id="repeatPassword" v-model="form.repeatPassword" @input="validateRepeatPassword" class="form-control" required>
          <p v-if="errors.repeatPassword" class="error-message">{{ errors.repeatPassword }}</p>
        </div>
        
        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          nombre: '',
          email: '',
          password: '',
          repeatPassword: ''
        },
        errors: {
          name: '',
          email: '',
          password: '',
          repeatPassword: ''
        }
      };
    },
    methods: {
      validateName() {
        if (!this.form.nombre) {
          this.errors.nombre = 'El campo nombre es requerido';
        } else if (/\d/.test(this.form.nombre)) {
          this.errors.nombre = 'El nombre no debe contener números';
        } else {
          this.errors.nombre = '';
        }
      },
      validateEmail() {
        if (!this.form.email) {
          this.errors.email = 'El campo correo es requerido';
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
          this.errors.email = 'El correo es inválido';
        } else {
          this.errors.email = '';
        }
      },
      validatePassword() {
        if (!this.form.password) {
          this.errors.password = 'El campo contraseña es requerido';
        } else if (this.form.password.length < 5) {
          this.errors.password = 'La contraseña debe tener al menos 5 caracteres';
        } else {
          this.errors.password = '';
        }
      },
      validateRepeatPassword() {
        if (!this.form.repeatPassword) {
          this.errors.repeatPassword = 'El campo repetir contraseña es requerido';
        } else if (this.form.repeatPassword !== this.form.password) {
          this.errors.repeatPassword = 'Las contraseñas no coinciden';
        } else {
          this.errors.repeatPassword = '';
        }
      },
      submitForm() {
        this.validateName();
        this.validateEmail();
        this.validatePassword();
        this.validateRepeatPassword();
        if (!Object.values(this.errors).some(error => error !== '')) {
          alert('El registro se ha realizado correctamente');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    background-color: #f9f9f9;
  }
  
  .container {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
  
  h1 {
    text-align: center;
    color: #4CAF50;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
    display: inline-block;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 10px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .error-message {
    color: red;
    margin-top: 5px;
    font-size: 0.9em;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #5c3db2;
  }
  </style>