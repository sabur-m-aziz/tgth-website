"use client";
import { Navbar, NavbarContent, NavbarMenuToggle } from "@nextui-org/react";
import { Logo } from "./Logo";
import { useState } from "react";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components";
import "./navbar.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TGTHNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const onClickJoinUs = () => {
    const contactFormElement = document.getElementById("contact-form");
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/contact-us");
    }
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about" },
    { title: "Why Us", link: "/why-us" },
    {
      title: "Our Services",
      link: "/our-services",
      children: [
        {
          title: "Creative",
          children: [
            { title: "Content Developer", link: "/content-developer" },
            { title: "Content Moderator", link: "/content-moderator" },
            { title: "Creative Designer", link: "/creative-designer" },
            { title: "Graphic Designer", link: "/graphic-designer" },
            {
              title: "Social Media Specialist",
              link: "/social-media-specialist",
            },
          ],
        },
        {
          title: "Customer Service",
          children: [
            {
              title: "Customer Service Representative",
              link: "/customer-service-representative",
            },
            { title: "Reservation Agent", link: "/reservation-agent" },
          ],
        },
        {
          title: "Finance",
          children: [
            { title: "Accountant", link: "/accountant" },
            { title: "AR and AP Specialist", link: "/ar-ap-specialist" },
            { title: "Finance Specialist", link: "/finance-specialist" },
            { title: "Financial Analyst", link: "/financial-analyst" },
            { title: "Payroll Specialist", link: "/payroll-specialist" },
          ],
        },
        {
          title: "Human Resources",
          children: [
            {
              title: "Administrative Assistant",
              link: "/administrative-assistant",
            },
            { title: "Data Entry Specialist", link: "/data-entry-specialist" },
            {
              title: "Talent Acquisition Specialist",
              link: "/talent-acquisition-specialist",
            },
          ],
        },
        {
          title: "Logistics",
          children: [
            { title: "Logistics Coordinator", link: "/logistics-coordinator" },
            {
              title: "Order Processing Specialist",
              link: "/order-processing-specialist",
            },
            {
              title: "Procurement Specialist",
              link: "/procurement-specialist",
            },
          ],
        },
        {
          title: "Marketing",
          children: [
            {
              title: "Digital Marketing Specialist",
              link: "/digital-marketing-specialist",
            },
            { title: "Marketing Manager", link: "/marketing-manager" },
            { title: "Marketing Specialist", link: "/marketing-specialist" },
            {
              title: "Performance Marketing Specialist",
              link: "/performance-marketing-specialist",
            },
            { title: "SEO Specialist", link: "/seo-specialist" },
          ],
        },
        {
          title: "Safety",
          children: [{ title: "Claims Analyst", link: "/claims-analyst" }],
        },
        {
          title: "Sales",
          children: [
            { title: "Booking Agent", link: "/booking-agent" },
            { title: "Sales Support", link: "/sales-support" },
          ],
        },
        {
          title: "Technology Services",
          children: [
            { title: "Data Analyst", link: "/data-analyst" },
            { title: "Data Engineer", link: "/data-engineer" },
            {
              title: "Database Administrator",
              link: "/database-administrator",
            },
            { title: "Software Architect", link: "/software-architect" },
            { title: "Software Developer", link: "/software-developer" },
            {
              title: "Technical Support Specialist",
              link: "/technical-support-specialist",
            },
            { title: "Web Developer", link: "/web-developer" },
          ],
        },
      ],
    },
    { title: "Careers", link: "/careers" },
    { title: "FAQs", link: "/faq" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "TGTH Blog", link: "https://tgth.com.au/blog" },
  ];

  return (
    <div className="container mx-auto relative">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className=" custom-navbar bg-white"
      >
        <Logo />
        <DesktopMenu menuItems={menuItems} />
        <MobileMenu menuItems={menuItems} setIsMenuOpen={setIsMenuOpen} />
        <NavbarContent justify="end">
          <Button
            variant="primary"
            size="md"
            text="Let's Talk"
            containerClass="hidden lg:flex"
            // link="/contact-us"
            onClick={onClickJoinUs}
          />
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden py-3.5"
            icon={() => (
              <Image
                height={24}
                width={24}
                alt="bar_icon"
                src="/icons/three-bar.svg"
                className="w-[24px] h-[24px] rounded-none"
              />
            )}
          />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
