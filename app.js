<!-- 1️⃣  Añade este <form> al HTML (solo si aún no lo tienes) -->
<form id="rsvp-form">
    <label>
        Nombre: <input type="text" name="name" required />
    </label><br/>
    <label>
        Email: <input type="email" name="email" required />
    </label><br/>
    <button type="submit">Confirmar</button>
</form>

<!-- 2️⃣  Coloca el siguiente script al final del body o dentro de un
      archivo .js que cargues después del DOM -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvp-form');

    // Si el formulario no existe, nada más hacer.
    if (!form) return;

    form.addEventListener('submit', event => {
        event.preventDefault();           // ❌  No recargar la página

        // Recolectar todos los campos de entrada del formulario
        const inputs = Array.from(form.querySelectorAll('input'));
        const missing = inputs.filter(input => !input.value.trim());

        if (missing.length > 0) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Simulación de envío: simplemente mostramos la alerta de éxito
        alert('¡Gracias por confirmar!');

        // Si quieres resetear el formulario después del “envío”:
        form.reset();
    });
});
</script>