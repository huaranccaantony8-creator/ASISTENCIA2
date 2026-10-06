document.getElementById('formEstudiante').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreAlumno').value;
    const codigo = document.getElementById('codigoAlumno').value;
    
    try {
        // Guarda el documento en la colección 'estudiantes' de Firestore
        await window.firebaseMethods.addDoc(
            window.firebaseMethods.collection(window.db, "estudiantes"), 
            { nombre: nombre, codigo: codigo }
        );
        console.log("Estudiante guardado en Firebase exitosamente.");
    } catch (error) {
        console.error("Error al guardar en Firebase: ", error);
    }
});