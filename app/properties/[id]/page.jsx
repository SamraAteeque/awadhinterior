import React from "react";
import { notFound } from "next/navigation";
import PropertyData from "@/app/JsonData/Propertys.json";
import PropertyPageClient from "./PropertyPageClient"; // <-- Import new client component

// This function stays the same
export async function generateStaticParams() {
  return PropertyData.map((property) => ({
    id: property.id.toString(),
  }));
}

// This is now a Server Component
export default async function PropertyDetailPage({ params }) {
  const { id } = await params;
  const property = PropertyData.find((item) => item.id.toString() === id);

  if (!property) {
    notFound();
  }

  const relatedProperties = PropertyData.filter(
    (item) => item.id.toString() !== id
  );

  const keyFeatures =
    property.keyFeatures || [
      "Spacious Open-Plan Living Area",
      "Floor-to-Ceiling Windows",
      "Imported Marble Flooring",
      "Smart Home Integration Ready",
      "Custom Italian Kitchen Cabinets",
      "Landscaped Private Garden Access",
    ];

  // Pass all data as props to the client component
  return (
    <PropertyPageClient
      property={property}
      relatedProperties={relatedProperties}
      keyFeatures={keyFeatures}
    />
  );
}