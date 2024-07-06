CREATE TABLE IF NOT EXISTS "auth_token" (
	"refreshToken" text NOT NULL,
	"user_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job_details" (
	"parastatal" text NOT NULL,
	"grade_level" text NOT NULL,
	"contribution_type" text NOT NULL,
	"organization_name" text NOT NULL,
	"user_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"phone" text NOT NULL,
	"password" text NOT NULL,
	"bvn" integer NOT NULL,
	"first_name" text,
	"last_name" text,
	"email" text,
	"country" text,
	"state" text,
	"lga" text,
	"identity_proof" text,
	"dob" text,
	"gender" text,
	"address" text,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"transaction_type" text NOT NULL,
	"amount" text NOT NULL,
	"from" text NOT NULL,
	"date" text NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "auth_token" ADD CONSTRAINT "auth_token_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_details" ADD CONSTRAINT "job_details_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
