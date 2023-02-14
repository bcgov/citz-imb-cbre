export interface Incident {
  id: string;
  buildingId: string;
  incidentTypeId: string;
  incidentNumber: string;
  cbreIncidentNumber: string;
  contract: string;
  submitted: Date;
  discovered: Date;
  occured: Date;
  reported: Date;
  description: string;
  fiscalYear: string;
  level: "level 1" | "level 2";
  primaryIncidentType: string;
  secondaryIncidentType: string;
  shortDescription: string;
  status: "submitted" | "complete";
}
