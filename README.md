# proyecto_crud

# Iniciar proyecto python y reflex

[**Installation**](https://reflex.dev/docs/getting-started/installation#installation)

Reflex requires `Python 3.10+`.

[**Virtual Environment**](https://reflex.dev/docs/getting-started/installation#virtual-environment)

We **highly recommend** creating a virtual environment for your project.

[**venv**](https://docs.python.org/3/library/venv.html) is the standard option. [**conda**](https://conda.io/) and [**poetry**](https://python-poetry.org/) are some alternatives.

[**Install Reflex on your system**](https://reflex.dev/docs/getting-started/installation#install-reflex-on-your-system)

[**Linux**](https://reflex.dev/docs/getting-started/installation#install-on-macos/linux)

We will go with [**venv**](https://docs.python.org/3/library/venv.html) here.

[**Create the project directory**](https://reflex.dev/docs/getting-started/installation#create-the-project-directory)

Replace `my_app_name` with your project name. Switch to the new directory.

`mkdir my_app_namecd my_app_name`

[**Setup virtual environment**](https://reflex.dev/docs/getting-started/installation#setup-virtual-environment)

`python3.13 -m venv .venv`

`source .venv/bin/activate`

[**Install Reflex package**](https://reflex.dev/docs/getting-started/installation#install-reflex-package)

Reflex is available as a [**pip**](https://pypi.org/project/pip/) package.

`pip install reflex`

[**`Initialize the project`**](https://reflex.dev/docs/getting-started/installation#initialize-the-project)

`reflex init --name (nombre_app)`

**`Initializedata base the project`**

`reflex db init`

`reflex db makemigrations --message ‘Add task model’`

`reflex db migrate`