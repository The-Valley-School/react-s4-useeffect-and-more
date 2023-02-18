# VIDEO 07 - Ejercicio 2

En esta ocasión vamos a realizar un buscador de libros, como si de una tienda online se tratase (recordad que Amazon empezó así 😛)

Aprovechando la API pública de Google:

<https://www.googleapis.com/books/v1/volumes?q=Prueba>

Vamos a crear una página web que muestre un formulario de búsqueda como el siguiente:

![captura-1.png](/docs/assets/captura-1.png)

Cuando introduzcamos más de 3 caracteres se realizará una búsqueda llamando a la api de Google y se mostrarán los resultados de la siguiente manera:

![captura-2.png](/docs/assets/captura-2.png)

Ya habrás notado que en este ejercicio la parte de maquetación no debe llevarte mucho tiempo, lo importante es centrarse en el uso de UseEffect y UseState. 

Ten en cuenta lo siguiente:

- La API puede no devolver resultados → Debemos controlar este caso y evitar errores por acceder a propiedades que no existen
- La API puede devolver libros que no tenga informado el campo authors, imageLinks o incluso el title. Debemos controlar dichos errores para mostrar un texto de fallback (”Sin autores”, “Sin título” y “Sin imagen”)
- Recuerda hacer uso de debounce para no hacer una petición cada vez que pulsamos una letra
- Intenta componetizar lo máximo posible, por ejemplo puedes hacer la tabla un componente (BookTable) o incluso cada fila de la tabla podría ser un componente propio (BookTableRow)
- Evita llamar a la API de google sin texto de búsqueda o te dará error, por ejemplo:
<https://www.googleapis.com/books/v1/volumes?q=>
<https://www.googleapis.com/books/v1/volumes>
Estas peticiones te darán un error 400