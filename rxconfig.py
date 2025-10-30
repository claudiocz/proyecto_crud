import reflex as rx
import os

# Para usar una variable de entorno o SQLite por defecto
DATABASE_URL = os.getenv("DATABASE_URL","sqlite:///sqlite.db")

config = rx.Config(
    app_name="tarea_app",
)