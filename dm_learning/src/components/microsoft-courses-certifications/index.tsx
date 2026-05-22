import React from "react";
import Banner from "./Banner";
import "../../../public/css/certifications.css";
import GetConnected from "./GetConnected";
import DescriptionOfRole from "./DescriptionOfRole";
import AllYouNeedToDo from "./AllYouNeedToDo";

interface PageData {
  title: string;
  description: string;
  image: string;
  descImage: string;
  secondSectionTitle: string;
  secondSectionDescription: string;
  allYouNeedToDo: (
    | {
        title: string;
        content: {
          image: string;
          title: string;
          width: number;
          height: number;
          description: string;
        }[];
      }
    | {
        image: string;
        title: string;
        width: number;
        height: number;
        description: string;
      }
  )[];
}

interface MicrosoftCoursesCertificationsProps {
  data: PageData;
}

const MicrosoftCoursesCertifications: React.FC<
  MicrosoftCoursesCertificationsProps
> = ({ data }) => {
  return (
    <>
      <Banner
        title={data.title}
        image={data.image}
        description={data.description}
      />
      <DescriptionOfRole
        descImage={data.descImage}
        secondSectionTitle={data.secondSectionTitle}
        secondSectionDescription={data.secondSectionDescription}
      />
      <AllYouNeedToDo allYouNeedToDo={data.allYouNeedToDo} />
      <GetConnected />
    </>
  );
};

export default MicrosoftCoursesCertifications;
