export default {
  Query: {
    user(obj, args, { user }) {
      return user || null; // si el usuario no esta logeado retorna vacio
    }
  },
  User: {
    email: user => {
      return user.emails[0].address;
    }
  }
};
