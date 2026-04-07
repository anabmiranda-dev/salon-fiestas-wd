// src/utils/supabase.js
import { createClient } from '@supabase/supabase-js';
import { BOOKED_DATES } from '../data/content';

const url = process.env.REACT_APP_SUPABASE_URL || '';
const key = process.env.REACT_APP_SUPABASE_ANON_KEY || '';
export const supabase = url && key ? createClient(url, key) : null;

export async function getBookedDates() {
  if (!supabase) return BOOKED_DATES;
  const { data, error } = await supabase
    .from('bookings')
    .select('event_date')
    .eq('status', 'confirmed');
  if (error) return BOOKED_DATES;
  return data.map(r => r.event_date);
}

export async function submitInquiry(form) {
  if (!supabase) {
    await new Promise(r => setTimeout(r, 1200));
    return { success: true };
  }
  const { error } = await supabase.from('inquiries').insert([{
    name: form.name,
    phone: form.phone,
    email: form.email,
    event_date: form.date,
    event_type: form.eventType,
    package: form.package,
    guests: form.guests,
    message: form.message,
    status: 'new',
  }]);
  if (error) return { success: false, error: error.message };
  return { success: true };
}

/*
── SQL Supabase ────────────────────────────────────────

create table inquiries (
  id         uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name       text not null,
  phone      text not null,
  email      text,
  event_date date,
  event_type text,
  package    text,
  guests     text,
  message    text,
  status     text default 'new'
);

create table bookings (
  id         uuid default gen_random_uuid() primary key,
  event_date date not null,
  status     text default 'confirmed'
);

alter table inquiries enable row level security;
create policy "Public insert" on inquiries for insert with check (true);

alter table bookings enable row level security;
create policy "Public read" on bookings for select using (true);
────────────────────────────────────────────────────────
*/
