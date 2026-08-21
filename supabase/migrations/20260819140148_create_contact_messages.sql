/*
# Create contact_messages table

1. Purpose
  Stores messages submitted through the portfolio site's contact form so
  Karabo can review enquiries from potential employers or clients later.

2. New Tables
  - `contact_messages`
    - `id` (uuid, primary key)
    - `name` (text, not null) - sender's name
    - `email` (text, not null) - sender's email address
    - `message` (text, not null) - message body
    - `created_at` (timestamptz, default now()) - submission time

3. Security
  - Enable RLS on `contact_messages`.
  - Allow anyone (anon + authenticated) to INSERT a message, since visitors
    are not signed in and must be able to submit the contact form.
  - No SELECT/UPDATE/DELETE policies are added for anon/authenticated, so
    submitted messages cannot be read back or altered by site visitors.
    Only the project owner (via the Supabase dashboard, using elevated
    access) can view them.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
