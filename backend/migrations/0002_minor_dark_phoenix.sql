ALTER TABLE "assets" DROP CONSTRAINT "assets_assigned_to_employees_employee_id_fk";
--> statement-breakpoint
ALTER TABLE "assets" ALTER COLUMN "assigned_to" SET DATA TYPE varchar(30);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "assets" ADD CONSTRAINT "assets_assigned_to_employees_employee_id_fk" FOREIGN KEY ("assigned_to") REFERENCES "public"."employees"("employee_id") ON DELETE set null ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
