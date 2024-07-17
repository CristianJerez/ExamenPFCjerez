<template>
    <form @submit.prevent="submitForm" class="form-container">
        <div class="container mt-5">

            <h1>Cálculo de calificaciones</h1>

            <div class="form-group">
                <label for="nota1">Nota 1 (35%): </label>
                <input type="number" id="nota1" v-model="nota1" min="10" max="70" required class="form-control"
                    @input="validarNotas" />
                <p v-if="errors.nota1" class="error-message">{{ errors.nota1 }}</p>
            </div>

            <div class="form-group">
                <label for="nota2">Nota 2 (35%): </label>
                <input type="number" id="nota2" v-model="nota2" min="10" max="70" required class="form-control"
                    @input="validarNotas" />
                <p v-if="errors.nota2" class="error-message">{{ errors.nota2 }}</p>
            </div>

            <div class="form-group">
                <label for="nota3">Nota 3 (30%): </label>
                <input type="number" id="nota3" v-model="nota3" min="10" max="70" required class="form-control"
                    @input="validarNotas" />
                <p v-if="errors.nota3" class="error-message">{{ errors.nota3 }}</p>
            </div>

            <div class="form-group">
                <label for="asistencia">Asistencia (%): </label>
                <input type="number" id="asistencia" v-model="asistencia" min="0" max="100" required
                    class="form-control" @input="validarAsistencia" />
                <p v-if="errors.asistencia" class="error-message">{{ errors.asistencia }}</p>
            </div>
            <button @click="calcularResultado" class="button">Calcular</button>

            <h2>Resultado</h2>
            <p v-if="promedioPonderado !== null">Promedio Ponderado: {{ promedioPonderado }}</p>
            <p v-if="resultado !== null">{{ resultado }}</p>
            <p v-if="error" class="error-message">{{ error }}</p>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            nota1: null,
            nota2: null,
            nota3: null,
            asistencia: null,
            promedioPonderado: null,
            resultado: null,
            error: null,
            errors: {
                nota1: '',
                nota2: '',
                nota3: '',
                asistencia: ''
            }
        };
    },
    methods: {
        validarNotas() {
            this.errors.nota1 = this.nota1 < 10 || this.nota1 > 70 ? 'La nota debe ser igual o menor a 70.' : '';
            this.errors.nota2 = this.nota2 < 10 || this.nota2 > 70 ? 'La nota debe ser igual o menor a 70.' : '';
            this.errors.nota3 = this.nota3 < 10 || this.nota3 > 70 ? 'La nota debe ser igual o menor a 70.' : '';
        },
        validarAsistencia() {
            if (!this.asistencia && this.asistencia !== 0) {
                this.errors.asistencia = 'El campo de asistencia es requerido.';
            } else if (this.asistencia < 0 || this.asistencia > 100) {
                this.errors.asistencia = 'La asistencia debe ser entre 0% y 100%.';
            } else {
                this.errors.asistencia = '';
            }
        },
        calcularResultado() {
            this.error = null;
            this.validarNotas();
            this.validarAsistencia();
            if (!this.errors.nota1 && !this.errors.nota2 && !this.errors.nota3 && !this.errors.asistencia) {
                this.promedioPonderado = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
                this.resultado = (this.promedioPonderado >= 40 && this.asistencia >= 80) ? 'Tu estado es: ¡Aprobado!' : 'Tu estado es: No Aprobado';
            } else {
                this.promedioPonderado = null;
                this.resultado = null;
                this.error = 'Por favor, ingrese valores válidos para las notas y la asistencia.';
            }
        },
    }
};
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
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
    margin-top: 3px;
    text-align: center;
}

.button {
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