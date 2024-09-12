"use client";
import Link from "next/link";
import Magnetic from "../../../components/magnetic";
import Heading from "../../../components/heading";
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabase";

function page({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select()
        .eq("name", params.work);
      if (error) {
        console.log(error.message);
      } else if (data) {
        setData(data[0]);
      }
    };

    getProjects();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <Heading>{params.work}</Heading>
          <p className='max-w-sm text-center uppercase mx-auto'>{data?.desc}</p>

          <div className="flex items-center justify-between text-alternate uppercase my-20 flex-wrap">
            <div className="flex flex-col gap-5">
              <p className="flex items-center gap-1">
                type:{" "}
                <Magnetic>
                  <span className="block text-white-smoke">{data?.type}</span>
                </Magnetic>
              </p>
              <p className="flex items-center gap-1">
                figma:{" "}
                <Magnetic>
                  <Link
                    target="blanc"
                    href={`${data?.figma}`}
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
                  <span className="block text-white-smoke">{data?.date}</span>
                </Magnetic>
              </p>

              <p className="flex items-center gap-1">
                Website:{" "}
                <Magnetic>
                  <Link
                    target="blanc"
                    href={`${data?.url}`}
                    className="block border-b border-alternate text-white-smoke"
                  >
                    view live
                  </Link>
                </Magnetic>
              </p>
            </div>
          </div>

          <div className="">
            <Heading>next work</Heading>
            <div className="flex justify-center">
              <Magnetic>
                <Link
                  href={""}
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
