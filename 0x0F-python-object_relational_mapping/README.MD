# Object-Relational Mapping with Python

This repository contains Python scripts that demonstrate Object-Relational Mapping (ORM) concepts using MySQL databases. The scripts interact with MySQL databases using both raw SQL queries and SQLAlchemy ORM.

## Table of Contents

- [Object-Relational Mapping with Python](#object-relational-mapping-with-python)
  - [Table of Contents](#table-of-contents)
  - [General Info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Scripts](#scripts)
  - [Usage](#usage)

## General Info

The scripts in this repository are part of a project aimed at understanding and implementing Object-Relational Mapping (ORM) in Python. The project demonstrates connecting to MySQL databases, executing SQL queries, and using SQLAlchemy ORM for database operations. Each script performs specific tasks related to querying, inserting, updating, and deleting data from the database.

## Technologies

- Python 3.8.5
- MySQL 8.0
- MySQLdb module 2.0.x
- SQLAlchemy module 1.4.x

## Setup

To run these scripts, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/waltertaya/alx-higher_level_programming.git
    ```

2. Install required dependencies:

    ```bash
    sudo apt-get install python3.8-venv
    sudo apt-get install python3-dev
    sudo apt-get install libmysqlclient-dev
    sudo apt-get install zlib1g-dev
    sudo pip3 install mysqlclient
    sudo pip3 install SQLAlchemy
    ```

3. Navigate to the repository directory:

    ```bash
    cd 0x0F-python-object_relational_mapping
    ```

4. Execute the scripts as described in the [Usage](#usage) section.

## Scripts

Here's a brief overview of the scripts available in this repository:

1. `0-select_states.py`: Lists all states from the database.
2. `1-filter_states.py`: Lists states with names starting with 'N'.
3. `2-my_filter_states.py`: Lists states based on user input.
4. `3-my_safe_filter_states.py`: Lists states based on user input, preventing SQL injection.
5. `4-cities_by_state.py`: Lists all cities from the database.
6. `5-filter_cities.py`: Lists cities of a specific state based on user input.
7. `6-model_state.py`: Defines the State class and creates the corresponding table in the database using SQLAlchemy.
8. `7-model_state_fetch_all.py`: Lists all State objects from the database.
9. `8-model_state_fetch_first.py`: Prints the first State object from the database.
10. `9-model_state_filter_a.py`: Lists all State objects containing the letter 'a'.
11. `10-model_state_my_get.py`: Prints the State object with the specified name.
12. `11-model_state_insert.py`: Adds a new State object to the database.
13. `12-model_state_update_id_2.py`: Changes the name of a State object with id=2.
14. `13-model_state_delete_a.py`: Deletes all State objects containing the letter 'a'.
15. `model_state.py`: Contains the State class definition.
16. `model_city.py`: Contains the City class definition.

## Usage

Each script can be executed with the following command format:

```bash
./script_name.py <mysql_username> <mysql_password> <database_name> [additional_arguments]
```

Replace `<mysql_username>`, `<mysql_password>`, and `<database_name>` with your MySQL credentials and database name. Additional arguments may be required based on the script's functionality, such as state names for filtering or updating.
