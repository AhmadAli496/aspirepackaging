"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Contact } from "../components";

const Faq = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="w-5/6 flex flex-col justify-center items-center mx-auto mb-7">
        <h2 className="text-4xl font-bold py-8">Frequently Ask Questions:</h2>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What types of packaging do you offer?
          </AccordionHeader>
          <AccordionBody>
            We offer a wide range of custom packaging solutions including boxes,
            mailers, pouches, labels, and eco-friendly options—designed to fit
            your product and brand perfectly.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Can I order packaging with my own branding and design?
          </AccordionHeader>
          <AccordionBody>
            Absolutely! At Aspire Packaging, we specialize in fully
            custom-branded packaging. You can upload your own designs or work
            with our in-house team to bring your vision to life.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
          Do you offer eco-friendly packaging options?
          </AccordionHeader>
          <AccordionBody>
            Yes! Sustainability matters to us. We provide recyclable, biodegradable, and compostable packaging options to help reduce your environmental impact.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            What is your minimum order quantity (MOQ)?
          </AccordionHeader>
          <AccordionBody>
           Our MOQs vary depending on the type of packaging, but we offer low minimums to support startups and small businesses. Contact us for specific product details.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            How long does production and delivery take?
          </AccordionHeader>
          <AccordionBody>
            Production typically takes 10–15 business days after design approval. Shipping times vary by location, but we always aim for fast and reliable delivery.
          </AccordionBody>
        </Accordion>
      </div>
      <Contact />
    </>
  );
};

export default Faq;
