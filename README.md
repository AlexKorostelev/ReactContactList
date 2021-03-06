# React Contact List
**React Contact List** - это клиент-серверное приложение для отображения списка контактов с возможностью добавления/удаления/редактирования и поиска контактов по имени или номеру телефона.

### Стек технологий используемых в проекте
* React
* Redux (thunk)
* Passport.js (Local strategy)
* Materialize CSS
* module CSS
* Node.js
* Express

### Установка и запуск проекта
1. Перейти в корневой каталог проекта (ReactContactList) 
2. В командной строке выполнить (однократно для установки): **npm run installall**
3. Запуск проекта: **npm start**
4. Для входа использовать логин/пароль: a@a.a/123

### Пара слов о проекте
После успешной авторизации происходит автоматический редирект на главную страницу со списком контактов. Контакты отсортированы по имени в порядке возрастания, сортировка регистронезависимая. При успешной авторизации создается сессия (а также cookies на клиентской части) и сохраняется до момента выхода пользователя из системы (Logout). В качестве примера сессия хранится в FileStorage, но без труда может быть сохранена в Mongostore или где-нибудь еще. В приложении минимизировано кол-во обращений к серверу, поэтому данные с сервера подгружаются только в момент входа пользователя в систему и в дальнейшем сохраняются в Redux. При редактировании контакта также происходит обращение к серверу (по REST), но только в рамках редактируемого контакта (весь список не подгружается). 
**Функция поиска** используется для фильтрации списка контактов по имени или номеру телефона. Изменение содержимого контакта происходит при нажатии соответствующей кнопки (с карандашем) на карточке и последующем сохранении.

### Главная страница
![Main page](https://github.com/AlexKorostelev/ReactContactList/blob/main/client/public/image/main_page.jpg "Главная страница")
### Страница авторизации (логин/пароль a@a.a/123)
![Login page](https://github.com/AlexKorostelev/ReactContactList/blob/main/client/public/image/login_page.jpg "Cтраница авторизации")
