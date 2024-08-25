
# Instrucciones para poder correr el Backend (Python)

(Se recomienda el uso de un Python Virtual Environtment)

     1. Entrar en la carpeta de /backend_python
     2. Crear (3.12.X) VENV: `pyenv virtualenv <nombreCualquiera>` y activarlo: `source activate <nombreCualquiera>`
     3. Instalar `poetry` con pip: `pip install poetry "fastapi[standard]"`
     4. Instalar dependencias `poetry install`
     5. Correr el proyecto con: `fastaapi dev main.py`
     5a. El correcto estara en localhost:8000 por default.

# Instrucciones para poder correr el Frontend
### Version de Node Recomendada: lts/iron

    1. Entrar en la carpeta de /frontend
    2. Instalar pnpm: `npm i -g pnpm` si es que no se tiene.
    3. Instalar dependencias: `pnpm install`
    4. Correr el proyecto:  `pnpm dev`
    5. El proyecto se correra en el puerto 3000 por default.
    6. Acceder a "localhost:3000/"
    7. Visualizar pagina

# Commits Complementarios (despues de correo):
    1. 061 - Se agrego un usecase layer a la API para complementar