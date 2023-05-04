tarjeta de crédito valida
1. Resumen del proyecto
En este proyecto realizamos una web para validar tarjetas de crédito utilizando el Algoritmo de Lunh, En ella puedes ingresar números de tarjeta de crédito reales o autogeneradas para saber si son válidas.
Aquí una pequeña aclaración sobre el algoritmo de lunh ----->
El [algoritmo de Luhn, es un método de suma de verificación, se utiliza para validar números de identificación; cuentos como el IMEI de los celulares, tarjetas de crédito, etc.
Este algoritmo es simple. Obtenemos la inversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
2. La interfaz permite a las/os usuarias
-Ingresar campos numéricos -Ver si los dígitos ingresados son válidos o no -Ocultar los dígitos ingresados con ### dejando visibles los últimos 4 -No permite ingresar campos vacíos
3. estructura general del código
index.HTML en el cual se encuentra la estructura del proyecto además de los enlaces de JS y CSS.
index.js se encuentran el DOM con las interacciones para que el proyecto tenga dinamismo.
validator.js se encuentran la lógica del proyecto, “isValid” y “maskify” en la primera se encuentran las funciones relacionadas al algoritmo de Lunh, en cambio en la segunda la de maskify que se utiliza para enmascarar los dígitos de la tarjeta.

4. Interfaz
1.- En primer lugar la usuaria debe ingresar el digito de la tarjeta que desea verificar cuidando que sean solo cifras numéricas 2.- Luego debe presionar en botón verificar si la usuaria deja el input vació, llega un mensaje de alerta indicando que debe ingresar el número de tarjeta, por otro lado si ingresa caracteres no numéricos se imprime un nuevo mensaje de error. 
3.- Al ingresar un número de tarjeta con el formato solicitado se despliega un nuevo cuatro que indica si esta es válida o no, además muestra los dígitos enmascarados (#), excluyendo los últimos 4.

5. Diseño de la interfaz
Optamos por un diseño sencillo que fuera claro de entender, pero a la vez llamativos con colores vibrantes que captan la atención de las usuarias.
![image](https://user-images.githubusercontent.com/124455712/222547004-f5d9d263-ba08-4e7f-b16e-0fa7b46ede33.png)
