
import reflex as rx
from datetime import datetime
from typing import Optional

class Tarea(rx.Model, table=True):
    """Modelo para representar una tarea"""    
    titulo: str
    descripcion: Optional[str] = None
    completada: bool = False
    fecha_creacion: datetime = datetime.now()