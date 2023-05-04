Resumen del proyecto:

En este proyecto creamos una página web para validar tarjetas de crédito mediante el Algoritmo de Luhn. En ella, puedes ingresar números de tarjetas de crédito reales o autogenerados para saber si son válidos.

Una pequeña aclaración sobre el algoritmo de Luhn: es un método de suma de verificación que se utiliza para validar números de identificación, como el IMEI de los celulares o las tarjetas de crédito. Este algoritmo es simple: se obtiene la inversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos. Si este número es mayor o igual a 10, debemos sumar los dígitos del resultado. El número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

La interfaz permite a los usuarios:

Ingresar campos numéricos
Verificar si los dígitos ingresados son válidos o no
Ocultar los dígitos ingresados con ### dejando visibles los últimos 4
No permite ingresar campos vacíos
Estructura general del código:

En el archivo index.HTML se encuentra la estructura del proyecto y los enlaces de JS y CSS. En index.js se encuentran el DOM con las interacciones para que el proyecto tenga dinamismo. En validator.js se encuentran la lógica del proyecto, “isValid” y “maskify”. En la primera se encuentran las funciones relacionadas al algoritmo de Luhn, mientras que en la segunda se encuentra la función de maskify que se utiliza para enmascarar los dígitos de la tarjeta.

Interfaz:

En primer lugar, el usuario debe ingresar los dígitos de la tarjeta que desea verificar, asegurándose de que sean solo cifras numéricas.
Luego, debe presionar el botón "verificar". Si el usuario deja el campo vacío, aparecerá un mensaje de alerta indicando que debe ingresar el número de tarjeta. Si ingresa caracteres no numéricos, se mostrará un mensaje de error.
Al ingresar un número de tarjeta con el formato correcto, se desplegará una nueva ventana que indica si la tarjeta es válida o no. Además, se mostrarán los dígitos enmascarados (#), excluyendo los últimos 4.

5. Diseño de la interfaz
Optamos por un diseño sencillo que fuera claro de entender, pero a la vez llamativos con colores vibrantes que captan la atención de las usuarias.
![image](https://user-images.githubusercontent.com/124455712/222547004-f5d9d263-ba08-4e7f-b16e-0fa7b46ede33.png)
