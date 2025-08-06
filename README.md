# Flights and Search Micro-Service

## Project Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/DipakNanecha2005/Flights-And-Search-Service.git

# Navigate into the folder
cd Flights-And-Search-Service

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```ini
# Node environment
NODE_ENV=development

# port
PORT=5000
```

> 💡 You can adjust the values as needed for your local setup.

### 3. Configure sequelize for MySQL

Create a `config.json` file in `src/config/` directory

```json
{
  "development": {
    "username": "YOUR_DATABASE_LOGIN_NAME",
    "password": "YOUR_DATABASE_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

> 💡 Tip: The default MySQL username is usually "root" and the password may be empty on local setups if not set.

### 4. Create the Database

Once your `config.json` is set up, run the **`npx sequelize db:create`** command in `src/` directory to create the development database.

### 5. Start the service

Run `npm start` command or `npm run dev` command for hot-reloading

---