-- Revert flipr:appschema from pg

BEGIN;

DROP SCHEMA issue_tracker;

COMMIT;
