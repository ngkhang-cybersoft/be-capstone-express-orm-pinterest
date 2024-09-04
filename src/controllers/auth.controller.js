import sequelize from '../config/connectDb.js';
import { createToken } from '../config/jwtConfig.js';
import responseData from '../config/responseData.js';
import { comparePass, hashPass } from '../config/utils.js';
import initModels from '../models/init-models.js';

const model = initModels(sequelize);

// Login
export const loginAPI = async (req, res) => {
  let { email, password } = req.body;

  // Check email
  let checkEmail = await model.user.findOne({
    where: {
      email,
    }
  })
  if (!checkEmail) {
    responseData('', 'Invalid email address.', 400, res);
    return;
  }

  // Check password
  let checkPass = comparePass(password, checkEmail.password);
  if (!checkPass) {
    responseData('', 'Incorrect password.', 401, res);
    return;
  }

  let token = createToken({
    userId: checkEmail.dataValues.user_id,
    fullName: checkEmail.dataValues.full_name,
    key: new Date().getTime(),
  });
  responseData(token, 'Login successful.', 200, res);
}

// Sign Up
export const signUpAPI = async (req, res) => {
  const { email, password, fullName, age, avatar } = req.body;

  // Check email
  let checkMail = await model.user.findOne({
    where: {
      email,
    }
  });
  if (checkMail) {
    responseData('', 'Email already exists.', 409, res);
    return;
  }

  // Insert new user
  let newUser = {
    email,
    password: hashPass(password),
    full_name: fullName,
    age,
    avatar,
    role: 'USER',
    refresh_token: '',
  };

  await model.user.create(newUser);
  responseData('', 'User created successfully.', 201, res);
}

// Change password
export const changePasswordAPI = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  // Check email
  let checkMail = await model.user.findOne({
    where: {
      email,
    }
  });

  if (!checkMail) {
    responseData('', 'Invalid email address.', 400, res);
    return;
  };

  // Compare old and new password
  let isValidOldPassword = comparePass(oldPassword, checkMail.dataValues.password);
  if (!isValidOldPassword) {
    responseData('', 'Old password does not match.', 401, res);
    return;
  }

  await model.user.update(
    {
      password: hashPass(newPassword),
    },
    {
      where: {
        email: checkMail.dataValues.email,
      }
    }
  );

  responseData('', 'Change password success', 200, res);
}
