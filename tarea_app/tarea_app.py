import reflex as rx 
from datetime import datetime
from typing import List, Optional, Dict
from .models import Tarea

class EstadoTarea(rx.State):
    """El estado para nuestra aplicación de tareas."""
    nuevo_titulo: str = ""
    nuevo_descripcion: str = ""

    #Lista de tareas#
    tareas: List[Dict] = []

    #Variable para almacenar el ID de la Tarea que se esta editando
    id_edicion: Optional[int] = None

    def cargar_tareas(self):
        """Carga las tareas desde la base de datos."""
        try:    
            with rx.session() as session:
                # Obtener tareas de la base de datos
                db_tareas = session.query(Tarea).order_by(Tarea.fecha_creacion.desc()).all()

                # Mostrar información de depuración
                print(f"Cargando {len(db_tareas)} tareas de la base de datos")

                # Convertir a diccionarios y añadir fecha con formato dia-mes-año hora:minuto
                formato_tareas = []
                for tarea in db_tareas:
                    tarea_dict = {
                        "id": tarea.id,
                        "titulo": tarea.titulo,
                        "descripcion": tarea.descripcion,
                        "completada": tarea.completada,
                        "fecha_creacion": tarea.fecha_creacion,
                        "formato_tarea": tarea.fecha_creacion.strftime("%d-%m-%Y %H:%M") if tarea.fecha_creacion else ""
                    }
                    formato_tareas.append(tarea_dict)
                    self.tareas = formato_tareas    
                
        except Exception as e:
            print(f"Error cargando tareas: {str(e)}")
            # Mostrar mensaje de error en UI
            self.tareas = []

    def agregar_tarea(self):
        """Agrega una nueva tarea a la base de datos."""
        if not self.nuevo_titulo.strip():
            return rx.window_alert("El título no puede estar vacío")
        try: 
            with rx.session() as session:
                # Crear nueva tarea
                tarea = Tarea(
                    titulo=self.nuevo_titulo,
                    descripcion=self.nuevo_descripcion,
                    completada=False,
                    fecha_creacion=datetime.now(),
                )
                session.add(tarea)
                session.commit()

                # Vaciar el formulario
                self.nuevo_titulo = ""
                self.nuevo_descripcion = ""

                # Recargar tareas
                self.cargar_tareas()

                # Mostrar mensaje de confirmación
                return rx.window_alert("Tarea registrada correctamente")

        except Exception as e:
            # En caso de error, mostrar mensaje de error            
            return rx.window_alert(f"Error al agregar la tarea: {str(e)}")

    def editar_tarea(self, id_tarea: int):
        """Edita una tarea de la base de datos."""
        if not self.nuevo_titulo.strip():
            return rx.window_alert("El título no puede estar vacío")
            
        try:
            with rx.session() as session:
                tarea_app = session.query(Tarea).filter(Tarea.id == id_tarea).first()
                if tarea_app:
                    tarea_app.titulo = self.nuevo_titulo
                    tarea_app.descripcion = self.nuevo_descripcion
                    session.add(tarea_app)
                    session.commit()
                    
                    # Limpiar el formulario
                    self.nuevo_titulo = ""
                    self.nuevo_descripcion = ""
                    self.id_edicion = None
                    
                    # Recargar tareas
                    self.cargar_tareas()
                    return rx.window_alert("Tarea actualizada correctamente")
        except Exception as e:
            return rx.window_alert(f"Error al actualizar la tarea: {str(e)}")

    def marcar_tarea(self, id_tarea: int):
        """Marca una tarea como completada o no completada."""
        try:
            with rx.session() as session:
                tarea_app = session.query(Tarea).filter(Tarea.id == id_tarea).first()
                if tarea_app:
                    tarea_app.completada = not tarea_app.completada
                    session.add(tarea_app)
                    session.commit()
                    self.cargar_tareas()
    
        except Exception as e:
            return rx.window_alert(f"Error al actualizar la tarea: {str(e)}")

    def eliminar_tarea(self, id_tarea: int):
        """Elimina una tarea de la base de datos."""
        try:
            with rx.session() as session:
                tarea_app = session.query(Tarea).filter(Tarea.id == id_tarea).first()
                if tarea_app:
                    session.delete(tarea_app)
                    session.commit()
                    self.cargar_tareas()

        except Exception as e:
            return rx.window_alert(f"Error al eliminar la tarea: {str(e)}")

