document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            alert("Mensaje enviado correctamente.");
            form.reset();
        })
        .catch(error => {
            alert("Hubo un error al enviar el mensaje.");
        });
    });
});
let lastTime = 0;

document.addEventListener('mousemove', function(e) {
    // Crear un nuevo div para cada estela
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    
    // Posicionar la estela en la ubicación del cursor
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    
    // Añadir la estela al body
    document.body.appendChild(trail);
    
    // Eliminar la estela después de que se haya desvanecido
    setTimeout(() => {
        trail.remove();
    }, 600); // El tiempo debe coincidir con la duración de la animación
});
