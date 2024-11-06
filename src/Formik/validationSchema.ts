
import * as Yup from 'yup';



export const loginValidationSchema = Yup.object({
    nameOrEmail: Yup.mixed().test(
        'nameOrEmail',
        'Debe ser un correo electrónico válido o un nombre de usuario',
        function (value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            return emailRegex.test(value as string) || (typeof value === 'string' && value.trim().length > 0);
        }
    )
        .required('Usuario o Email'),
    check : Yup.boolean(),
    password: Yup.string().required('***Campo Obligatorio').min(6,'minimo 6 caracteres')
});



export const registerValidationSchema = Yup.object({
    name: Yup.string()
        .required('***Campo Obligatorio')
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .matches(/^[a-zA-Z0-9]+$/, 'El nombre solo puede contener letras y números'),
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('***Campo Obligatorio')
        .max(100, 'Máximo 100 caracteres')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Correo electrónico inválido'),
    password: Yup.string()
        .required('***Campo Obligatorio')
        .min(6, 'Mínimo 6 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            'mayúscula, minúscula, número y  especial'
        ),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
        .required('***Campo Obligatorio')
});


export const productoValidationSchema = Yup.object({
    name: Yup.string()
        .required('***Campo Obligatorio')
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios'),
    description: Yup.string()
        .required('***Campo Obligatorio')
        .min(10, 'Mínimo 10 caracteres')
        .max(500, 'Máximo 500 caracteres'),
    price: Yup.number()
        .required('***Campo Obligatorio')
        .min(1, 'Mínimo 1 caracter')
        .max(1000, 'Máximo 1000 caracteres'),
    stock: Yup.number()
        .required('***Campo Obligatorio')
        .min(1, 'Mínimo 1 caracter')
        .max(1000, 'Máximo 1000 caracteres'),
    image: Yup.string()
        .required('***Campo Obligatorio')
        .url('Debe ser una URL válida'),
    category: Yup.string()
        .required('***Campo Obligatorio')
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios'),
 
})

export const footvalidationSchema = Yup.object({
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('***Campo Obligatorio')
        .max(100, 'Máximo 100 caracteres')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Correo electrónico inválido'),
});

export const contactValidationSchema = Yup.object({
    name: Yup.string()
        .required('***Campo Obligatorio')
        .min(3, 'Mínimo 3 caracteres')
        .max(50, 'Máximo 50 caracteres')
        .matches(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios'),
    email: Yup.string()
        .email('Correo electrónico inválido')
        .required('***Campo Obligatorio')
        .max(100, 'Máximo 100 caracteres')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Correo electrónico inválido'),
    message: Yup.string()
        .required('***Campo Obligatorio')
        .min(10, 'Mínimo 10 caracteres')
        .max(500, 'Máximo 500 caracteres')
});