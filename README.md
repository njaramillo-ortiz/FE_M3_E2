# FrontEnd - Módulo 3, Taller 2

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.

## Descripción actividad

### Uso de prompts

Presionando el botón `Reservar` al extremo derecho de la navbar se accede a las prompts de reserva, las cuales se ejecutan en la función `reservePrompt()` en el archivo `script.js`. Cada input es chequeado para validar si es nulo, lo cual detiene la operación de reserva. Además, en los prompts de correo y teléfono se hacen chequeos adicionales:

* Para el caso del correo se utiliza una expresión regular, además de verificar que el valor ingresado sea de tipo string y que dicho string contenga el caracter `@`.
* Para el caso del teléfono también se utiliza una expresión regular, además de verificar que el valor ingresado sea de tipo string.

### Scope de variables y uso de operadores

El scope de las variables define el contexto donde están definidas: a nivel global, dentro de un bloque de cóidgo específico, etc. Un tipo popular utilizado en JavaScript es `var`, que define variables con un scope global o de función. En el curso destacamos:

* `let`: Variable con scope de bloque
* `const`: Constante con scope de bloque

Los operadores de comparación permiten determinar igualdad de diferentes tipos. Con ellos podemos realizar operaciones de validación sobre los datos ingresados por el usuario para garantizar el correcto ingreso de la información.

* `==`: Igualdad no estricta; no considera el tipo de las variables a comparar. Aqui `"1" == 1` retorna `True`
* `===`: Igualdad estricta; si considera el tipo de las variables a comparar. Aqui `"1" === 1` retorna `False`
* `typeof`: Permite comparar el tipo de una variable en lugar de su valor.

Se utilizan estos operadores en la validación de los datos de la prompt de reserva.

### Debugger y excepciones

Dentro de la página de equipo se incluye un filtro por años de experiencia, que permite modificar de manera dinámica los doctores desplegados en la página web. El parámetro de la cantidad de años es ingresado manualmente por el usuario; para prevenir posibles errores se utiliza tanto un bloque try/catch como el comando debugger para detectar posibles errores y manejarlos de forma eficiente. Esto se puede observar en la función `filterByYears()` del archivo `script.js`.

## Instrucciones de uso

Clonar el repositorio desde GitHub, o en su defecto descargar los contenidos como zip.

Luego, abrir `index.html` en su navegador favorito.

## Estructura del proyecto

├── /css                 # Archivos css preprocesados con SASS <br>
├── /img                 # Imágenes <br>
├── /js                  # Librerías javascript <br>
├── /styles              # SASS con estructura 7-1, usando solo carpetas relevantes <br>
├──── /abstracts         # Variables y mixins <br>
├──── /base              # Estilos base / generales <br>
├──── /layout            # Estilos para estructuras semanticas <br>
├──── /pages             # Estilos para paginas especificas <br>
├──── /vendors           # Estilos de terceros incluidos (bootstrap) <br>
├──── main.scss          # Contiene todas las referencias de SASS <br>
├── index.html           # Página de inicio <br>
├── team.html            # Página del equipo médico <br>
├── contact.html         # Página de contacto <br>
└── README.md            # Ud. se encuentra aqui

## Creditos

Imágenes obtenidas de:

- [Pexels](https://www.pexels.com)
