import { useParams, Navigate } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicesData } from "@/data/servicesData";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !servicesData[slug]) {
    return <Navigate to="/" replace />;
  }

  return <ServicePageLayout data={servicesData[slug]} />;
};

export default ServicePage;
