# Ejercicio de JavaScript: Comparador de Últimos Dígitos

Este ejercicio tiene como objetivo desarrollar una función en JavaScript que compare tres números enteros y determine si el último dígito de los tres números es igual.

## Descripción del Problema

Se proporcionan tres números enteros, cada uno en el rango de 1 a 999. La tarea es crear una función que verifique si el último dígito de los tres números es igual. En otras palabras, debes determinar si el último dígito de `Número1`, `Número2` y `Número3` es el mismo.

## Requerimientos

1. Crea una función llamada `compareLastDigit` que acepte tres parámetros: `num1`, `num2` y `num3`.
2. La función debe verificar si los números proporcionados están dentro del rango permitido (1 a 999) y lanzar un error si alguno de ellos está fuera de ese rango.
3. Finalmente, la función debe comparar los últimos dígitos y devolver `true` si son iguales, o `false` en caso contrario.

## Ejemplo de Uso

```javascript
const num1 = 123;
const num2 = 456;
const num3 = 789;

const resultado = compareLastDigit(num1, num2, num3);
console.log(`¿Los últimos dígitos de ${num1}, ${num2} y ${num3} son iguales? ${resultado}`);

```

## Contribución

¡Siéntete libre de contribuir a este proyecto! Puedes mejorar la interfaz de usuario, agregar validaciones adicionales o realizar cualquier otro tipo de mejora que consideres necesaria. Aquí te indicamos cómo puedes hacerlo:

1. **Fork del Repositorio**: Haz un fork de este repositorio haciendo clic en el botón "Fork" en la esquina superior derecha de esta página. Esto creará una copia del repositorio en tu propia cuenta de GitHub.

2. **Clonar el Repositorio**: Clona el repositorio desde tu cuenta de GitHub a tu máquina local. Puedes usar el siguiente comando en tu terminal:

   ```shell
   git clone https://github.com/TU_NOMBRE_DE_USUARIO/comparador-ultimo-digito.git 
    ```
3. **Crear una Rama**: Crea una nueva rama en tu repositorio local para realizar tus cambios. Puedes nombrar la rama de acuerdo a la función que estás implementando o cualquier otro nombre descriptivo.

    ```shell
    git checkout -b mi-rama
    ```
4. **Realizar Cambios**: Haz los cambios necesarios en los archivos JavaScript o HTML para implementar mejoras o correcciones. Asegúrate de seguir las mejores prácticas de codificación y prueba tus cambios localmente.

5. **Commit de Cambios**: Realiza un commit de tus cambios con un mensaje descriptivo:

    ```shell
    git add .
    git commit -m "verbo: Agregado funcionalidad de..."
    ```
6. **Push a GitHub**: Sube tus cambios a tu repositorio en GitHub:

    ```shell    
    git push origin mi-rama
    ```
6. **Solicitud de Pull Request (PR)**: Ve a la página de tu repositorio en GitHub y selecciona la rama que has creado. Luego, haz clic en el botón "Pull Request". Describe tus cambios en el PR y envíalo.

7. **Revisión y Comentarios**: Espera a que los colaboradores revisen tu PR. Puede que te pidan hacer ajustes antes de que se apruebe.

8. **Aprobación y Fusión**: Una vez que tus cambios sean aprobados, un colaborador del proyecto fusionará tus cambios con la rama principal.

9. **Limpieza**: Después de que tu PR sea fusionado, puedes eliminar la rama de tu repositorio local y remoto si ya no la necesitas.

    ```shell
    git branch -d mi-rama
    git push origin --delete mi-rama
    ```