import React from 'react';
import {AutoScroller} from "@/app/components/index";

const ClientsCertificates = ({title, Certificate }) => {
    return (
        <div className={'py-12'}>
            <h2 className="h2 text-center font-bold">{title}</h2>
            <div className={"mt-8"}>
                {Certificate ? (
            <AutoScroller/>

                ) : (
            <AutoScroller toRight={false}/>
                )}
            </div>
        </div>
    );
}

export default ClientsCertificates;