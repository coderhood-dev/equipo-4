const doSignin = async (users, email, password) => {
  const storedUser = users.find((user) => user.email === email);

  if (!storedUser) {
    return Promise.reject(new Error('El usuario ingresado no existe'));
  }
  const user = users.find((userx) => {
    return userx.email === email && userx.password === password;
  });
  if (!user) {
    return Promise.reject(new Error('La contraseña es incorrecta'));
  }
  // si llega hasta aca, significa que la promesa se resuelve bien
  console.log('Holu');
  return user;
};

const doSignup = async (users, setUsers, user) => {
  // estos van a ser mis campos requeridos, todo servicio de autentificacion siempre va a tener campos requeridos
  const fieldsRequired = ['email', 'password'];
  const errors = [];

  // chequeo si complete los campos requeridos, sino devuelvo un array con los errores
  Object.entries(user).forEach((element) => {
    const [key, value] = element;
    const isFieldRequired = fieldsRequired.includes(key);

    if (!value && isFieldRequired) {
      const error = `${key} is required`;
      errors.push(error);
    }
  });

  if (errors.length > 0) {
    Promise.reject(errors);
  }
  setUsers([...users, user]);

  // toda async function retorna una promesa, eso significa que esta funcion retorna una promesa, en el caso de haber errores esta promesa se rechaza y devuelve los errores y en el caso que este todo bien se resuelve despues de 2000ms
};

export { doSignin, doSignup };
