# Ejercicio 3

### a) ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup y FormBuilder?

FormControl, FormGroup y FormBuilder son clases que se utilizan para trabajar con formularios. A continuación podemos ver qué función tiene cada una:

- **FormControl**: se utiliza para representar un control de formulario individual, como un campo de entrada de texto o una casilla de verificación. Se puede utilizar FormControl para recoger y validar la entrada del usuario, así como para realizar operaciones asincronas mientras el usuario está introduciendo nuevos datos.

- **FormGroup**: se utiliza para representar un grupo de controles de formulario. Se puede utilizar un FormGroup para agrupar varios FormControls y realizar validaciones a nivel de grupo.

- **FormBuilder**: es un servicio que proporciona métodos convenientes para crear FormControls y FormGroups. Utilizar FormBuilder ahorra tiempo y código al trabajar con formularios, ya que proporciona una forma sencilla de crear y configurar controles y grupos de formulario.


### b) Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.

A continuación podemos ver una tabla con los validadores para ser utilizados en formularios reactivos de Angular:

| Validador | Descripción |
| --- | --- |
| required | El campo es requerido y debe tener un valor. |
| min | El campo debe tener un valor numérico mayor o igual que el especificado. |
| max | El campo debe tener un valor numérico menor o igual que el especificado. |
| minLength | El campo debe tener una longitud mínima de caracteres. |
| maxLength | El campo debe tener una longitud máxima de caracteres. |
| pattern | El campo debe coincidir con un patrón especificado mediante una expresión regular. |
| email | El campo debe tener un formato de correo electrónico válido. |
| nullValidator | El campo no se valida, siempre es válido. |
| compose | Permite combinar varios validadores en uno solo. |
| requiredTrue | El campo debe ser verdadero. |
| checkboxRequired | El campo debe ser seleccionado. |


### c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?

Los estados en formularios reactivos de Angular son valores que cambian dinámicamente en un formulario y que se utilizan para controlar la apariencia y el comportamiento del formulario. Los estados de un formulario pueden ser valores simples, como una cadena de texto o un número, o pueden ser objetos más complejos que contienen varias propiedades.

El listado de posibles estados es el siguiente:

- **Value**: el valor actual del campo de formulario.
- **Disabled**: si un campo de formulario está deshabilitado o no.
- **Required**: si un campo de formulario es obligatorio o no.
- **Valid**: si un campo de formulario cumple con las reglas de validación establecidas.
- **Touched**: si un usuario ha interactuado con un campo de formulario o no.
- **Pristine**: si el valor de un campo de formulario ha sido modificado o no.
- **Dirty**: si el valor de un campo de formulario ha sido modificado o no.
- **Validating**: si un campo de formulario está en proceso de validación o no.
- **Pending**: si una operación asíncrona, como la validación de un campo de formulario, está en proceso o no.
- **Submitted**: si un formulario ha sido enviado o no.

