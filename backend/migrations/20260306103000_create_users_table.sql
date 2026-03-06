CREATE TYPE user_role AS ENUM ('Customer', 'Organizer', 'GateStaff');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    organizer_company VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
