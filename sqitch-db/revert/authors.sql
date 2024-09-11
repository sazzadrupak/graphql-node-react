-- Revert flipr:users from pg

BEGIN;

DROP TABLE authors;

COMMIT;
