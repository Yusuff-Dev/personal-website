"use client";
import { useState } from "react";
import { projects } from "@/utils/data";
import Link from "next/link";
import Magnetic from "../../../components/magnetic";
import Heading from '../../../components/heading'

function page({ params }) {
  const [data, setData] = useState(projects);

  const filteredItem = data.filter((project) => project.name === params.work);
  
  return (
    <>
      <section>
        <div className="container">
          <Heading>{filteredItem[0].name}</Heading>
          <div className="flex items-center justify-between text-alternate uppercase my-10 flex-wrap">
            <div className="flex flex-col gap-5">
              <p className="flex items-center gap-1">
                type:{" "}
                <Magnetic>
                  <span className="block text-white-smoke">
                    {filteredItem[0].type || "template"}
                  </span>
                </Magnetic>
              </p>
              <p className="flex items-center gap-1">
                figma:{" "}
                <Magnetic>
                  <Link
                    target="blanc"
                    href={"https://www.figma.com/design/vCJHFYy1TYhMQ0QCw0uzdp/Aperture?node-id=0-1&node-type=CANVAS&t=WEbWCLvs3yqFBUmN-0"}
                    className="block border-b border-alternate text-white-smoke"
                  >
                    view design
                  </Link>
                </Magnetic>
              </p>
            </div>
            <div className="flex flex-col gap-5 items-end">
              <p className="flex items-center gap-1">
                year:{" "}
                <Magnetic>
                  <span className="block text-white-smoke">
                    {filteredItem[0].date}
                  </span>
                </Magnetic>
              </p>
              <p className="flex items-center gap-1">
                Website:{" "}
                <Magnetic>
                  <Link
                    target="blanc"
                    href={"https://aperturree.netlify.app/"}
                    className="block border-b border-alternate text-white-smoke"
                  >
                    view live
                  </Link>
                </Magnetic>
              </p>
            </div>
          </div>

          <div className="border">
            <Heading>next work</Heading>
            <div className="flex justify-center">
              <Magnetic>
                <Link href={""}
                  className="block border border-white-smoke text-white-smoke rounded-full uppercase px-7 py-4"
                >
                  {}
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
