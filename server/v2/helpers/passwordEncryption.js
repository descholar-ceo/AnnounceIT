import bcrypt from 'bcrypt';

export const hashPassword = (password) => {
    const saltRounds = bcrypt.genSaltSync(14);
  return bcrypt.hashSync(password, saltRounds);
}

export const checkPassword = (currPassword, savedPassword) =>
  (bcrypt.compareSync(currPassword, savedPassword));