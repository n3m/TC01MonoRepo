# Instrucciones para poder correr el Backend

(Se recomienda el uso de un Python Virtual Environtment)

     1. Entrar en la carpeta de /backend
     2. Crear (3.12.X) VENV: `pyenv virtualenv <nombreCualquiera>` y activarlo: `source activate <nombreCualquiera>`
     3. Instalar `poetry` con pip: `pip install poetry "fastapi[standard]"`
     4. Instalar dependencias `poetry install`
     5. Correr el proyecto con: `fastaapi dev main.py`
     5a. El correcto estara en localhost:8000 por default.