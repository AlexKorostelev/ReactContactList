/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const cors = require('cors');
let contactsDB = require('./db/contactsDB');

const app = express();
const PORT = 3333;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: 'hghtyNN23h',
    store: new FileStore(),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 2592000000, httpOnly: false },
  }),
);

require('./config-passport');

app.use(passport.initialize());
app.use(passport.session());

// =====================================================
// Ручка для аутентификации пользователя
// =====================================================
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.sendStatus(401);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.sendStatus(200);
    });
  })(req, res, next);
});

// =====================================================
// Middleware для проверки аутентификации пользователя
// =====================================================
const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.sendStatus(418); // 401 ;)
  }
};

// =====================================================
// Получение списка контактов
// =====================================================
app.get('/contacts', auth, (req, res) => {
  res.json(contactsDB);
});

// =====================================================
// Удаление контакта
// =====================================================
app.delete('/contacts', auth, (req, res) => {
  const { id } = req.body;

  const contact = contactsDB.find((e) => e.id === id);
  if (contact) {
    contactsDB = contactsDB.filter((e) => e.id !== id);
    return res.sendStatus(200);
  }
  res.sendStatus(400);
});

// =====================================================
// Добавление контакта
// =====================================================
app.post('/contacts', auth, (req, res) => {
  const { name, phone } = req.body;
  if (name && phone) {
    // Здесь нужно сделать проверку на добавление существующего контакта!
    const id = Date.now();
    contactsDB.push({
      name,
      phone,
      id,
    });
    return res.json({ id });
  }
  return res.sendStatus(400);
});

// =====================================================
// Изменение контакта
// =====================================================
app.patch('/contacts', auth, (req, res) => {
  const { name, phone, id } = req.body;
  if (name && phone && id) {
    contactsDB.map((e) => {
      if (e.id === id) {
        e.name = name;
        e.phone = phone;
      }
      return e;
    });
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});

// =====================================================
// Выход из системы
// =====================================================
app.get('/logout', (req, res) => {
  req.logOut();
  res.clearCookie('connect.sid', {
    path: '/',
  });
  req.session.destroy(() => {
    res.sendStatus(200);
  });
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('\x1b[1m\x1b[32m%s\x1b[0m', `Server is running on port ${PORT}!`));
