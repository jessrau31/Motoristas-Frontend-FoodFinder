function validarFormulario1() {
    let txtusuario = document.getElementById('txtusuario-login');
    let txtpassword = document.getElementById('txtpassword-login');
    if (txtusuario.value == '' || txtpassword.value == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        usuario = {
            usuario: txtusuario.value,
            password: txtpassword.value,
            tipo: 'B',
        }

        axios({
            method: 'POST',
            url: 'http://localhost:4201/usuarios/login/B',
            data: usuario
        })
            .then(res => {
                if (res.data.codigo == 0) {
                    modalBodySesion.innerHTML =
                    `<h5 class="titulo-modal my-4">${res.data.mensaje}</h5>
                    <div class="error my-3">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </div>
                    <button class="boton boton2 borde my-4" onclick="cerrarModal();">Aceptar</button>`;
                    abrirModal();
                } else {
                    window.open(`motoristas.html?ses=${res.data.idSession}&id=${res.data.id}&nom=${res.data.nombre}`, '_self')
                }
                
            })
    }
}

function abrirRegistro() {
    sectionLogin.style.display = 'none';
    sectionRegistration.style.display = 'block';
}

function abrirLogin() {
    sectionLogin.style.display = 'block';
    sectionRegistration.style.display = 'none';
}

function validarFormulario2() {
    let txtnombre = document.getElementById('txtnombre-registration');
    let txtusuario = document.getElementById('txtusuario-registration');
    let txtpassword = document.getElementById('txtpassword-registration');
    if (txtnombre.value == '' || txtusuario.value == '' || txtpassword.value == '') {
        alert("Por favor, llene todos los campos.");
    } else {
        usuario = {
            nombre: txtnombre.value,
            usuario: txtusuario.value,
            password: txtpassword.value,
            tipo: 'B',
            aprobado: null
        }

        axios({
            method: 'POST',
            url: 'http://localhost:4201/usuarios/registro/B',
            data: usuario
        })
            .then(res => {
                if (res.data.codigo == 0) {
                    modalBodySesion.innerHTML =
                    `<h5 class="titulo-modal my-4">${res.data.mensaje}</h5>
                    <div class="error my-3">
                        <i class="fa-solid fa-circle-xmark"></i>
                    </div>
                    <button class="boton boton2 borde my-4" onclick="cerrarModal();">Aceptar</button>`;
                    abrirModal();
                } else {
                    modalBodySesion.parentNode.classList.add('borde');
                    modalBodySesion.parentNode.classList.remove('borde');
                    modalBodySesion.innerHTML =
                        `<h5 class="titulo-modal my-4">${res.data.mensaje}</h5>
                        <div class="check my-3">
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <button class="boton boton2 borde my-4" onclick="cerrarModal();">Aceptar</button>`;
                }
                
            })
        abrirModal();
    }
}

function abrirModal() {
    $('#modal').modal('show');
}

function cerrarModal() {
    $('#modal').modal('hide');
    modalBodySesion.parentNode.classList.remove('borde');
    modalBodySesion.parentNode.classList.add('borde');
}

//######################
sectionLogin = document.getElementById('section-login');
sectionRegistration = document.getElementById('section-registration');
modalBodySesion = document.getElementById('modal-body-sesion');