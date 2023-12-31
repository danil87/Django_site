# Django_site

Для запауска проекта использую Docker необходимо, находясь в корневой папке проекта, в терминале ввести команду:

```
docker-compose up
```

Для заполнения базы данных тестовыми данными необходимо после запуска всех контейнеров ввести в терминале команды:
```
docker exec -it postgres sh
psql -U postgres -d django_db -a -f init.sql
```

Backend нахоидтся по адресу __localhost__:
* __/admin__ Django Admin панель
* __/item/id__ адрес для получения информации о item
* __/order/id__ адрес для получения информации о order
* __/buy/id__ адрес для получения session_id для покупки item
* __/buy/order/id__ адрес для получения session_id для покупки всех item, входящих в order 

Frontend находится по адресу __localhost:3000__:
* __/item/id__ страница, отображающая информацию о item и кнопку Buy
* __/order/id__ страница, отображающая информацию о order и кнопку Buy
___

Для запуска проекта локально необходимо:
* python 3.11+
* npm 8.11+
* PostreSQL 14+

Backend:
- Перейти в директорию __django_site__ и в теримнале ввести команды:
```
pip install -r requirements.txt
python manage.py createsuperuser
python manage.py makemigrations
python manage.py migrate
pyhton manage.py runserver
```

Frontend:
- Перейти в директорию __django_site-app__ и в терминале ввести команды:
```
npm i
npm run start
```

Backend нахоидтся по адресу __localhost:8000__:
* __/admin__ Django Admin панель
* __/item/id__ адрес для получения информации о item
* __/order/id__ адрес для получения информации о order
* __/buy/id__ адрес для получения session_id для покупки item
* __/buy/order/id__ адрес для получения session_id для покупки всех item, входящих в order 

Frontend находится по адресу __localhost:3000__:
* __/item/id__ страница, отображающая информацию о item и кнопку Buy
* __/order/id__ страница, отображающая информацию о order и кнопку Buy