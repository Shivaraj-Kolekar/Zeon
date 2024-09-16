ALTER TABLE "assets" DROP CONSTRAINT "assets_assigned_to_employees_employee_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assets" ADD CONSTRAINT "assets_assigned_to_employees_employee_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."employees"("employee_id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
