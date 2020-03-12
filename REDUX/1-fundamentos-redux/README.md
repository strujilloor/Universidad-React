# Fundamentos de Redux

## Ejemplo de Store, Reducer, Acciones con Redux

> npm i redux

Nosotros creamos nuestro Store con el método createStore, el cual utiliza un reducer, que sabemos que es la función que nos retorna el estado actual.

este store lo estamos exportando por defecto del archivo store.js

## Conectar componentes con Redux usando react-redux
> npm i react-redux

En el nivel más alto que podamos, en este caso mi componente de aplicación principal.

Estamos utilizando el componente **Provider**, que viene de la librería react-redux.

una vez que utilicemos este componente, vamos a envolver toda la aplicación dentro de este.

Y a este componente Provider le tenemos que pasar una prop **store**, es justamete el store que nosotros estamos importando desde el archivo store.js

Una vez que hacemos esto ya podemos conectar nuestros componentes que se encuentren dentro de este componente Provider, y esto lo hacemos con el método **connect**.

A este método connect por primer parámetro o como primera ejecución le podemos pasar la función **mapStateToProps**, la cual nos retorna el objeto de estado que vamos a consumir dentro de nuestro componente. y también la función **mapDispatchToProps**, donde podremos tener funciones con algún tipo de logica, y estas funciones las podemos disparar directamente desde nuestro componente
