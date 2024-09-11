-- Verify flipr:appschema on pg

BEGIN;

SELECT 1/COUNT(*) FROM information_schema.schemata WHERE schema_name = 'issue_tracker';

ROLLBACK;
