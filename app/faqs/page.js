'use client'
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
                    <AccordionHeader onClick={() => handleOpen(1)}>What is truck dispatching?</AccordionHeader>
                    <AccordionBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum amet mollitia
                        quaerat itaque voluptas officiis repudiandae sunt enim quos? Libero illo illum laboriosam
                        inventore sed quaerat tenetur expedita sapiente?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        How much does dispatching cost?
                    </AccordionHeader>
                    <AccordionBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum amet mollitia
                        quaerat itaque voluptas officiis repudiandae sunt enim quos? Libero illo illum laboriosam
                        inventore sed quaerat tenetur expedita sapiente?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        How fast can I get loads?
                    </AccordionHeader>
                    <AccordionBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum amet mollitia
                        quaerat itaque voluptas officiis repudiandae sunt enim quos? Libero illo illum laboriosam
                        inventore sed quaerat tenetur expedita sapiente?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                        How do I get paid?
                    </AccordionHeader>
                    <AccordionBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum amet mollitia
                        quaerat itaque voluptas officiis repudiandae sunt enim quos? Libero illo illum laboriosam
                        inventore sed quaerat tenetur expedita sapiente?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        Can I choose my loads?
                    </AccordionHeader>
                    <AccordionBody>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus ipsum amet mollitia
                        quaerat itaque voluptas officiis repudiandae sunt enim quos? Libero illo illum laboriosam
                        inventore sed quaerat tenetur expedita sapiente?
                    </AccordionBody>
                </Accordion>
            </div>
            <Contact />
        </>
    );
}


export default Faq