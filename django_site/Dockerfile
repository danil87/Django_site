FROM python:3.11-slim

WORKDIR /app

COPY . /app/
RUN pip install -r requirements.txt --use-deprecated=legacy-resolver

CMD python manage.py migrate \
    && python manage.py shell -c "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@example.com', 'admin')" \
    && python manage.py collectstatic --no-input \
    && python manage.py runserver 0.0.0.0:8000