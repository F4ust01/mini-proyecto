## Mini Proyecto de React con Hooks

Este es un mini proyecto de React que utiliza los Hooks `useState`, `useEffect` y `useContext` para crear un contador simple y mostrar un mensaje de saludo personalizado.

### Características del Proyecto

- **Contador Simple**: Un contador que incrementa su valor cada vez que se hace clic en el botón de incremento. El valor del contador se muestra en la pantalla y se actualiza dinámicamente.
- **Mensaje de Saludo Personalizado**: Un mensaje de saludo que utiliza el nombre del usuario para dar la bienvenida. El nombre del usuario se ingresa a través de un campo de entrada y se muestra en el mensaje de saludo.

### Implementación de Hooks

- **useState**: Utilizado para manejar el estado del contador y el nombre del usuario.
- **useEffect**: Utilizado para actualizar el título de la página con el valor actual del contador.
- **useContext**: Utilizado para pasar el nombre del usuario de manera eficiente a través de los componentes, evitando la propagación de props.

### Estructura del Proyecto

- **src/App.js**: Contiene los componentes principales del proyecto, incluyendo el contador, el mensaje de saludo y la gestión del estado del nombre del usuario.
- **src/index.js**: Punto de entrada de la aplicación, donde se renderiza el componente principal `App`.
- **src/index.css**: Archivo de estilos CSS para la aplicación.