# Управление продуктом 

## Стек технологий

Для реализации приложения используйте следующие технологии и библиотеки:

- React (функциональные компоненты и хуки);
- Redux Toolkit (createSlice, configureStore, useSelector, useDispatch и т.д.).

## Задача

Создать веб-приложение по [дизайн-макету в Figma](https://www.figma.com/file/PPouirJaJdOid3gsVLNT25/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-(%D1%84%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4)?type=design&node-id=0-1&mode=design). Веб-приложение состоит из 3 страниц:

1. Главная страница со списком выпускаемой продукции;
2. Страница создания типа продукции;
3. Страница редактирования продукции.

- Главная страница:
  - В таблице на главной странице показан список типов продукции, отсортированный по дате "нового от старого".
  - При нажатии на кнопку «Создать тип продукции» происходит переход на соответствующую страницу.
  - При клике на иконку «Инфо» появляется тултип с описанием продукции.
  - При нажатии на иконку «Карандаш» открывается страница редактирования типа продукции.
  - При нажатии на иконку «Корзина» пользователь должен учитывать желание удалить тип продукции в модальном окне, после чего происходит запрос на удаление.
  - После обновления данных (создание/редактирование/удаление) список на главной должен обновляться.

- Страницы создания/редактирования
  - Должна быть проверка на пустоту полей, помеченных звездочкой.
  - При нажатии на кнопку «Удалить» тип продукции удаляется, предварительно запросив подтверждение пользователя.
  - При нажатии на кнопку «Отмена» пользователь возвращается на главную страницу.
  - При нажатии на кнопку «Создать» происходит новая запись.
  - При нажатии на кнопку «Сохранить» данные обновляются.
  - После нажатия на любую из кнопок происходит редирект на главный экран.
  

## Установка и запуск

```bash
# Установка зависимостей
$ npm install

# Запуск приложения
$ npm run dev
```

## Взаимодействие с сервером

Для взаимодействия с сервером 
Все данные хранятся в бэкенде. В качестве API тестового задания используется json-server. Чтобы запустить сервер, необходимо посетить страинцу [тестового задания](https://github.com/axon-expert/frontend-test-task?tab=readme-ov-file).

### Развертывание сервера

```sh
# Переход в папку api
cd ./api

# Установка зависимостей
npm i

# Запуск сервера (будет развернут на http://localhost:8081)
npm start
```

