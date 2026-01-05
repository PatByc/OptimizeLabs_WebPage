/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key) - Unique identifier for each consultation request
      - `name` (text, required) - Full name of the person requesting consultation
      - `email` (text, required) - Contact email address
      - `company_name` (text, required) - Name of the company
      - `industry` (text, required) - Industry type (restaurants, medical_clinics, hospitality, other)
      - `improvement_area` (text, required) - What they want to improve
      - `status` (text, default 'new') - Request status (new, contacted, scheduled, completed)
      - `created_at` (timestamptz) - When the request was created
      - `updated_at` (timestamptz) - When the request was last updated

  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for anonymous users to insert their own consultation requests
    - Add policy for authenticated admin users to view all requests (future use)

  3. Notes
    - Anonymous users can only insert, not read their own data (to prevent data mining)
    - Future admin access will require authentication
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company_name text NOT NULL,
  industry text NOT NULL,
  improvement_area text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a consultation request"
  ON consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);