# Dynamic Schema Form Challenge

## Challenge Overview

Build a dynamic form renderer that uses the `schema.json` file to create a responsive form UI. The form should automatically update whenever the schema file changes.

## Task Requirements

1. **Dynamic Form Rendering**: Parse the `schema.json` file and dynamically generate form fields based on the configuration
2. **Reactive Updates**: Any changes to the schema file should automatically update the UI
3. **Error Handling**: Display validation errors from the schema and handle form validation appropriately
4. **Proper Form Submission**: Form data should be structured according to the field names, converting dot notation to nested objects

## Schema Structure

The `schema.json` contains a PostgreSQL connector configuration with the following structure:

- **name**: Connector class name (`io.debezium.connector.postgresql.PostgresConnector`)
- **configs**: Array of configuration objects, each containing:
  - **definition**: Field metadata including:
    - `name`: Field identifier (e.g., `database.hostname`)
    - `type`: Field type (`STRING`, `INT`, `PASSWORD`)
    - `display_name`: Human-readable label
    - `documentation`: Field description
    - `default_value`: Default value
    - `importance`: Field importance level
    - `required`: Whether field is required
  - **value**: Current field state including:
    - `value`: Current field value
    - `errors`: Validation errors array
    - `visible`: Whether field should be displayed

## Form Submission Format

Form data should be converted from dot notation to nested objects:

```javascript
// Input fields: topic.prefix, database.hostname, database.port, database.user, database.password
// Should become:
{
  "topic": {
    "prefix": "value"
  },
  "database": {
    "hostname": "localhost",
    "port": 5432,
    "user": "postgres",
    "password": "secret"
  }
}
```

## Error Handling

The form should handle validation errors from the schema:

- Each field's `value.errors` array contains validation messages that should be displayed
- Example: `topic.prefix` has error: `"The 'topic.prefix' value is invalid: A value is required"`
- Error messages should be shown near the respective form fields
- Fields with errors should be visually distinguished (e.g., red border, error styling)
- Form submission should be prevented when validation errors exist

## Setup

Install the dependencies:

```bash
npm install
```

## Development

Start the dev server:

```bash
npm dev
```

Build the app for production:

```bash
npm build
```

Preview the production build locally:

```bash
npm preview
```
