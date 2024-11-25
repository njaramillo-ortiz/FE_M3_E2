const doctores = [
    {
        name: "Dr. Juan Perez",
        area: "Cirugía",
        description: "El Dr. Juan Pérez cuenta con más de 20 años de experiencia en cardiología.",
        image: "img/doctor1.webp",
        yearsExp: 3,
        schedule: 
        {
            startTime: "10:00",
            endTime: "12:00"
        },
        contact:
        {
            email: "jperez@hbv.cl",
            phone: "999999999"
        }
    },
    {
        name: "Dra. Maria Lopez",
        area: "Oftalmología",
        description: "La Dra. María López es reconocida por su trabajo en consultas generales.",
        image: "img/doctora2.webp",
        yearsExp: 4,
        schedule: 
        {
            startTime: "08:30",
            endTime: "17:30"
        },
        contact:
        {
            email: "mlopez@hbv.cl",
            phone: "988888888"
        }
    },
    {
        name: "Dr. Carlos Martinez",
        area: "Psicología",
        description: "El Dr. Carlos Martínez se especializa en atención hospitalaria.",
        image: "img/doctor3.webp",
        yearsExp: 1,
        schedule: 
        {
            startTime: "09:45",
            endTime: "10:15"
        },
        contact:
        {
            email: "cmartinez@hbv.cl",
            phone: "977777777"
        }
    },
    {
        name: "Dra. Elena Garcia",
        area: "Kinesiología",
        description: "Habitaciones confortables para tu recuperación.",
        image: "img/doctora4.webp",
        yearsExp: 5,
        schedule: 
        {
            startTime: "11:11",
            endTime: "20:20"
        },
        contact:
        {
            email: "egarcia@hbv.cl",
            phone: "966666666"
        }
    }
]

function log(message)
{
    console.log(message);
}

function reservePrompt()
{
    let name = prompt("Ingrese su nombre completo");
    if(name == null) return;

    console.log(`Nombre: ${name}`);

    let validatedEmail = false;
    let email = "";

    while(!validatedEmail)
    {
        email = prompt("Ingrese su correo electrónico");
        if(email == null) return;

        let emailValidation = /^\S+@\S+\.\S+$/;
        validatedEmail = emailValidation.test(email) && typeof(email) === "string" && email.includes("@");

        if(validatedEmail)
            console.log(`Correo: ${email}`);
        else
            alert("Correo no válido!");
    }

    let validatedPhone = false;
    let phone = "";

    while(!validatedPhone)
    {
        phone = prompt("Ingrese su numero de teléfono");
        if(phone == null) return;

        let phoneValidation = /^(\+56)?9[0-9]{8}$/;
        validatedPhone = phoneValidation.test(phone) && typeof(phone) === "string";

        if(validatedPhone)
            console.log(`Teléfono: ${phone}`);
        else
            alert("Numero de teléfono no válido!");
    }

    let response = confirm(
        `Sus datos son: \n
        Nombre: ${name} \n
        Correo: ${email} \n
        Teléfono: ${phone} \n
        ¿Es correcto?`);

    if(response)
        alert("Reserva realizada!");
}

function parseDoctors()
{
    let divListaDoctores = document.getElementById("listaDoctores");
    divListaDoctores.textContent = "";
    doctores.forEach(d => 
    {
        let divDoctor = document.createElement("li");
        divDoctor.textContent = d.name;
        divListaDoctores.appendChild(divDoctor);
    });
}

function filterByYears(years)
{
    try
    {
        let divListaDoctores = document.getElementById("listaDoctores");
        divListaDoctores.textContent = "";
        doctores.forEach(d => 
        {
            if(d.yearsExp >= years)
            {
                let divDoctor = document.createElement("div");
                divDoctor.className = "team-section__card";
                divDoctor.innerHTML = doctorCard(d);
                divListaDoctores.appendChild(divDoctor);
            }
            
        });
    }
    catch
    {
        debugger
        console.log(`invalid value for years: ${years}`);
    }
}

function doctorCard(doctor)
{
    let doctorYears = `${doctor.yearsExp} ${doctor.yearsExp == 1 ? "año" : "años"} de experiencia`

    let doctorHTML = `
    <img src="${doctor.image}" alt="${doctor.name}" class="team-section__card-image">
    <div class="team-section__card-body">
        <h3 class="team-section__card-title">${doctor.name}</h3>
        <p class="team-section__card-specialty">${doctorYears}</p>
        <p class="team-section__card-specialty">${doctor.area}</p>
        <p class="team-section__card-description">${doctor.description}</p>
    </div>`;
    
    return doctorHTML;
}