def item_tarea(tarea):
    """Componente para mostrar una tarea individual """
    return rx.hstack(
        rx.checkbox(
            is_checked=tarea.completada,
            on_change=lambda: EstadoTarea.marcar_tarea(tarea.id),
        ),

        rx.vstack(
            rx.text(
                tarea.titulo,
                text_decoration=rx.cond(
                    tarea.completada,
                        "line-through",
                        "none",
                    ),
                font_weight="bold", 
            ),
            rx.text(
                rx.cond(
                    tarea.descripcion != "",
                        tarea.descripcion,
                        "Sin descripción",
                    ),
                    color="gray",
                    font_size="1rem",
            ),
            rx.hstack(
                rx.text(
                    "Creado: ",
                    color="gray",
                    font_size="0.8rem"
                ),
                rx.text(
                    tarea.formato_tareas,
                    color="gray",
                    font_size="1rem",
                ),
                spacing="1",
            ),
            align_items="start",
            width="100%",
        ),
        rx.spacer(),
        rx.button(
            "Editar",
            on_click=lambda: EstadoTarea.editar_tarea(tarea.id),
            color_scheme="blue",
            border_radius="10px",
            size="1"
        ),
        rx.button(
            "Eliminar",
            on_click=lambda: EstadoTarea.eliminar_tarea(tarea.id),
            color_scheme="red",
            border_radius="10px",
            size="1"
        ),
        width="100%",
        border="1px solid",
        border_color="gray.200",
        border_radius="10px",
        padding="15px",
        margin_y="2",    
    )
        
def lista_tareas():
    """Componente para mostrar la lista de tareas"""
    return rx.cond(
        EstadoTarea.tareas.length() > 0,
        rx.vstack(
            rx.foreach(
                EstadoTarea.tareas,
                item_tarea,
            ),
            width="100%",
            padding="4",
        ),
        rx.box(
            "No hay tareas pendientes. ¡Comienza a agregar una!",
            padding="4",
            text_align="center",
            color="gray",
        ),
    )

    
def formulario_tarea():
    """Formulario para añadir nuevas tareas"""
    return rx.vstack(
        rx.input(
            placeholder="Título de la tarea",
            value=EstadoTarea.nuevo_titulo,
            on_change=EstadoTarea.set_nuevo_titulo,
            width="100%",
        ),
        rx.text_area(
            placeholder="Descripción",
            value=EstadoTarea.nuevo_descripcion,
            on_change=EstadoTarea.set_nuevo_descripcion,
            width="100%",
        ),
        rx.button(
            "Agregar Tarea",
            on_click=EstadoTarea.agregar_tarea,
            width="100%",
            background_color="blue",
            color="white",
            border="none",
            border_radius="10px",
            padding="3",
            margin_y="2",
        ),
        padding="15px",
        width="100%",
        spacing="4",
    )
    
def index():
    """Pagina principal de la aplicación"""
    return rx.container(
        rx.vstack( 
            rx.heading("Gestor de Tareas", font_size="2rem", margin_y="3px"),
            rx.divider(),
            formulario_tarea(),
            rx.divider(),
            lista_tareas(),
            padding="15px",
            width="100%",
            max_width="600px",
            border_radius="10px",            
            background_color="#1E1E1E",
            color="white",
        ),
        # Parametros de diseño para contenedor principal
        color_scheme="dark",
        background_color="#121212",
        min_height="100vh",
        padding="15px",
        center_content=True,
    )

# Configurar la apliación
app = rx.App(
    theme=rx.theme(appearance="dark"), # Tema oscuro
)
app.add_page(index, on_load=EstadoTarea.cargar_tareas)
