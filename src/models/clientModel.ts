export interface Client {
  client_id: number,
  name: string, 
  email: string, 
  phone_number?: string | null;
}