// CONFIGURACIÓN DE SUPABASE
const SUPABASE_URL = 'https://vzvbeblwmmblnnbpdzqx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6dmJlYmx3bW1ibG5uYnBkenF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMjIyMTMsImV4cCI6MjA4OTY5ODIxM30.XMXAa_w7Tqste1E4PBanyvfSBCCGuIorrhHw0RpCjtI';

// Inicializar cliente de Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Log de conexión
console.log('Supabase configurado correctamente');
