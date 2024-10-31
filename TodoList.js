const person = {
    name: 'Gregorio Y. Zara',
    src:"https://i.imgur.com/7vQD0fPs.jpg",
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>Tareas pendientes de {person.name}</h1>
        <img
          className="avatar"
          src = {person.src}
          alt="Gregorio Y. Zara"
        />
        <ul>
        <li>Mejorar el videoteléfono</li>
        <li>Preparar clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
        </ul>
      </div>
    );
  }
  