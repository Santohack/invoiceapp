CREATE TYPE "public"."status" AS ENUM('open', 'v', 'paid', 'uncollected');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"createdTs" timestamp DEFAULT now() NOT NULL,
	"status" "status" NOT NULL,
	"value" integer NOT NULL,
	"description" text NOT NULL
);
