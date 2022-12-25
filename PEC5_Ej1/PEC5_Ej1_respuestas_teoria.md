# Ejercicio 1

### a) ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

Principales diferencias entre formularios dirigidos por plantilla y formularios reactivos en Angular:

- **Enfoque de creación**: Los formularios dirigidos por plantilla utilizan el código HTML para definir la estructura del formulario y los componentes de Angular para procesar y validar los datos del formulario. Los formularios reactivos utilizan un modelo de datos reactivo para controlar la entrada y validación de los datos del formulario.

- **Complejidad y escalabilidad**: Los formularios dirigidos por plantilla son más simples de crear, pero pueden ser menos escalables y difíciles de mantener en formularios complejos. Los formularios reactivos son más flexibles y escalables y pueden manejar formularios complejos con una gran cantidad de campos y validaciones.

- **Enlace y procesamiento de datos**: En los formularios dirigidos por plantilla, los datos del formulario se enlazan a los elementos del formulario utilizando la directiva ngModel y se procesan en el componente de Angular utilizando métodos como ngSubmit. En los formularios reactivos, los datos del formulario se enlazan a los elementos del formulario utilizando el módulo FormControl y se procesan en el componente de Angular utilizando el módulo FormGroup.

- **Facilidad de depuración**: Los formularios dirigidos por plantilla son más fáciles de depurar y pueden ser más adecuados para principiantes en Angular. Los formularios reactivos pueden ser más difíciles de depurar y pueden requerir un mayor conocimiento de Angular y del patrón de programación reactivo.


### b) ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?

Las directivas ngModel y ngModelChange son herramientas de Angular utilizadas para vincular elementos de formulario a propiedades en componentes de Angular y para procesar y validar datos de formulario, así como para ejecutar una expresión cuando el valor de un elemento de formulario cambie. A menudo se utilizan en formularios dirigidos por plantilla en Angular.

La directiva ngModel se emplea para enlazar elementos de formulario a una propiedad en el componente de Angular y para procesar y validar los datos del formulario. Por ejemplo, puede utilizarse para asegurar que un campo de texto solo acepte caracteres alfanuméricos.

La directiva ngModelChange es una expresión que se ejecuta cuando el valor de un elemento de formulario cambia. Por ejemplo, puede utilizarse para ejecutar una función llamada onNameChange cada vez que el valor de un campo de texto cambie. A menudo se utiliza junto con la directiva ngModel.


### c) ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?

En los formularios dirigidos por plantilla en Angular, los estados son cambios en el estado de un elemento de formulario que reflejan su estado actual. Se pueden utilizar para mostrar información al usuario o para controlar el comportamiento de los elementos del formulario. Algunos ejemplos de estados comunes son:

- **touched**: este estado se establece cuando el usuario ha interactuado con un elemento de formulario, por ejemplo, al hacer clic en él o al escribir en él.

- **pristine**: este estado se establece cuando el elemento de formulario no ha sido modificado por el usuario.

- **dirty**: este estado se establece cuando el elemento de formulario ha sido modificado por el usuario.

- **valid**: este estado se establece cuando el elemento de formulario cumple con las reglas de validación establecidas.

- **invalid**: este estado se establece cuando el elemento de formulario no cumple con las reglas de validación establecidas.
