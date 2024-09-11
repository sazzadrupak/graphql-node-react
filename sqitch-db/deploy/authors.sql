-- Deploy flipr:users to pg
-- requires: appschema

BEGIN;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  SET client_min_messages = 'warning';

  CREATE TABLE authors (
    id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email TEXT not null UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

COMMIT;
