# Tarjeta de crédito válida

## 1. Resumen del proyecto

En este proyecto realimos una web para validar tarjetas de crédito
utilizando el Algoritmo de Lunh, En ella puedes ingresar números de tarjeta de crédito
reales o autogeneradas para saber si son válidas. 

Aqui una pequeña aclaración sobre el algoritmo de lunh ----->

El [algoritmo de Luhn,  es un método de suma de verificación,se utiliza para validar 
números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

## 2. La interfaz permite a las/os usaurias
-Ingresar campos númericos 
-Ver si los digitos ingresados son válidos o no
-Ocultar los digitos ingresados con ### dejando visibles los ultimos 4
-No permite ingresar campos vacios 

## 3. estrucruta gereral del código

index.HTML en el cual se encuentra la estructura del proyecto ademas de los enlaces de JS y CSS.

index.js se encuentran el DOM con las interacciones para que el proyecto tenga dinamismo.

validator.js se encuentran la logica del proyecto, ´isValid´ y ´maskify´ en la primera se encunetran las funciones 
relacionadas al algoritmo de Lunh, en cambio en la segunda la de maskify que se utiliza para  enmascarar 
los digitos de la tarjeta 


## 4. Interfaz 

1.- En primer lugar la usuaria debe ingresar el digito de la tarjeta que desea verificar cuidando que sean solo cifras númericas
2.- Luego debe precionar en botón _verificar_ si la usuaria deja el input vacio, llega un mensaje de alerta indicando que debe ingresar el número de tarjeta, por otro lado si ingresa caracteres no númericos se impreme un nuevo memsaje de error.
3.- Al ingresar un número de tarjeta con el formato solicitado se despliega un nuevo cuatro que indica si esta es valida o no, ademas muestra los dígitos enmascarados (#), excluyendo los últimos 4. 

(./readme1.png)

## 5. Diseño de la interfaz 

Optamos por un diseño sencillo que fuera claro de entender, pero a la vez llamativo 
con colores vibrantes que captara la atención las usuarias. 



