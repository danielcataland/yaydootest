# Prueba técnica Yaydoo

Para la resolución de dicho problema se realizó mediante una app de CLI en node en su versión 14.18.0,
donde se indicaba que se necesitaba una solución enfocada a la POO respetando las reglas del ejercicio
en cuestión.

Para agregar un nuevo producto se implemento la clase `NewProduct`, ya que a su vez se proponía hacer
un programa en donde se pudiesen agregar nuevos productos.

Bajo esa premisa se plantearon las siguientes questiones al momento de crear nuevos productos:

¿Es un producto legendario? | legendary
Si la respuesta es si, ¿Precio fijo de venta? | legendaryPrice
¿Precio a disminuir por día? |  minusByDay
¿El precio aumenta con el tiempo? | increasePrice
Si la respuesta es si, ¿Cantidad a aumentar? amountPerDay
¿El precio de venta aumenta cuando el producto esta por caducar? specialDays
Si la respuesta es si, agregar los días antes de caducar y la cantidad que aumentan por día (day, price)
