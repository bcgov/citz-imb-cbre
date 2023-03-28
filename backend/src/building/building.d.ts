export interface Building {
  id: string;
  buildingNumber: string;
  status: "active" | "retired" | "draft" | "revision in progress";
  tenure: "leased" | "managed" | "owned";
  address: string;
  city: string;
  description: string;
}
