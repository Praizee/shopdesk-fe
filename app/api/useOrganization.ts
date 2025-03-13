"use client";

import { useState, useEffect } from "react";

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

export function useOrganization() {
  const [organizationId, setOrganizationId] = useState<string | null>(null);
  const [organizationName, setOrganizationName] = useState<string | null>(null);
  const [organizationInitials, setOrganizationInitials] = useState<
    string | null
  >(null);

  useEffect(() => {
    const name = sessionStorage.getItem("organizationName");
    setOrganizationId(sessionStorage.getItem("organizationId"));
    setOrganizationName(name);
    setOrganizationInitials(name ? getInitials(name) : null);
  }, []);

  return { organizationId, organizationName, organizationInitials };
}
