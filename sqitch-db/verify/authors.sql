-- Verify flipr:users on pg

BEGIN;

SELECT id, first_name, last_name, email, created_at, updated_at FROM authors WHERE FALSE;

ROLLBACK;
